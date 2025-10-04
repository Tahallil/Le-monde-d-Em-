import { FaTimes, FaHome, FaCalendarAlt, FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function SidebarMenu({ isOpen, onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <aside
      ref={menuRef}
      className={`fixed top-0 left-0 h-full w-72 z-50 transform transition-transform duration-300 px-8 py-6
        bg-gradient-to-b from-rose-perso/90 to-rose-perso/70 backdrop-blur-md shadow-2xl rounded-r-2xl
        ${isOpen ? "translate-x-0" : "-translate-x-[110%]"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/20 pb-4">
        <h2 className="font-titre text-3xl font-semibold text-white">Les pages d'Emâ</h2>
        <button
          onClick={onClose}
          className="text-2xl text-white hover:text-mauve-perso transition-colors"
          aria-label="Fermer le menu"
  type="button"
        >
          <FaTimes aria-hidden="true" focusable="false"/>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col mt-8 space-y-6">
        <Link
          onClick={onClose}
          to="/"
          className="flex items-center gap-3 text-3xl font-texte text-white hover:text-mauve-perso transition-all hover:scale-105"
        >
          <FaHome /> Accueil
        </Link>
        <Link
          onClick={onClose}
          to="/activites"
          className="flex items-center gap-3 text-3xl font-texte text-white hover:text-mauve-perso transition-all hover:scale-105"
        >
          <FaMapMarkedAlt /> Activités
        </Link>
        <Link
          onClick={onClose}
          to="/agenda"
          className="flex items-center gap-3 text-3xl font-texte text-white hover:text-mauve-perso transition-all hover:scale-105"
        >
          <FaCalendarAlt /> Agenda
        </Link>
      </nav>
    </aside>
  );
}
