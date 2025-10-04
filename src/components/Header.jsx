import { FaBars, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header({ onMenuToggle }) {
  return (
    <header
      className="flex items-center justify-between px-4 py-2 bg-white shadow-md z-50 relative"
      role="banner"
    >
      <button
        onClick={onMenuToggle}
        className="text-2xl text-gray-800"
        aria-label="Ouvrir le menu"
      >
        <FaBars aria-hidden="true" focusable="false" />
      </button>

      {/* Titre de marque en div (style identique) */}
      <Link
        to="/"
        aria-label="Accueil - Le monde d'Emâ"
        className="flex items-center gap-3"
      >
        <picture>
          <source
            srcSet="/images/webp/logof-64.webp 1x, /images/webp/logof-128.webp 2x"
            type="image/webp"
          />
          <img
            src="/images/webp/logof-64.webp"
            alt="Logo Le monde d’Emâ"
            width="64"
            height="68"
            className="block h-14 w-auto"
            style={{ aspectRatio: "501 / 530" }}
            loading="eager"
            decoding="async"
          />
        </picture>
        <span className="font-bold font-titre text-4xl md:text-5xl text-gray-900">
          Le monde d'Emâ
        </span>
      </Link>

      <nav aria-label="Réseaux sociaux" className="flex space-x-4 text-xl">
        <a href="#footer" className="text-red-500" aria-label="Nous contacter">
          <FaEnvelope aria-hidden="true" focusable="false" />
        </a>
        <a
          href="https://www.instagram.com/le_monde_ema/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500"
          aria-label="Instagram Le monde d'Emâ"
        >
          <FaInstagram aria-hidden="true" focusable="false" />
        </a>
        <a
          href="https://www.facebook.com/people/Le-monde-dEm%C3%A2/61579992146987/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
          aria-label="Facebook Le monde d'Emâ"
        >
          <FaFacebook aria-hidden="true" focusable="false" />
        </a>
      </nav>
    </header>
  );
}
