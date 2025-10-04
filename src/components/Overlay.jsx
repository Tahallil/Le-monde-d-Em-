// Overlay.jsx
export default function Overlay({ isVisible, onClick }) {
  if (!isVisible) return null;
  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
      onClick={onClick}
    />
  );
}
