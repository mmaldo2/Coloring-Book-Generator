import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import generateRouter from "./routes/generate.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// API routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});
app.use("/api", generateRouter);

// Production: serve React build
if (process.env.NODE_ENV === "production") {
  const clientDist = path.join(__dirname, "..", "client", "dist");

  app.use(
    express.static(clientDist, {
      maxAge: "1y",
      immutable: true,
      index: false,
    })
  );

  app.get("/{*path}", (_req, res) => {
    res.sendFile(path.join(clientDist, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
