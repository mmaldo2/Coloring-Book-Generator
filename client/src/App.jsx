import { useState } from "react";
import PromptInput from "./components/PromptInput";
import LoadingState from "./components/LoadingState";
import ScrapbookGallery from "./components/ScrapbookGallery";

export default function App() {
  const [pages, setPages] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async (prompt) => {
    setIsGenerating(true);
    setError(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.error?.message || "Something went wrong.");
        return;
      }

      setPages((prev) => [...prev, data.data]);
    } catch {
      setError("Could not reach the server. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div
      className="no-print"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <h1
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "#2a1810",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          Coloring Book Studio
        </h1>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 16,
            fontStyle: "italic",
            color: "#6b5744",
            letterSpacing: "0.15em",
          }}
        >
          Describe a scene and bring it to life as a coloring page
        </p>
        <div
          style={{
            width: 120,
            height: 2,
            background: "linear-gradient(90deg, transparent, #8b7355, transparent)",
            margin: "10px auto 0",
          }}
        />
      </div>

      {/* Prompt Input */}
      <PromptInput onGenerate={handleGenerate} isGenerating={isGenerating} />

      {/* Error */}
      {error && (
        <div
          style={{
            marginTop: 16,
            padding: "12px 20px",
            background: "#fef2f0",
            border: "1px solid #e8c4be",
            borderRadius: 8,
            maxWidth: 600,
            width: "100%",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 15,
              color: "#8b3a2a",
              margin: 0,
            }}
          >
            {error}
          </p>
        </div>
      )}

      {/* Loading */}
      {isGenerating && <LoadingState />}

      {/* Gallery */}
      {pages.length > 0 && !isGenerating && (
        <div style={{ marginTop: 24, width: "100%" }}>
          <ScrapbookGallery pages={pages} onTryAgain={handleGenerate} />
        </div>
      )}

      {/* Footer */}
      <p
        style={{
          marginTop: "auto",
          paddingTop: 24,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 12,
          color: "#a0917e",
          fontStyle: "italic",
        }}
      >
        Powered by FLUX — each page is uniquely generated for you
      </p>
    </div>
  );
}
