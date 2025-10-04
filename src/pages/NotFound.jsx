import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-perso via-white to-rose-perso px-6">
      <Helmet>
        <title>Page non trouvée - Le monde d’Emâ</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="La page que vous cherchez n’existe pas. Retrouvez toutes les activités et informations sur le site officiel Le monde d’Emâ."
        />
      </Helmet>
      <h1 className="text-9xl font-bold font-titre text-mauve-perso mb-6">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-soustitre text-gray-800 mb-4">
        Oups... Cette page n’existe pas 🌸
      </h2>
      <p className="text-lg md:text-xl font-texte text-gray-600 mb-8 max-w-xl">
        Il semble que vous vous soyez égaré(e) dans{" "}
        <span className="text-mauve-perso font-semibold">le monde d’Emâ</span>.
        Pas de souci, revenez vers l’accueil pour continuer l’aventure.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-mauve-perso text-white font-texte text-lg rounded-lg shadow hover:bg-[#4a2250] transition-colors"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}
