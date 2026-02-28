export default function PageCard({ page, flip, dir }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 8,
        boxShadow: "0 8px 40px rgba(42,24,16,0.15)",
        padding: 24,
        maxWidth: 700,
        width: "100%",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 15,
            fontStyle: "italic",
            color: "#8b7355",
            margin: 0,
          }}
        >
          &ldquo;{page.prompt}&rdquo;
        </p>
      </div>
      <div
        style={{
          aspectRatio: "3/4",
          background: "#fefcf9",
          borderRadius: 4,
          border: "1px solid #e8dfd4",
          overflow: "hidden",
          transition: "opacity 0.26s ease, transform 0.26s ease",
          opacity: flip ? 0 : 1,
          transform: flip
            ? `translateX(${dir === "next" ? "-20px" : "20px"})`
            : "translateX(0)",
        }}
      >
        <img
          src={`data:${page.mimeType};base64,${page.imageBase64}`}
          alt={page.prompt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}
