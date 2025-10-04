import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const statusRef = useRef(null);
  const [botField, setBotField] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (botField || isSending) return;
    // nettoyage basique
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };
    if (!payload.name || !payload.email || !payload.message) {
      setStatus("❌ Merci de compléter tous les champs.");
      setTimeout(() => setStatus(""), 4000);
      return;
    }

    setIsSending(true);

    const module = await import("emailjs-com");
    const emailjs = module.default;


    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        payload,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("✅ Message envoyé !");
        setTimeout(() => statusRef.current?.focus(), 0);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      })
      .catch(() => setStatus("❌ Erreur lors de l'envoi. Réessayez."))
      .finally(() => setIsSending(false));
  };

  return (
    <footer
      id="footer"
      role="contentinfo"
      // contain: isole le layout/paint du footer pour éviter la propagation des reflows
      className="bg-rose-perso text-white py-6 px-6 relative pt-10 [contain:layout_paint]"
    >
      <div className="container mx-auto grid md:grid-cols-3 gap-10 items-start">
        {/* Bloc 1 : Logo / Description */}
        <div>
          {/* Titre : hauteur et line-height figés pour éviter le shift à l’arrivée des polices */}
          <h2 className="font-titre text-5xl mb-4 font-semibold leading-none min-h-[3rem]">
            Le monde d'Emâ
          </h2>

          <p className="text-white font-texte mb-6 leading-snug">
            Un espace de <span className="text-mauve-perso">créativité</span>,
            de <span className="text-mauve-perso">douceur</span> et de{" "}
            <span className="text-mauve-perso">bienveillance</span>.
          </p>

          <address className="not-italic text-white font-texte mb-6 leading-snug">
            <p className="min-h-[28px] flex items-center">
              <span className="mr-2" aria-hidden="true">📞</span>
              <a
                href="tel:+32472714970"
                aria-label="Appeler le +32 472 71 49 70"
                className="inline-block"
              >
                +32 (0)472 71 49 70
              </a>
            </p>
            <p className="min-h-[28px] flex items-center">
              <span className="mr-2" aria-hidden="true">📧</span>
              <a
                href="mailto:contact.lemondedema@gmail.com"
                aria-label="Envoyer un email à contact.lemondedema@gmail.com"
                className="inline-block"
              >
                contact.lemondedema@gmail.com
              </a>
            </p>
          </address>

          <p className="text-white font-texte leading-snug min-h-[24px]">
            Pour plus d'informations, contactez-moi via le formulaire.
          </p>
        </div>

        {/* Bloc 2 : Navigation */}
        <div>
          <h3 className="font-semibold font-titre text-5xl mb-4 leading-none min-h-[3rem]">
            Navigation
          </h3>
          <ul className="space-y-2 text-white/90">
            <li className="min-h-[32px] flex items-center">
              <Link
                to="/"
                className="text-white text-xl font-texte hover:text-mauve-perso transition leading-none"
              >
                Accueil
              </Link>
            </li>
            <li className="min-h-[32px] flex items-center">
              <Link
                to="/activites"
                className="text-white text-xl font-texte hover:text-mauve-perso transition leading-none"
              >
                Activités
              </Link>
            </li>
            <li className="min-h-[32px] flex items-center">
              <Link
                to="/agenda"
                className="text-white text-xl font-texte hover:text-mauve-perso transition leading-none"
              >
                Agenda
              </Link>
            </li>
          </ul>
        </div>

        {/* Bloc 3 : Formulaire Contact */}
        <div>
          <h3 className="font-semibold font-titre text-5xl mb-4 flex items-center gap-3 leading-none min-h-[3rem]">
            <span className="leading-none">Contact</span>
            {/* Icônes dimensionnées explicitement pour éviter les sauts */}
            <a
              href="https://www.instagram.com/le_monde_ema/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Le monde d'Emâ"
              className="hover:text-mauve-perso transition inline-flex items-center justify-center min-h-[28px] w-[28px]"
            >
              <FaInstagram aria-hidden="true" focusable="false" size={20} />
            </a>
            <a
              href="https://www.facebook.com/people/Le-monde-dEm%C3%A2/61579992146987/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook Le monde d'Emâ"
              className="hover:text-mauve-perso transition inline-flex items-center justify-center min-h-[28px]"
            >
              <FaFacebook aria-hidden="true" focusable="false" size={20} />
            </a>
          </h3>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-3"
            aria-label="Formulaire de contact"
            aria-busy={isSending}
            aria-describedby="form-status"
          >
            <label htmlFor="name" className="sr-only">Votre nom</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              className="px-3 py-2 rounded bg-white/10 text-white border border-white/30 focus:outline-none focus:ring focus:ring-mauve-perso"
              required
            />

            <label htmlFor="email" className="sr-only">Votre email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              inputMode="email"
              className="px-3 py-2 rounded bg-white/10 text-white border border-white/30 focus:outline-none focus:ring focus:ring-mauve-perso"
              required
            />

            {/* Champ honeypot */}
            <input
              type="text"
              name="company"
              value={botField}
              onChange={(e) => setBotField(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <label htmlFor="message" className="sr-only">Votre message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              autoComplete="off"
              className="px-3 py-2 rounded bg-white/10 text-white border border-white/30 focus:outline-none focus:ring focus:ring-mauve-perso"
              required
            />

            <label htmlFor="consent" className="text-sm flex items-start gap-2">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                required
                className="mt-1"
              />
              <span className="font-texte leading-snug">
                J’accepte que mes données soient utilisées pour répondre à ma
                demande. Voir les{" "}
                <Link to="/mentions-legales" className="underline">
                  mentions légales
                </Link>
                .
              </span>
            </label>

            <button
              type="submit"
              aria-label="Envoyer le message"
              disabled={isSending}
              className="bg-mauve-perso font-texte text-xl hover:bg-[#4a2250] text-white px-4 py-2 rounded transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Envoyer
            </button>
          </form>

          {/* Statut toujours rendu : hauteur réservée => pas de shift */}
          <p
            ref={statusRef}
            id="form-status"
            role="status"
            aria-live="polite"
            tabIndex={-1}
            className="text-sm mt-2 text-center outline-none min-h-6"
          >
            {status || "\u00A0"}
          </p>
        </div>
      </div>

      {/* Bas de page : légales */}
      <div className="mt-10 border-t border-white/20 pt-4 flex flex-col md:flex-row items-center justify-between text-white/80 text-sm">
        <div className="min-h-[24px] leading-none">
          © {new Date().getFullYear()} LE MONDE D'EMÂ ·{" "}
          <Link
            to="/mentions-legales"
            className="hover:text-mauve-perso transition"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
