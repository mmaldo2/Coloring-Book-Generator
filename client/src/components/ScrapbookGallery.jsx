import { useState, useRef, useEffect } from "react";
import PageCard from "./PageCard";

export default function ScrapbookGallery({ pages, onTryAgain }) {
  const [cur, setCur] = useState(pages.length - 1);
  const [flip, setFlip] = useState(false);
  const [dir, setDir] = useState("next");
  const prevLenRef = useRef(pages.length);

  // Auto-navigate to newest page when pages array grows
  useEffect(() => {
    if (pages.length > prevLenRef.current) {
      setCur(pages.length - 1);
    }
    prevLenRef.current = pages.length;
  }, [pages.length]);

  const go = (d) => {
    const n = d === "next" ? cur + 1 : cur - 1;
    if (n < 0 || n >= pages.length || flip) return;
    setDir(d);
    setFlip(true);
    setTimeout(() => {
      setCur(n);
      setFlip(false);
    }, 260);
  };

  const jump = (i) => {
    if (i === cur || flip) return;
    setDir(i > cur ? "next" : "prev");
    setFlip(true);
    setTimeout(() => {
      setCur(i);
      setFlip(false);
    }, 260);
  };

  const page = pages[cur];
  if (!page) return null;

  const handleDownload = () => {
    const byteString = atob(page.imageBase64);
    const bytes = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      bytes[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: page.mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `coloring-page-${Date.now()}.png`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    const win = window.open("", "_blank");
    win.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Coloring Page</title>
        <style>
          body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
          img { max-width: 100%; max-height: 100vh; object-fit: contain; }
          @media print { @page { size: portrait; margin: 0.5in; } }
        </style>
      </head>
      <body>
        <img src="data:${page.mimeType};base64,${page.imageBase64}" alt="${page.prompt}" />
        <script>window.onload = () => { window.print(); window.close(); }<\/script>
      </body>
      </html>
    `);
    win.document.close();
  };

  const btnStyle = (disabled) => ({
    background: disabled ? "#d4ccc0" : "#2a1810",
    color: "#fefcf9",
    border: "none",
    borderRadius: 6,
    padding: "10px 20px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 15,
    letterSpacing: "0.08em",
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.5 : 1,
  });

  const actionBtnStyle = {
    background: "transparent",
    color: "#2a1810",
    border: "1px solid #d4ccc0",
    borderRadius: 6,
    padding: "8px 16px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 14,
    letterSpacing: "0.06em",
    cursor: "pointer",
  };

  return (
    <div
      className="no-print"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: 700,
      }}
    >
      <PageCard page={page} flip={flip} dir={dir} />

      <div
        style={{
          textAlign: "center",
          marginTop: 8,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 13,
          color: "#a0917e",
          letterSpacing: "0.1em",
        }}
      >
        — {cur + 1} of {pages.length} —
      </div>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginTop: 12,
        }}
      >
        <button onClick={() => go("prev")} disabled={cur === 0} style={btnStyle(cur === 0)}>
          &larr; Previous
        </button>
        <div style={{ display: "flex", gap: 6 }}>
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => jump(i)}
              style={{
                width: i === cur ? 24 : 10,
                height: 10,
                borderRadius: 5,
                border: "none",
                background: i === cur ? "#2a1810" : "#c4b8a8",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
        <button
          onClick={() => go("next")}
          disabled={cur === pages.length - 1}
          style={btnStyle(cur === pages.length - 1)}
        >
          Next &rarr;
        </button>
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <button onClick={handleDownload} style={actionBtnStyle}>
          Download PNG
        </button>
        <button onClick={handlePrint} style={actionBtnStyle}>
          Print
        </button>
        <button onClick={() => onTryAgain(page.prompt)} style={actionBtnStyle}>
          Try Again
        </button>
      </div>
    </div>
  );
}
