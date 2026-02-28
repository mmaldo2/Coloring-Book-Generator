export default function LoadingState() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
        padding: 40,
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          border: "3px solid #e8dfd4",
          borderTop: "3px solid #2a1810",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 16,
          fontStyle: "italic",
          color: "#8b7355",
          letterSpacing: "0.08em",
        }}
      >
        Drawing your coloring page...
      </p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
