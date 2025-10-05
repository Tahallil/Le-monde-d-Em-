import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaSmile, FaSun, FaHeart, FaPlay, FaArrowRight } from "react-icons/fa";
import Reveal from "../components/Reveal";

function Accueil() {
  return (
    <>
      <Helmet>
        {/* Enhanced title with emotional appeal */}
        <title>
          Le monde d'Emâ - Ateliers bien-être & art-thérapie enfants Brabant
          wallon | Épanouissement & créativité
        </title>
        <meta
          name="description"
          content="🌟 Découvrez nos ateliers de bien-être, art-thérapie et yoga pour enfants dans le Brabant wallon. Développement personnel, créativité et sérénité dans un environnement bienveillant. Réservez votre séance découverte gratuite !"
        />
        <meta
          name="keywords"
          content="art-thérapie enfants Brabant wallon, bien-être enfants Brabant wallon, yoga enfant Belgique, ateliers créatifs Brabant wallon, développement personnel enfants, acroyoga famille, pleine conscience enfants, émotions enfants, créativité thérapie"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="author"
          content="Le monde d'EMÂ - Emma, art-thérapeute certifiée"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#F67565" />
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />

        {/* Enhanced Open Graph */}
        <meta property="og:locale" content="fr_BE" />
        <meta
          property="og:title"
          content="Le monde d'Emâ - Ateliers bien-être & art-thérapie pour enfants dans le Brabant wallon"
        />
        <meta
          property="og:description"
          content="🌟 Ateliers de bien-être, art-thérapie et créativité pour enfants. Développement personnel et épanouissement dans un cadre bienveillant dans le Brabant wallon."
        />
        <meta
          property="og:image"
          content="https://lemondedema.com/images/og-home.png"
        />
        <meta
          property="og:image:alt"
          content="Logo en forme d'arbre et de lune - Le monde d’Emâ"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lemondedema.com/" />
        <meta property="og:site_name" content="Le monde d'Emâ" />

        {/* Enhanced Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Le monde d'Emâ - Art-thérapie & bien-être enfants"
        />
        <meta
          name="twitter:description"
          content="Ateliers créatifs et thérapeutiques pour l'épanouissement des enfants dans le Brabant wallon 🌟"
        />
        <meta
          name="twitter:image"
          content="https://lemondedema.com/images/twitter-card.png"
        />
        <meta name="twitter:site" content="@lemondedema" />
        <meta name="twitter:creator" content="@lemondedema" />

        {/* Canonical and alternates */}
        <link rel="canonical" href="https://lemondedema.com/" />
        <link
          rel="alternate"
          hrefLang="fr-BE"
          href="https://lemondedema.com/"
        />

        {/* Preload critical resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Enhanced JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify(
            {
              "@context": "https://schema.org",
              "@graph": [
                /* ───────────────── Organization (entité mère) ───────────────── */
                {
                  "@type": "Organization",
                  "@id": "https://lemondedema.com/#organization",
                  name: "Le monde d'Emâ",
                  alternateName: "Emma art-thérapeute Brabant wallon",
                  url: "https://lemondedema.com/",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://lemondedema.com/images/logof.png",
                    width: 400,
                    height: 400,
                  },
                  image: "https://lemondedema.com/images/og-home.png",
                  description:
                    "Ateliers de bien-être, art-thérapie et activités créatives pour enfants dans le Brabant wallon.",
                  foundingDate: "2021",
                  founder: {
                    "@type": "Person",
                    "@id": "https://lemondedema.com/#person",
                    name: "Emma",
                    jobTitle: "Art-thérapeute et institutrice certifiée",
                    knowsAbout: [
                      "Art-thérapie",
                      "Développement personnel enfants",
                      "Yoga enfants",
                      "Communication non violente",
                    ],
                    description:
                      "Art-thérapeute passionnée par le bien-être des enfants, formée en communication non violente.",
                  },
                  sameAs: [
                    "https://www.instagram.com/le_monde_ema/",
                    "https://www.facebook.com/people/Le-monde-dEm%C3%A2/61579992146987/",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    email: "contact.lemondedema@gmail.com",
                    telephone: "+32-472-71-49-70",
                    areaServed: "BE",
                    availableLanguage: "French",
                    hoursAvailable: {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                      ],
                      opens: "09:00",
                      closes: "18:00",
                    },
                  },
                },

                /* ───────────────── LocalBusiness (service local itinérant) ───────────────── */
                {
                  "@type": "LocalBusiness",
                  "@id": "https://lemondedema.com/#localbusiness",
                  name: "Le monde d'Emâ",
                  url: "https://lemondedema.com/",
                  image: "https://lemondedema.com/images/og-home.png",
                  telephone: "+32-472-71-49-70",
                  email: "contact.lemondedema@gmail.com",
                  inLanguage: "fr-BE",
                  priceRange: "20€–45€",
                  paymentAccepted: "Cash, Bank transfer",

                  /* ▶ Zone couverte (SAB) */
                  areaServed: {
                    "@type": "AdministrativeArea",
                    name: "Brabant wallon",
                  },
                  serviceArea: {
                    "@type": "AdministrativeArea",
                    name: "Brabant wallon",
                  },

                  /* ▶ Adresse générique régionale (pas d’adresse postale fixe) */
                  address: {
                    "@type": "PostalAddress",
                    addressRegion: "Brabant wallon",
                    addressCountry: "BE",
                  },

                  /* ▶ Positionnement itinérant */
                  serviceType:
                    "Ateliers de bien-être et d’art-thérapie pour enfants",
                  additionalProperty: [
                    {
                      "@type": "PropertyValue",
                      name: "Mode d’intervention",
                      value:
                        "Services itinérants / multi-lieux partenaires ; adresses précises communiquées lors de la réservation.",
                    },
                  ],

                  /* ❌ Pas d’horaires figés tant que ça bouge (omission volontaire) */

                  /* ▶ Offres / catalogue de services */
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Services de bien-être pour enfants",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Art-thérapie enfants",
                          description:
                            "Ateliers d'art-thérapie pour l'expression créative et émotionnelle.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Acroyoga famille",
                          description:
                            "Séances d'acroyoga pour renforcer les liens familiaux.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Yoga parent–enfant",
                          description:
                            "Yoga ludique pour parents et enfants de 3 à 5 ans.",
                        },
                      },
                    ],
                  },

                  /* ▶ Actions utiles */
                  potentialAction: [
                    {
                      "@type": "ReserveAction",
                      name: "Réserver / Demander confirmation",
                      target: [
                        "mailto:contact.lemondedema@gmail.com",
                        "tel:+32472714970",
                        "https://wa.me/32472714970",
                      ],
                    },
                    {
                      "@type": "ContactAction",
                      name: "Contacter",
                      target: [
                        "mailto:contact.lemondedema@gmail.com",
                        "tel:+32472714970",
                      ],
                    },
                  ],

                  sameAs: [
                    "https://www.instagram.com/le_monde_ema/",
                    "https://www.facebook.com/people/Le-monde-dEm%C3%A2/61579992146987/",
                  ],
                },

                /* ───────────────── WebSite (site + site search) ───────────────── */
                {
                  "@type": "WebSite",
                  "@id": "https://lemondedema.com/#website",
                  url: "https://lemondedema.com/",
                  name: "Le monde d'Emâ",
                  inLanguage: "fr-BE",
                  description:
                    "Site officiel des ateliers de bien-être et d'art-thérapie pour enfants.",
                  publisher: { "@id": "https://lemondedema.com/#organization" },
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://lemondedema.com/recherche?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },

                /* ───────────────── WebPage (page d’accueil) ───────────────── */
                {
                  "@type": "WebPage",
                  "@id": "https://lemondedema.com/#webpage",
                  url: "https://lemondedema.com/",
                  name: "Accueil – Ateliers bien-être & art-thérapie enfants",
                  isPartOf: { "@id": "https://lemondedema.com/#website" },
                  about: { "@id": "https://lemondedema.com/#organization" },
                  inLanguage: "fr-BE",
                  description:
                    "Découvrez nos ateliers de bien-être, art-thérapie et créativité pour enfants dans le Brabant wallon. Développement personnel dans un cadre bienveillant.",
                  breadcrumb: {
                    "@type": "BreadcrumbList",
                    itemListElement: [
                      {
                        "@type": "ListItem",
                        position: 1,
                        name: "Accueil",
                        item: "https://lemondedema.com/",
                      },
                    ],
                  },
                },

                /* ───────────────── Person (porteuse du projet) ───────────────── */
                {
                  "@type": "Person",
                  "@id": "https://lemondedema.com/#person",
                  name: "Emma",
                  jobTitle: "Art-thérapeute et institutrice",
                  worksFor: { "@id": "https://lemondedema.com/#organization" },
                  alumniOf: "Haute École en Belgique",
                  knowsAbout: [
                    "Art-thérapie",
                    "Éducation",
                    "Développement personnel",
                    "Communication non violente",
                    "Yoga enfants",
                  ],
                  hasCredential: "Diplôme d'institutrice primaire",
                  description:
                    "Art-thérapeute passionnée par le bien-être des enfants, formée en communication non violente.",
                },
              ],
            },
            null,
            2
          )}
        </script>
      </Helmet>

      {/* Enhanced Hero Section */}
      <section
        className="relative bg-cover bg-center w-full h-screen flex items-center text-center p-6 overflow-hidden"
        role="region"
        aria-labelledby="hero-title"
      >
        <picture>
          <source
            srcSet="/images/webp/fond4-1920.webp 1920w,
            /images/webp/fond4-1280.webp 1280w,
            /images/webp/fond4-768.webp 768w"
            type="image/webp"
          />
          <img
            src="/images/webp/fond4-1280.webp"
            srcSet="/images/fond4-1920.jpg 1920w,
            /images/fond4-1280.jpg 1280w,
            /images/fond4-768.jpg 768w"
            sizes="100vw"
            alt="Branche fleurie posée sur un tissu blanc avec un mala, une statue de Bouddha, une bougie et un bol tibétain"
            fetchpriority="high"
            decoding="async"
            width="1920"
            height="1080"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>

        {/* Overlay with subtle animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-perso/50 via-transparent to-rose-perso/30 animate-pulse-slow"></div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center space-y-8 transform transition-all duration-1000 animate-fade-in-up">
          <h1
            id="hero-title"
            className="text-6xl md:text-9xl lg:text-9xl font-titre mb-6 text-white drop-shadow-2xl animate-float"
            style={{
              WebkitTextStroke: "1px rgba(0,0,0,0.25)",
              textShadow:
                "0 3px 12px rgba(0,0,0,0.45), 0 0 16px rgba(99,46,98,0.25)",
            }}
          >
            Le monde d'Emâ
          </h1>
          {/* Wrapper lisibilité responsive */}
          <div className="hero-line-wrap relative inline-block">
            {/* Bande douce derrière la ligne */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 -translate-x-1/2 -z-10
               h-[3.1rem] md:h-[3.6rem] w-[112%] md:w-[108%] rounded-[2rem]"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.45) 50%, rgba(0,0,0,0) 100%)",
                filter: "blur(6px)",
                opacity: 0.85, // plus marqué en mobile
              }}
            />

            {/* Ligne d’accroche – multi-ligne, sans débord */}
            <p className="hero-line text-xl md:text-3xl lg:text-4xl font-texte text-white max-w-4xl leading-relaxed inline-block relative">
              Bienvenue dans un monde de{" "}
              <span className="font-semibold text-rose-perso">découvertes</span>{" "}
              et de{" "}
              <span className="font-semibold text-rose-perso">bien-être</span>{" "}
              pour petits et grands
            </p>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 mt-8">
            <Link
              to="/activites"
              className="group px-8 py-4 bg-mauve-perso text-white font-texte text-xl rounded-xl shadow-lg hover:bg-[#4a2250] transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3"
              aria-label="Découvrir toutes nos activités"
            >
              <FaPlay className="text-lg group-hover:translate-x-1 transition-transform" />
              Les activités
            </Link>{" "}
            <a
              href="#parcours"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-texte text-xl rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              aria-label="Découvrir mon parcours professionnel"
            >
              <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              Mon parcours
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-11 -mb-2 left-1/2 -translate-x-1/2 animate-bounce z-20 pointer-events-none">
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="relative w-full flex flex-col items-center p-8 md:p-12 bg-gradient-to-br from-blue-perso to-mauve-perso text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 w-full max-w-6xl gap-8 md:gap-12">
          {/* Connection line for desktop */}
          <span className="hidden md:block absolute top-7 left-0 right-0 h-px bg-white/40 col-span-3"></span>

          {/* Value 1 */}
          <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-white/50 mb-6 bg-white/10 relative z-10 group-hover:bg-white/20 group-hover:border-white transition-all duration-300">
              <FaSmile
                aria-hidden="true"
                className="text-3xl w-8 h-8 group-hover:scale-110 transition-transform"
              />
            </div>
            <p className="font-soustitre text-xl md:text-2xl leading-relaxed">
              Offrir un espace où chaque enfant peut s'exprimer{" "}
              <span className="text-mauve-perso font-bold bg-white/10 px-1 rounded">
                librement
              </span>
            </p>
          </div>

          {/* Value 2 */}
          <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-white/50 mb-6 bg-white/10 relative z-10 group-hover:bg-white/20 group-hover:border-white transition-all duration-300">
              <FaSun
                aria-hidden="true"
                className="text-3xl w-8 h-8 group-hover:scale-110 transition-transform"
              />
            </div>
            <p className="font-soustitre text-xl md:text-2xl leading-relaxed">
              Favoriser l'épanouissement par la{" "}
              <span className="text-mauve-perso font-bold bg-white/10 px-1 rounded">
                douceur
              </span>{" "}
              et la{" "}
              <span className="text-mauve-perso font-bold bg-white/10 px-1 rounded">
                bienveillance
              </span>
            </p>
          </div>

          {/* Value 3 */}
          <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-white/50 mb-6 bg-white/10 relative z-10 group-hover:bg-white/20 group-hover:border-white transition-all duration-300">
              <FaHeart
                aria-hidden="true"
                className="text-3xl w-8 h-8 group-hover:scale-110 transition-transform"
              />
            </div>
            <p className="font-soustitre text-xl md:text-2xl leading-relaxed">
              Respecter l'
              <span className="text-mauve-perso font-bold bg-white/10 px-1 rounded">
                authenticité
              </span>{" "}
              et la{" "}
              <span className="text-mauve-perso font-bold bg-white/10 px-1 rounded">
                vérité
              </span>{" "}
              de chacun
            </p>
          </div>
        </div>

        {/* Enhanced Quote */}
        <blockquote className="text-center text-2xl md:text-3xl font-soustitre italic max-w-4xl mt-16 relative">
          <div className="text-6xl text-white/30 absolute -top-4 -left-4">
            "
          </div>
          On ne voit bien qu'avec le cœur, l'essentiel est invisible pour les
          yeux
          <div className="text-6xl text-white/30 absolute -bottom-8 -right-4">
            "
          </div>
          <cite className="block mt-6 text-xl font-normal not-italic">
            — Antoine de Saint-Exupéry,{" "}
            <span className="font-semibold">Le Petit Prince</span>
          </cite>
        </blockquote>
      </section>
      <section
        id="parcours"
        className="relative w-full py-20 px-6 bg-gradient-to-b from-blue-perso via-white to-rose-perso"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold font-titre text-mauve-perso mb-6">
            Quelques mots sur mon parcours
          </h2>
          <div className="flex justify-center mb-12">
            <div className="w-24 h-1 bg-mauve-perso rounded-full"></div>
          </div>

          <div className="flex flex-col gap-16 relative font-texte">
            {/* ligne centrale animée */}
            <div
              className="timeline-line absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] rounded-full"
              style={{
                ["--mauve"]: "#6B2D73",
                ["--rose"]: "#F67565",
                ["--bleu"]: "#9BDBE7",
              }}
            />

            {/* Étape 1 : diplôme */}
            <Reveal
              as="article"
              className="flex flex-col md:flex-row items-center gap-8 relative group"
            >
              <div className="card bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:w-1/2 shadow-xl border border-mauve-perso/10">
                <h3 className="text-3xl md:text-4xl font-semibold text-mauve-perso font-soustitre mb-4">
                  🎓 Juin 2021
                </h3>
                <p className="text-justify text-gray-700 leading-relaxed">
                  Diplômée en tant qu'institutrice primaire en Belgique depuis{" "}
                  <span className="font-semibold text-mauve-perso px-1 rounded">
                    juin 2021
                  </span>
                  , je me suis vite rendu compte lors de mon expérience sur le
                  terrain que le{" "}
                  <span className="font-semibold italic text-mauve-perso px-1 rounded">
                    « bien-être »
                  </span>{" "}
                  était une priorité dans l'éducation.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center card-portrait">
                <picture>
                  <source
                    srcSet="/images/webp/dipok-320.webp 320w, /images/webp/dipok-256.webp 256w"
                    sizes="(min-width:768px) 320px, 256px"
                    type="image/webp"
                  />
                  <img
                    src="/images/webp/dipok-256.webp"
                    alt="Emma célébrant son diplôme d'institutrice primaire"
                    width="256"
                    height="256"
                    className="rounded-full shadow-xl w-64 h-64 object-cover border-4 border-white"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </Reveal>

            {/* Étape 2 : Bretagne */}
            <Reveal
              as="article"
              className="flex flex-col md:flex-row-reverse items-center gap-8 relative group"
            >
              <div className="card bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:w-1/2 shadow-xl border border-mauve-perso/10">
                <h3 className="text-3xl md:text-4xl font-semibold text-mauve-perso font-soustitre mb-4">
                  🌿 Bretagne
                </h3>
                <p className="text-justify text-gray-700 leading-relaxed">
                  Après avoir voyagé en Bretagne en woofing pour donner cours à
                  deux enfants de 6 et 8 ans en{" "}
                  <span className="font-semibold">« I.E.F »</span> (instruction
                  en famille), je continue mon voyage en France et je fais un
                  stage d’art-thérapie chez une amie artiste indépendante qui
                  donne des ateliers pour des enfants à Gap.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center card-portrait">
                <picture>
                  <source
                    srcSet="/images/webp/bretagne-320.webp 320w, /images/webp/bretagne-256.webp 256w"
                    sizes="(min-width:768px) 331px, 248px"
                    type="image/webp"
                  />
                  <img
                    src="/images/webp/bretagne-256.webp"
                    alt="Portrait de profil en Bretagne sur fond de mer et de ciel"
                    width="331"
                    height="248"
                    className="rounded-full shadow-xl w-64 h-64 object-cover border-4 border-white"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </Reveal>

            {/* Étape 3 : Corse & Ateliers */}
            <Reveal
              as="article"
              className="flex flex-col md:flex-row items-center gap-8 relative group"
            >
              <div className="card bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:w-1/2 shadow-xl border border-mauve-perso/10">
                <h3 className="text-3xl md:text-4xl font-semibold text-mauve-perso font-soustitre mb-4">
                  🌅 Corse & Ateliers
                </h3>
                <p className="text-justify text-gray-700 leading-relaxed">
                  Je pars ensuite vivre en{" "}
                  <span className="font-semibold text-mauve-perso">Corse</span>,
                  où je resterai deux ans. C’est une période riche de
                  découvertes et d’expériences, marquée par ma volonté d’ouvrir
                  des{" "}
                  <span className="italic font-semibold text-mauve-perso">
                    ateliers bien-être
                  </span>{" "}
                  pour les enfants. J’ai également eu l’opportunité de suivre
                  une formation en{" "}
                  <span className="font-semibold text-mauve-perso">
                    communication non violente
                  </span>{" "}
                  (modules 1, 2 et 3) en octobre 2024, qui m’a permis de
                  développer une nouvelle façon d’entrer en relation avec les
                  autres et d’enrichir mon parcours. Cette étape en Corse m’a
                  donné de nouvelles compétences, une grande ouverture humaine
                  et une envie encore plus forte de transmettre.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center card-portrait">
                <picture>
                  <source
                    srcSet="/images/webp/corse1-512.webp 512w, /images/webp/corse1-256.webp 256w"
                    type="image/webp"
                  />
                  <img
                    src="/images/webp/corse1-256.webp"
                    sizes="(min-width: 768px) 256px, 160px"
                    alt="Jeune femme sur la plage de Palombaggia en Corse, ateliers bien-être et découverte personnelle"
                    width="256"
                    height="192"
                    className="rounded-full shadow-xl w-64 h-64 object-cover border-4 border-white"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </Reveal>

            {/* Étape 4 : Retour en Belgique */}
            <Reveal
              as="article"
              className="flex flex-col md:flex-row-reverse items-center gap-8 relative group"
            >
              <div className="card bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:w-1/2 shadow-xl border border-mauve-perso/10">
                <h3 className="text-3xl md:text-4xl font-semibold text-mauve-perso font-soustitre mb-4">
                  💜 Retour en Belgique
                </h3>
                <p className="text-justify text-gray-700 leading-relaxed">
                  En juin 2025, je prends la décision de quitter la Corse et
                  tout ce que j’avais entrepris, pour revenir développer mes
                  activités en Belgique, notamment des{" "}
                  <span className="font-semibold text-mauve-perso">
                    ateliers créatifs, de yoga et d’art-thérapie pour enfants
                    dans le Brabant wallon
                  </span>
                  .
                </p>
                <p className="mt-4 text-justify text-gray-700 leading-relaxed">
                  Et me voilà, le cœur grand ouvert, prête à vous accueillir
                  dans mon monde… Un monde où chacun a sa place, où l’on peut
                  garder son âme d’enfant, où la magie opère et où la{" "}
                  <span className="font-semibold text-mauve-perso">
                    bienveillance
                  </span>
                  , l’
                  <span className="font-semibold text-mauve-perso">
                    honnêteté
                  </span>{" "}
                  et le{" "}
                  <span className="font-semibold text-mauve-perso">
                    respect
                  </span>{" "}
                  sont les piliers. Vous découvrirez des{" "}
                  <span className="font-semibold text-mauve-perso">
                    activités créatives et ludiques pour le développement
                    personnel des enfants
                  </span>
                  , pensées pour stimuler leur imagination et leur confiance.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center card-portrait">
                <picture>
                  <source
                    srcSet="/images/webp/Pp1-512.webp 512w, /images/webp/Pp1-256.webp 256w"
                    type="image/webp"
                  />
                  <img
                    src="/images/webp/Pp1-256.webp"
                    srcSet="/images/webp/Pp1-512.webp 512w, /images/webp/Pp1-256.webp 256w"
                    sizes="(min-width: 768px) 256px, 160px"
                    alt="Pratique du Qi Gong en Belgique, retour au bien-être et ancrage personnel"
                    width="256"
                    height="256"
                    className="rounded-full shadow-xl w-64 h-64 object-cover border-4 border-white"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </Reveal>
          </div>

          {/* CTA */}
          <Reveal className="mt-16">
            <a
              href="#footer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-mauve-perso text-white font-texte text-xl rounded-xl shadow-lg hover:bg-[#4a2250] transition-all duration-300 hover:scale-[1.02]"
            >
              <FaHeart className="text-lg" />
              Prendre contact
            </a>
          </Reveal>
        </div>
      </section>
      <section className="py-16 px-6 bg-gradient-to-br from-blue-perso to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-titre text-mauve-perso font-bold mb-8">
            Ce que je vous propose
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-mauve-perso rounded-full"></div>
          </div>
          <p className="text-gray-600 mb-16 font-texte text-xl max-w-4xl mx-auto text-mauve-perso leading-relaxed">
            Découvrez des{" "}
            <strong>
              ateliers de bien-être, d'art-thérapie et d'activités créatives
            </strong>{" "}
            pour enfants dans le Brabant wallon.
            <br />
            Développement personnel et jeux ludiques dans un cadre bienveillant
            en Belgique.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Enhanced service cards with better hover effects */}
            <article className="relative group h-96 rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <picture>
                <source
                  srcSet="/images/webp/art-therapie-1280.webp 1280w, /images/webp/art-therapie-768.webp 768w"
                  type="image/webp"
                />
                <img
                  src="/images/webp/art-therapie-768.webp"
                  srcSet="/images/webp/art-therapie-1280.webp 1280w, /images/webp/art-therapie-768.webp 768w"
                  sizes="(min-width: 1024px) 600px, 100vw"
                  alt="Atelier d'art-thérapie pour enfants : créativité et expression émotionnelle"
                  width="1280"
                  height="853"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl md:text-3xl font-soustitre font-semibold mb-3">
                  Art-thérapie
                </h3>
                <p className="text-white/90 font-texte text-lg leading-relaxed">
                  Explorer la créativité pour libérer les émotions et se
                  reconnecter à soi.
                </p>
              </div>
            </article>

            {/* Carte 2 */}
            <article className="relative group h-96 rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <picture>
                <source
                  srcSet="/images/webp/yoga-enfant-1280.webp 1280w,
            /images/webp/yoga-enfant-768.webp 768w"
                  type="image/webp"
                />
                <img
                  src="/images/webp/yoga-enfant-768.webp"
                  srcSet="/images/webp/yoga-enfant-1280.webp 1280w,
            /images/webp/yoga-enfant-768.webp 768w"
                  sizes="(min-width: 1024px) 600px, 100vw"
                  alt="Yoga parent-enfant en montagne, activité bien-être pour développer souplesse et concentration"
                  width="1280"
                  height="716"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  decoding="async"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl md:text-3xl font-soustitre font-semibold mb-3">
                  Yoga enfant
                </h3>
                <p className="text-white/90 font-texte text-lg leading-relaxed">
                  Des moments ludiques pour développer souplesse, concentration
                  et bienveillance.
                </p>
              </div>
            </article>

            {/* Carte 3 */}
            <article className="relative group h-96 rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <picture>
                <source
                  srcSet="/images/webp/carte3-1280.webp 1280w,
            /images/webp/carte3-768.webp 768w"
                  type="image/webp"
                />
                <img
                  src="/images/webp/carte3-768.webp"
                  srcSet="/images/webp/carte3-1280.webp 1280w,
            /images/webp/carte3-768.webp 768w"
                  sizes="(min-width: 1024px) 600px, 100vw"
                  alt="Illustration symbolisant les émotions et la sérénité, activité art-thérapie pour enfants"
                  width="1280"
                  height="853" // ratio 3:2 respecté (3648/5472 ≈ 0.666)
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl md:text-3xl font-soustitre font-semibold mb-3">
                  Les émotions
                </h3>
                <p className="text-white/90 font-texte text-lg leading-relaxed">
                  Comprendre et gérer ses émotions pour vivre plus sereinement
                  chaque jour.
                </p>
              </div>
            </article>

            {/* Carte 4 */}
            <article className="relative group h-96 rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <picture>
                <source
                  srcSet="/images/webp/acroyoga-1280.webp 1280w, /images/webp/acroyoga-768.webp 768w"
                  type="image/webp"
                />
                <img
                  src="/images/webp/acroyoga-768.webp"
                  srcSet="/images/webp/acroyoga-1280.webp 1280w, /images/webp/acroyoga-768.webp 768w"
                  sizes="(min-width: 1024px) 600px, 100vw"
                  alt="Mère et fille pratiquant l’acroyoga en plein air, complicité familiale et équilibre"
                  width="1280"
                  height="853" /* ratio 3:2 de 5616×3744 */
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl md:text-3xl font-soustitre font-semibold mb-3">
                  Acroyoga en famille
                </h3>
                <p className="text-white/90 font-texte text-lg leading-relaxed">
                  Un jeu d'équilibre où l'on s'élève ensemble, porté par
                  l'écoute et la magie du partage.
                </p>
              </div>
            </article>

            {/* Carte 5 */}
            <article className="relative group h-96 rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <picture>
                <source
                  srcSet="/images/webp/carte5-1280.webp 1280w, /images/webp/carte5-768.webp 768w"
                  type="image/webp"
                />
                <img
                  src="/images/webp/carte5-768.webp"
                  srcSet="/images/webp/carte5-1280.webp 1280w, /images/webp/carte5-768.webp 768w"
                  sizes="(min-width: 1024px) 600px, 100vw"
                  alt="Paysage de montagne émergeant de la brume, entouré d’une forêt de conifères au lever du jour"
                  width="600"
                  height="400"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl md:text-3xl font-soustitre font-semibold mb-3">
                  Activités nature
                </h3>
                <p className="text-white/90 font-texte text-lg leading-relaxed">
                  Explorer la nature, éveiller ses sens et renouer avec le
                  vivant autour de soi.
                </p>
              </div>
            </article>

            {/* Carte 6 */}
            <article className="relative group h-96 rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <picture>
                <source
                  srcSet="/images/webp/pleine-conscience-1280.webp 1280w, /images/webp/pleine-conscience-768.webp 768w"
                  type="image/webp"
                />
                <img
                  src="/images/webp/pleine-conscience-768.webp"
                  srcSet="/images/webp/pleine-conscience-1280.webp 1280w, /images/webp/pleine-conscience-768.webp 768w"
                  sizes="(min-width: 1024px) 600px, 100vw"
                  alt="Atelier de pleine conscience pour enfants, méditation et sérénité en plein air"
                  width="1280"
                  height="720"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl md:text-3xl font-soustitre font-semibold mb-3">
                  Programme PEACE
                </h3>
                <p className="text-white/90 font-texte text-lg leading-relaxed">
                  Initiation à la méditation laïque pour cultiver sérénité et
                  présence.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-16 flex flex-col md:flex-row gap-6 justify-center">
            <Link
              to="/activites"
              className="group px-8 py-4 bg-mauve-perso text-white font-texte text-xl rounded-xl shadow-lg hover:bg-[#4a2250] transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
            >
              <FaPlay className="text-lg group-hover:translate-x-1 transition-transform" />
              Découvrir les activités
            </Link>
            <Link
              to="/agenda"
              className="group px-8 py-4 border-2 border-mauve-perso text-mauve-perso font-texte text-xl rounded-xl shadow-lg hover:bg-mauve-perso hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
            >
              <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              Voir les disponibilités
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Accueil;
