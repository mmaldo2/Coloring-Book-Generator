import { Router } from "express";

const router = Router();

// Placeholder — Phase 2 will add the real Imagen integration
router.post("/generate", (_req, res) => {
  res.json({ success: false, data: null, error: { code: "API_ERROR", message: "Not yet implemented" } });
});

export default router;
