import { Router } from "express";
import rateLimit from "express-rate-limit";
import { generateColoringPage } from "../lib/imagen.js";
import { wrapPrompt } from "../lib/prompt.js";

const router = Router();

const generateLimiter = rateLimit({
  windowMs: 30 * 1000,
  max: 3,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req, res) => {
    res.status(429).json({
      success: false,
      data: null,
      error: {
        code: "RATE_LIMITED",
        message: "Generating too fast — please wait a moment and try again.",
      },
    });
  },
});

router.post("/generate", generateLimiter, async (req, res) => {
  const { prompt } = req.body;

  if (!prompt || typeof prompt !== "string" || prompt.trim().length < 3) {
    return res.status(400).json({
      success: false,
      data: null,
      error: {
        code: "INVALID_PROMPT",
        message: "Please enter a description of what you'd like to color.",
      },
    });
  }

  if (prompt.length > 500) {
    return res.status(400).json({
      success: false,
      data: null,
      error: {
        code: "INVALID_PROMPT",
        message: "Prompt is too long. Please keep it under 500 characters.",
      },
    });
  }

  const timeout = setTimeout(() => {
    if (!res.headersSent) {
      res.status(504).json({
        success: false,
        data: null,
        error: {
          code: "API_ERROR",
          message: "Image generation timed out. Please try again.",
        },
      });
    }
  }, 60000);

  try {
    const wrappedPrompt = wrapPrompt(prompt.trim());
    const result = await generateColoringPage(wrappedPrompt);

    clearTimeout(timeout);
    if (res.headersSent) return;

    res.json({
      success: true,
      data: {
        imageBase64: result.imageBase64,
        mimeType: result.mimeType,
        prompt: prompt.trim(),
      },
      error: null,
    });
  } catch (err) {
    clearTimeout(timeout);
    if (res.headersSent) return;

    const message = err.message || "";

    if (message.includes("blocked") || message.includes("safety") || message.includes("policy")) {
      return res.status(400).json({
        success: false,
        data: null,
        error: {
          code: "CONTENT_BLOCKED",
          message: "We couldn't generate that image. Try a different description.",
        },
      });
    }

    if (message.includes("429") || message.includes("rate") || message.includes("quota")) {
      return res.status(429).json({
        success: false,
        data: null,
        error: {
          code: "RATE_LIMITED",
          message: "Generating too fast — please wait a moment and try again.",
        },
      });
    }

    console.error("Image generation error:", err);
    res.status(500).json({
      success: false,
      data: null,
      error: {
        code: "API_ERROR",
        message: "Something went wrong. Please try again.",
      },
    });
  }
});

export default router;
