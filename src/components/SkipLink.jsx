export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only fixed top-2 left-2 z-[100] bg-white text-black px-3 py-2 rounded shadow"
    >
      Aller au contenu
    </a>
  );
}