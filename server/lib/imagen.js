import { GoogleGenAI } from "@google/genai";

let ai;

function getClient() {
  if (!ai) {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY environment variable is not set");
    }
    ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return ai;
}

export async function generateColoringPage(prompt) {
  const client = getClient();

  const response = await client.models.generateImages({
    model: "imagen-4.0-fast-generate-001",
    prompt,
    config: {
      numberOfImages: 1,
      aspectRatio: "3:4",
    },
  });

  if (!response.generatedImages || response.generatedImages.length === 0) {
    throw new Error("No image was generated. The content may have been blocked.");
  }

  const image = response.generatedImages[0];
  return {
    imageBase64: image.image.imageBytes,
    mimeType: "image/png",
  };
}
