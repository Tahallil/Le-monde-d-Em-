import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Affiche le bouton quand on scroll un peu
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Clique -> remonte en haut avec smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-mauve-perso text-white shadow-lg hover:bg-[#4a2250] transition-colors"
        aria-label="Revenir en haut de la page"
        type="button"
      >
        <FaChevronUp size={24} />
      </button>
    )
  );
}
