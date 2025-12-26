// UI/Cursor.jsx
export default function Cursor({ x, y, children }) {
  return (
    <div
      className="cursor-item bounce"
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 5,
      }}
    >
      {children}
    </div>
  );
}
