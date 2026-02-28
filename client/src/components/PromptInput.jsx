import { useState } from "react";

const MAX_LENGTH = 500;

export default function PromptInput({ onGenerate, isGenerating }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim().length < 3 || isGenerating) return;
    onGenerate(prompt.trim());
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 600 }}>
      <label
        htmlFor="prompt"
        style={{
          display: "block",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 16,
          fontStyle: "italic",
          color: "#6b5744",
          letterSpacing: "0.08em",
          marginBottom: 8,
          textAlign: "center",
        }}
      >
        Describe what you'd like to color...
      </label>
      <div style={{ position: "relative" }}>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value.slice(0, MAX_LENGTH))}
          placeholder="a dragon reading a book in a cozy library"
          rows={3}
          style={{
            width: "100%",
            padding: "14px 16px",
            paddingBottom: 32,
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 17,
            color: "#2a1810",
            background: "#fefcf9",
            border: "1px solid #d4ccc0",
            borderRadius: 8,
            resize: "vertical",
            outline: "none",
            lineHeight: 1.5,
          }}
          disabled={isGenerating}
        />
        <span
          style={{
            position: "absolute",
            bottom: 8,
            right: 12,
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 12,
            color: prompt.length > MAX_LENGTH - 50 ? "#a04030" : "#a0917e",
          }}
        >
          {prompt.length}/{MAX_LENGTH}
        </span>
      </div>
      <button
        type="submit"
        disabled={prompt.trim().length < 3 || isGenerating}
        style={{
          display: "block",
          width: "100%",
          marginTop: 12,
          padding: "12px 24px",
          background:
            prompt.trim().length < 3 || isGenerating ? "#d4ccc0" : "#2a1810",
          color: "#fefcf9",
          border: "none",
          borderRadius: 8,
          fontFamily: "'Playfair Display', serif",
          fontSize: 16,
          fontWeight: 600,
          letterSpacing: "0.1em",
          cursor:
            prompt.trim().length < 3 || isGenerating ? "default" : "pointer",
          opacity: prompt.trim().length < 3 || isGenerating ? 0.6 : 1,
          transition: "all 0.2s ease",
        }}
      >
        {isGenerating ? "Creating Your Page..." : "Generate Coloring Page"}
      </button>
    </form>
  );
}
