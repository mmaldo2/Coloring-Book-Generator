import { InferenceClient } from "@huggingface/inference";

let client;

function getClient() {
  if (!client) {
    const token = process.env.HF_TOKEN || "";
    client = new InferenceClient(token);
  }
  return client;
}

export async function generateColoringPage(prompt) {
  const hf = getClient();

  const blob = await hf.textToImage({
    model: "black-forest-labs/FLUX.1-schnell",
    inputs: prompt,
    parameters: {
      width: 768,
      height: 1024,
    },
  });

  const buffer = Buffer.from(await blob.arrayBuffer());
  const imageBase64 = buffer.toString("base64");

  return {
    imageBase64,
    mimeType: "image/jpeg",
  };
}
