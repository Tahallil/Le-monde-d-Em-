import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaChevronDown,
  FaEye,
  FaHeart,
  FaLeaf,
  FaComments,
  FaTools,
  FaLightbulb,
  FaBullseye,
  FaBrain,
  FaShieldAlt,
  FaSeedling,
  FaPalette,
  FaArrowRight,
  FaCalendarCheck,
} from "react-icons/fa";
import Reveal from "../components/Reveal";

export default function Activites() {
  const [emoIsOpen, setEmoIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [expIsOpen, setExpIsOpen] = useState(false);
  const [cnvIsOpen, setCnvIsOpen] = useState(false);

  return (
    <>
      <Helmet>
        {/* Enhanced title with more appeal */}
        <title>
          Activités créatives & thérapeutiques enfants Brabant wallon |
          Art-thérapie, Yoga, Acroyoga famille
        </title>
        <meta
          name="description"
          content="🎨 Découvrez nos ateliers : Art-thérapie mercredis, Acroyoga famille samedis, Yoga parent-enfant dimanches. Développement émotionnel et créatif dans le Brabant wallon. Inscription en ligne !"
        />
        <meta
          name="keywords"
          content="art-thérapie enfants, acroyoga famille Brabant wallon, yoga parent-enfant, pleine conscience enfants, ateliers créatifs Brabant wallon, thérapie émotionnelle enfants, développement personnel Belgique"
        />
        <link rel="canonical" href="https://lemondedema.com/activites" />

        {/* Enhanced Open Graph */}
        <meta
          property="og:title"
          content="Ateliers créatifs & thérapeutiques - Le monde d'Emâ"
        />
        <meta
          property="og:description"
          content="Art-thérapie, acroyoga famille, yoga parent-enfant et pleine conscience. Ateliers ludiques pour l'épanouissement des enfants dans le Brabant wallon 🎨✨"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://lemondedema.com/activites" />
        <meta
          property="og:image"
          content="https://lemondedema.com/images/og-home.jpg"
        />
        <meta
          property="og:image:alt"
          content="Enfants participant aux différents ateliers créatifs et thérapeutiques"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Activités créatives enfants Brabant wallon 🎨"
        />
        <meta
          name="twitter:description"
          content="Art-thérapie, yoga, acroyoga famille - Développement émotionnel et créativité"
        />

        {/* Enhanced JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Ateliers et activités créatives - Le monde d'Emâ",
            description:
              "Art-thérapie, acroyoga famille, yoga parent-enfant et pleine conscience pour enfants dans le Brabant wallon",
            url: "https://lemondedema.com/activites",
            numberOfItems: 4,
            itemListElement: [
              {
                "@type": "Course",
                position: 1,
                name: "Les mercredis d'Art-Thérapie",
                description:
                  "Atelier d'art-thérapie pour explorer ses émotions à travers la créativité, les arts plastiques et l'expression corporelle",
                courseCode: "AT-MER",
                provider: {
                  "@type": "Organization",
                  name: "Le monde d'Emâ",
                  url: "https://lemondedema.com",
                },
                hasCourseInstance: {
                  "@type": "CourseInstance",
                  courseMode: "onsite",
                  courseSchedule: {
                    "@type": "Schedule",
                    repeatFrequency: "P1W",
                    byDay: "Wednesday",
                  },
                  location: {
                    "@type": "Place",
                    name: "Brabant wallon",
                    address: {
                      "@type": "PostalAddress",
                      addressRegion: "Brabant wallon",
                      addressCountry: "BE",
                    },
                  },
                },
                offers: {
                  "@type": "Offer",
                  price: "45",
                  priceCurrency: "EUR",
                  description:
                    "Tarif par enfant et par séance. Abonnement 5 séances : 200€ (au lieu de 225€). Horaires : 14h–17h (3h).",
                },
                educationalLevel: "Enfants 6-12 ans",
                teaches: [
                  "Art-thérapie",
                  "Expression créative",
                  "Gestion émotionnelle",
                  "Arts plastiques",
                ],
              },
              {
                "@type": "Course",
                position: 2,
                name: "Pleine conscience et méditation enfants",
                description:
                  "Initiation à la pleine conscience pour développer l'intelligence émotionnelle, la concentration et la sérénité",
                courseCode: "PC-ENF",
                provider: {
                  "@type": "Organization",
                  name: "Le monde d'Emâ",
                  url: "https://lemondedema.com",
                },
                teaches: [
                  "Méditation guidée",
                  "Intelligence émotionnelle",
                  "Concentration",
                  "Relaxation",
                ],
                educationalLevel: "Enfants 6-12 ans",
              },
              {
                "@type": "Course",
                position: 3,
                name: "Les samedis acroyoga en famille",
                description:
                  "Atelier d'acroyoga pour renforcer les liens familiaux à travers le jeu, le mouvement et la complicité",
                courseCode: "ACR-FAM",
                provider: {
                  "@type": "Organization",
                  name: "Le monde d'Emâ",
                  url: "https://lemondedema.com",
                },
                hasCourseInstance: {
                  "@type": "CourseInstance",
                  courseMode: "onsite",
                  courseSchedule: {
                    "@type": "Schedule",
                    repeatFrequency: "P1W",
                    byDay: "Saturday",
                  },
                },
                audience: {
                  "@type": "Audience",
                  audienceType: "Familles avec enfants",
                },
                offers: {
                  "@type": "Offer",
                  price: "20",
                  priceCurrency: "EUR",
                  description: "20€ par personne pour 1h.",
                },
                teaches: [
                  "Acroyoga",
                  "Lien familial",
                  "Confiance mutuelle",
                  "Équilibre",
                ],
              },
              {
                "@type": "Course",
                position: 4,
                name: "Les dimanches en mouvement - Yoga parent-enfant",
                description:
                  "Atelier de yoga ludique pour parents et enfants de 3 à 5 ans, alliant mouvement, détente et massages",
                courseCode: "YOGA-PE",
                provider: {
                  "@type": "Organization",
                  name: "Le monde d'Emâ",
                  url: "https://lemondedema.com",
                },
                hasCourseInstance: {
                  "@type": "CourseInstance",
                  courseMode: "onsite",
                  courseSchedule: {
                    "@type": "Schedule",
                    repeatFrequency: "P1W",
                    byDay: "Sunday",
                  },
                },
                audience: {
                  "@type": "Audience",
                  audienceType: "Parents et enfants 3-5 ans",
                },
                offers: {
                  "@type": "Offer",
                  price: "20",
                  priceCurrency: "EUR",
                  description: "20€ par personne pour 1h.",
                },
                teaches: [
                  "Yoga ludique",
                  "Relaxation",
                  "Massage enfants",
                  "Complicité parent-enfant",
                ],
              },
            ],
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quels sont les bénéfices de l'art-thérapie pour les enfants ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "L'art-thérapie permet aux enfants d'exprimer leurs émotions de manière non verbale, de développer leur créativité, de gagner en confiance et de mieux comprendre leurs ressentis intérieurs.",
                },
              },
              {
                "@type": "Question",
                name: "À partir de quel âge peuvent participer les enfants ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Les ateliers d'art-thérapie sont ouverts dès 6 ans. Pour le yoga parent-enfant du dimanche, nous accueillons les enfants dès 3 ans accompagnés d'un parent.",
                },
              },
              {
                "@type": "Question",
                name: "Où se déroulent les ateliers ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Les ateliers ont lieu dans le Brabant wallon. Les lieux précis sont communiqués lors de l'inscription.",
                },
              },
            ],
          })}
        </script>

        {/* Breadcrumb schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: "https://lemondedema.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Activités",
                item: "https://lemondedema.com/activites",
              },
            ],
          })}
        </script>
      </Helmet>

      <section className="relative w-full h-[95vh] bg-rose-perso/40 flex flex-col">
        {/* Enhanced grid with better hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 flex-1 relative z-10">
          <h1
            className="absolute top-24 left-1/2 -translate-x-1/2 text-6xl md:text-9xl lg:text-9xl text-white font-titre text-center px-4 animate-float drop-shadow-2xl z-10"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
          >
            Les Activités
          </h1>
          {/* Art-thérapie card */}
          <a
            href="#art-therapie"
            className="relative group overflow-hidden cursor-pointer"
            aria-label="Découvrir les ateliers d'Art-thérapie du mercredi"
          >
            <picture>
              <source
                type="image/webp"
                srcSet="/images/webp/art-therapie-480.webp 480w,
            /images/webp/art-therapie-768.webp 768w,
            /images/webp/art-therapie-1280.webp 1280w,
            /images/webp/art-therapie-1920.webp 1920w"
              />
              <img
                src="/images/art-therapie-1280.jpg"
                sizes="(min-width: 768px) 33vw, 100vw"
                alt="Atelier d'art-thérapie dans le Brabant wallon : enfants développant créativité et intelligence émotionnelle"
                width="1920"
                height="1280"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/50 transition-all duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h2
                className="text-3xl md:text-5xl lg:text-7xl font-titre text-mauve-perso mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
              >
                Mercredis Art-Thérapie
              </h2>
              <p
                className="text-lg text-mauve-perso font-texte opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
              >
                Expression créative et émotionnelle
              </p>
            </div>
          </a>

          {/* Acroyoga card */}
          <a
            href="#acroyoga"
            className="relative group overflow-hidden cursor-pointer"
            aria-label="Découvrir les ateliers d'Acroyoga famille du samedi"
          >
            <picture>
              <source
                type="image/webp"
                srcSet="/images/webp/acroyoga-480.webp 480w,
            /images/webp/acroyoga-768.webp 768w,
            /images/webp/acroyoga-1280.webp 1280w,
            /images/webp/acroyoga-1920.webp 1920w"
              />
              <img
                src="/images/acroyoga-1280.jpg" /* fallback UNIQUE */
                sizes="(min-width: 768px) 33vw, 100vw"
                alt="Séance d'acroyoga famille : renforcement des liens et confiance mutuelle dans le Brabant wallon"
                width="1920"
                height="1280"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/50 transition-all duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h2
                className="text-3xl md:text-5xl lg:text-7xl font-titre text-blue-perso mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
              >
                Samedis Acroyoga
              </h2>
              <p
                className="text-lg text-blue-perso font-texte opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
              >
                Complicité et équilibre familial
              </p>
            </div>
          </a>

          {/* Yoga card */}
          <a
            href="#yoga-enfant"
            className="relative group overflow-hidden cursor-pointer"
            aria-label="Découvrir les ateliers Yoga parent-enfant du dimanche"
          >
            <picture>
              <source
                type="image/webp"
                srcSet="/images/webp/yoga-enfant-480.webp 480w,
            /images/webp/yoga-enfant-768.webp 768w,
            /images/webp/yoga-enfant-1280.webp 1280w,
            /images/webp/yoga-enfant-1920.webp 1920w"
              />
              <img
                src="/images/yoga-enfant-1280.jpg"
                sizes="(min-width: 768px) 33vw, 100vw"
                alt="Yoga parent-enfant en nature : détente et connexion dans le Brabant wallon"
                width="1920"
                height="1075"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/50 transition-all duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h2
                className="text-3xl md:text-5xl lg:text-7xl font-titre text-rose-perso mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
              >
                Dimanches en mouvement
              </h2>
              <p
                className="text-lg text-rose-perso font-texte opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
              >
                Yoga ludique parent-enfant
              </p>
            </div>
          </a>
        </div>
        {/* Call-to-action floating button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <Link
            to="/agenda"
            className="group px-8 py-4 bg-white text-mauve-perso font-texte text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 backdrop-blur-sm"
          >
            <FaCalendarCheck className="text-lg group-hover:scale-110 transition-transform" />
            Voir les créneaux disponibles
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Pleine Conscience */}
      <section
        id="pleine-conscience"
        className="w-full bg-rose-perso/40"
        aria-labelledby="pc-title"
      >
        {/* Header avec image pleine largeur et texte superposé */}
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
          <picture>
            <source
              type="image/webp"
              srcSet="/images/webp/pleine-conscience-480.webp 480w,
              /images/webp/pleine-conscience-768.webp 768w,
              /images/webp/pleine-conscience-1280.webp 1280w,
              /images/webp/pleine-conscience-1920.webp 1920w"
            />
            <img
              src="/images/pleine-conscience-1280.jpg"
              sizes="100vw"
              alt="Atelier de pleine conscience pour enfants : méditation et sérénité dans le Brabant wallon"
              width="1920"
              height="1080"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center px-4">
              <h2
                id="pc-title"
                className="text-6xl md:text-9xl text-white font-titre"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
              >
                La pleine conscience
              </h2>
            </div>
          </div>
        </div>

        {/* Description sous l'image */}
        <section className="max-w-5xl mx-auto px-6 py-12 space-y-12 text-center md:text-left">
          {/* Bloc 1 */}
          <div className="space-y-10">
            {/* Introduction avec icône */}
            <Reveal
              as="div"
              className="flex flex-col md:flex-row items-start gap-4"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-mauve-perso/10 text-mauve-perso">
                <FaSeedling className="text-2xl" aria-hidden="true" />
              </div>
              <p className="md:text-xl font-texte leading-relaxed text-gray-800">
                En complément avec les autres activités,{" "}
                <span>
                  cet atelier inclut régulièrement des temps de méditation
                  guidée, de relaxation, de présence attentive (pleine
                  conscience) et de communication non-violente
                </span>{" "}
                lorsque c'est nécessaire. Ces pratiques visent à{" "}
                <span>ancrer les enfants dans l'instant présent</span>, à{" "}
                <span>développer leur intelligence émotionnelle</span> et à{" "}
                <span>
                  renforcer leur capacité à interagir de manière apaisée et
                  constructive
                </span>{" "}
                avec leur environnement.
              </p>
            </Reveal>

            <Reveal
              as="section"
              className="rounded-2xl p-8 shadow-lg bg-gradient-to-r from-mauve-perso/10 to-rose-perso/10 border border-mauve-perso/15"
            >
              <h3 className="text-3xl md:text-4xl font-titre font-semibold text-mauve-perso mb-8 text-center">
                L'introduction de la pleine conscience permet aux enfants
                d'acquérir :
              </h3>

              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: <FaEye />,
                    text: (
                      <>
                        {" "}
                        <span className="font-semibold">
                          Une conscience de soi accrue
                        </span>{" "}
                        (émotions, pensées, sensations){" "}
                      </>
                    ),
                  },
                  {
                    icon: <FaHeart />,
                    text: (
                      <>
                        {" "}
                        <span className="font-semibold">
                          Une empathie authentique
                        </span>{" "}
                        envers autrui{" "}
                      </>
                    ),
                  },
                  {
                    icon: <FaLeaf />,
                    text: (
                      <>
                        {" "}
                        <span className="font-semibold">
                          Des techniques
                        </span>{" "}
                        pour apaiser et concentrer l'esprit{" "}
                      </>
                    ),
                  },
                  {
                    icon: <FaComments />,
                    text: (
                      <>
                        {" "}
                        <span className="font-semibold">Des outils</span> pour
                        une communication consciente et bienveillante{" "}
                      </>
                    ),
                  },
                  {
                    icon: <FaTools />,
                    text: (
                      <>
                        {" "}
                        <span className="font-semibold">La capacité</span> à
                        appliquer ces compétences dans leur quotidien{" "}
                      </>
                    ),
                  },
                ].map((it, idx) => (
                  <li
                    key={idx}
                    className="group rounded-2xl bg-white/80 p-5 shadow-sm border border-mauve-perso/10
                               hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-mauve-perso/10 text-mauve-perso
                           transition-transform group-hover:scale-110"
                        aria-hidden="true"
                      >
                        {it.icon}
                      </span>
                      <p className="text-lg md:text-xl font-texte leading-relaxed text-gray-800">
                        {it.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Deuxième liste avec icônes */}
            <Reveal
              as="section"
              className="rounded-2xl p-8 shadow-lg bg-gradient-to-r from-mauve-perso/10 to-rose-perso/10 border border-mauve-perso/15"
            >
              <h3 className="text-3xl md:text-4xl font-titre font-semibold text-mauve-perso mb-8 text-center">
                À plus long terme, la pleine conscience contribue à :
              </h3>

              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: <FaLightbulb />,
                    text: (
                      <>
                        <span className="font-semibold">
                          Stimuler la créativité
                        </span>
                      </>
                    ),
                  },
                  {
                    icon: <FaBullseye />,
                    text: (
                      <>
                        <span className="font-semibold">
                          Renforcer la concentration
                        </span>
                      </>
                    ),
                  },
                  {
                    icon: <FaBrain />,
                    text: (
                      <>
                        <span className="font-semibold">
                          Développer l'intelligence émotionnelle
                        </span>
                      </>
                    ),
                  },
                  {
                    icon: <FaShieldAlt />,
                    text: (
                      <>
                        <span className="font-semibold">
                          Préserver la santé mentale et émotionnelle
                        </span>{" "}
                        des enfants
                      </>
                    ),
                  },
                ].map((it, idx) => (
                  <li
                    key={idx}
                    className="group rounded-2xl bg-white/80 p-5 shadow-sm border border-mauve-perso/10
                   hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-mauve-perso/10 text-mauve-perso
                       transition-transform group-hover:scale-110"
                        aria-hidden="true"
                      >
                        {it.icon}
                      </span>
                      <p className="text-lg md:text-xl font-texte leading-relaxed text-gray-800">
                        {it.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </section>

      {/* Section Art-thérapie */}
      <section id="art-therapie" aria-labelledby="art-title">
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
          <picture>
            <source
              type="image/webp"
              srcSet="/images/webp/art-therapie-768.webp 768w,
            /images/webp/art-therapie-1280.webp 1280w,
            /images/webp/art-therapie-1920.webp 1920w"
            />
            <img
              src="/images/art-therapie-1280.jpg"
              sizes="100vw"
              alt="Séance d’art-thérapie : enfant créant une œuvre pour exprimer ses émotions"
              width="1920"
              height="1280"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2
              id="art-title"
              className="text-6xl md:text-9xl text-white font-titre text-center px-4"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
            >
              Les mercredis d' Art-Thérapie
            </h2>
          </div>
        </div>
        <div className="flex flex-col max-w-full bg-blue-perso text-center">
          <div className="min-h-screen">
            <div className="max-w-6xl mx-auto px-6 py-12">
              <div className="flex flex-col max-w-full bg-blue-perso text-center">
                <div className="min-h-screen">
                  <div className="max-w-4xl mx-auto px-6 py-12">
                    {/* Header Section */}
                    <div className="text-center mb-16 fade-in">
                      <h3 className="text-5xl md:text-7xl font-titre font-bold mb-4 text-mauve-perso">
                        L’Art comme Thérapie
                      </h3>
                      <div className="flex justify-center mb-8">
                        <div className="w-24 h-1 bg-mauve-perso rounded-full"></div>
                      </div>
                      <p className="font-texte text-xl text-mauve-perso max-w-2xl mx-auto">
                        Découvrez comment l’art devient un vecteur de bien-être
                        et de transformation personnelle.
                      </p>
                    </div>

                    {/* Main Content (version améliorée) */}
                    <div
                      className="relative rounded-3xl p-6 md:p-10 shadow-xl
                bg-white/70 dark:bg-white/10
                ring-1 ring-mauve-perso/10
                overflow-hidden"
                    >
                      {/* halo décoratif très léger */}
                      <div
                        className="pointer-events-none absolute -inset-16 opacity-30 blur-3xl"
                        aria-hidden="true"
                        style={{
                          background:
                            "radial-gradient(45rem 30rem at 10% 10%, rgba(246,117,101,0.12), transparent 60%), radial-gradient(35rem 25rem at 90% 40%, rgba(155,219,231,0.12), transparent 60%)",
                        }}
                      />

                      {/* bordure gradient subtile */}
                      <div
                        className="absolute inset-0 rounded-3xl"
                        aria-hidden="true"
                        style={{ padding: 1 }}
                      >
                        <div
                          className="h-full w-full rounded-[calc(theme(borderRadius.3xl)-1px)]"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(155,219,231,0.25), rgba(246,117,101,0.25))",
                          }}
                        />
                      </div>

                      {/* contenu */}
                      <div className="relative space-y-8 text-left">
                        <p className="font-texte leading-relaxed text-gray-800">
                          L’art constitue un vecteur essentiel de bien-être, de
                          recentrage sur soi, et parfois même de spiritualité.
                        </p>

                        {/* Carte */}
                        <article
                          className="group rounded-2xl bg-white/80 hover:bg-white/90 transition
                         ring-1 ring-mauve-perso/10 hover:ring-mauve-perso/20
                         shadow-md hover:shadow-lg p-6 md:p-7
                         will-change-transform motion-reduce:transform-none
                         transform-gpu hover:-translate-y-0.5"
                        >
                          <h3 className="font-soustitre text-3xl text-mauve-perso mb-2 flex items-center gap-3">
                            <span
                              aria-hidden
                              className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-mauve-perso/10"
                            >
                              🎨
                            </span>
                            Approches spécialisées
                          </h3>
                          <p className="font-texte text-gray-800">
                            Notamment, dans certaines approches telles que
                            <span className="font-semibold text-mauve-perso">
                              {" "}
                              l’art intuitif{" "}
                            </span>
                            ou
                            <span className="font-semibold text-mauve-perso">
                              {" "}
                              l’art-thérapie
                            </span>
                            .
                          </p>
                        </article>

                        {/* Carte */}
                        <article
                          className="group rounded-2xl bg-white/80 hover:bg-white/90 transition
                         ring-1 ring-mauve-perso/10 hover:ring-mauve-perso/20
                         shadow-md hover:shadow-lg p-6 md:p-7
                         will-change-transform transform-gpu hover:-translate-y-0.5"
                        >
                          <h3 className="font-soustitre text-3xl text-mauve-perso mb-2 flex items-center gap-3">
                            <span
                              aria-hidden
                              className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-mauve-perso/10"
                            >
                              🧒
                            </span>
                            Pour les enfants
                          </h3>
                          <p className="font-texte text-gray-800">
                            Ces pratiques s’inscrivent dans une
                            <span className="font-semibold text-mauve-perso">
                              {" "}
                              démarche non verbale
                            </span>
                            , particulièrement adaptée aux enfants, car elles
                            leur permettent d’exprimer et de libérer des
                            émotions souvent enfouies ou difficilement
                            verbalisables.
                          </p>
                        </article>

                        {/* Carte */}
                        <article
                          className="group rounded-2xl bg-white/80 hover:bg-white/90 transition
                         ring-1 ring-mauve-perso/10 hover:ring-mauve-perso/20
                         shadow-md hover:shadow-lg p-6 md:p-7
                         will-change-transform transform-gpu hover:-translate-y-0.5"
                        >
                          <h3 className="font-soustitre text-3xl text-mauve-perso mb-2 flex items-center gap-3">
                            <span
                              aria-hidden
                              className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-mauve-perso/10"
                            >
                              🌬️
                            </span>
                            Bénéfices du lâcher-prise
                          </h3>
                          <p className="font-texte text-gray-800">
                            L’un des bénéfices de l’art-thérapie réside dans le
                            fait qu’elle encourage un
                            <span className="font-semibold text-mauve-perso">
                              {" "}
                              lâcher-prise profond
                            </span>
                            , bien au-delà des limites imposées par le langage
                            ou les codes sociaux.
                          </p>
                        </article>

                        {/* Carte */}
                        <article
                          className="group rounded-2xl bg-white/80 hover:bg-white/90 transition
                         ring-1 ring-mauve-perso/10 hover:ring-mauve-perso/20
                         shadow-md hover:shadow-lg p-6 md:p-7
                         will-change-transform transform-gpu hover:-translate-y-0.5"
                        >
                          <h3 className="font-soustitre text-3xl text-mauve-perso mb-2 flex items-center gap-3">
                            <span
                              aria-hidden
                              className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-mauve-perso/10"
                            >
                              ✨
                            </span>
                            Un processus libérateur
                          </h3>
                          <p className="font-texte text-gray-800">
                            Il ne s’agit pas ici de{" "}
                            <span className="italic">
                              performances artistiques
                            </span>
                            , mais d’un
                            <span className="font-semibold text-mauve-perso">
                              {" "}
                              processus créatif libérateur, spontané et
                              authentique
                            </span>
                            .
                          </p>
                        </article>

                        {/* Bandeau de conclusion */}
                        <aside className="relative overflow-hidden rounded-2xl">
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-rose-perso/15 to-transparent"
                            aria-hidden="true"
                          />
                          <div className="relative border-l-4 border-mauve-perso pl-6 py-5 rounded-r-2xl bg-white/70 ring-1 ring-mauve-perso/10">
                            <p className="font-texte text-gray-900">
                              À travers ce fil conducteur, nous aborderons
                              différents thèmes reliés au
                              <span className="font-semibold text-mauve-perso">
                                {" "}
                                bien-être
                              </span>{" "}
                              et à
                              <span className="font-semibold text-mauve-perso">
                                {" "}
                                l’art
                              </span>
                              .
                            </p>
                          </div>
                        </aside>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12 fade-in">
                <div className="inline-flex items-center gap-2 text-mauve-perso font-semibold font-titre text-5xl">
                  <FaPalette className="text-xl" aria-hidden="true" />
                  <span>Explorons ensemble cette démarche créative</span>
                  <FaPalette className="text-xl" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>

          {/* Activité 1 : Image à droite (desktop), texte à gauche */}
          <article
            className="w-full overflow-hidden shadow-md"
            aria-labelledby="arts-title"
          >
            <div className="w-full overflow-hidden shadow-md">
              {/* Empilé en mobile, row-reverse dès md */}
              <div className="flex w-full flex-col md:flex-row-reverse relative transition-all duration-500">
                {/* Image */}
                <picture className="w-full md:w-1/2 block">
                  <source
                    type="image/webp"
                    srcSet="/images/webp/arts-480.webp 480w,
            /images/webp/arts-768.webp 768w,
            /images/webp/arts-1280.webp 1280w,
            /images/webp/arts-1600.webp 1600w"
                  />
                  <img
                    src="/images/arts-1280.jpg" /* fallback UNIQUE */
                    sizes="(min-width: 768px) 50vw, 100vw"
                    alt="Atelier arts plastiques enfants  : peinture, couleurs et créativité"
                    width="724"
                    height="977"
                    loading="lazy"
                    decoding="async"
                    className={`block w-full object-cover transition-all duration-500
      h-56 sm:h-72
      ${emoIsOpen ? "md:h-[500px]" : "md:h-[300px]"}
    `}
                  />
                </picture>

                {/* Texte */}
                <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8 mt-4 md:mt-0 relative">
                  <h3
                    className="text-4xl sm:text-5xl md:text-6xl font-bold font-titre text-mauve-perso"
                    id="arts-title"
                  >
                    Les arts-plastiques
                  </h3>

                  {/* Sous-titre */}
                  <p className="font-texte text-lg sm:text-xl mt-4">
                    Laisser parler sa créativité pour explorer ses émotions et
                    s’épanouir.
                  </p>

                  {/* Texte détaillé (dépliable) */}
                  <div
                    id="arts-content"
                    className={`transition-all duration-500 overflow-hidden
            ${emoIsOpen ? "max-h-[2000px] md:max-h-[400px] mt-4" : "max-h-0"}
          `}
                  >
                    <p className="font-texte">
                      L’accompagnement dans cette pratique repose sur des
                      consignes{" "}
                      <span className="text-mauve-perso font-semibold">
                        simples
                      </span>{" "}
                      et{" "}
                      <span className="text-mauve-perso font-semibold">
                        bienveillantes
                      </span>{" "}
                      : se laisser porter par une{" "}
                      <span className="text-mauve-perso font-semibold">
                        musique apaisante
                      </span>
                      , choisir librement des{" "}
                      <span className="text-mauve-perso font-semibold">
                        couleurs
                      </span>{" "}
                      qui l’attirent,{" "}
                      <span className="text-mauve-perso font-semibold">
                        créer sans l’attente de résultat
                      </span>
                      . C’est à travers cette{" "}
                      <span className="text-mauve-perso font-semibold">
                        liberté d’expression
                      </span>{" "}
                      que l’enfant dévoile, parfois inconsciemment, des aspects
                      de son{" "}
                      <span className="text-mauve-perso font-semibold">
                        monde intérieur
                      </span>
                      . Cette approche favorise une{" "}
                      <span className="text-mauve-perso font-semibold">
                        implication sincère
                      </span>{" "}
                      et{" "}
                      <span className="text-mauve-perso font-semibold">
                        profonde
                      </span>
                      , dans un{" "}
                      <span className="text-mauve-perso font-semibold">
                        climat ludique et sécurisant
                      </span>
                      , où le{" "}
                      <span className="text-mauve-perso font-semibold">
                        plaisir de créer
                      </span>{" "}
                      prime sur toute forme de jugement. En résumé, les enfants
                      pourront donc{" "}
                      <span className="text-mauve-perso font-semibold">
                        laisser parler leur créativité
                      </span>{" "}
                      dans un{" "}
                      <span className="text-mauve-perso font-semibold">
                        total lâcher prise
                      </span>{" "}
                      tout en utilisant différents{" "}
                      <span className="text-mauve-perso font-semibold">
                        supports d’art-plastique
                      </span>{" "}
                      (peinture, aquarelle, fusain, pastels, bricolage, …)
                    </p>
                  </div>

                  {/* Bouton (absolu sur desktop, non-absolu en mobile pour éviter le chevauchement) */}
                  <button
                    type="button"
                    onClick={() => setEmoIsOpen(!emoIsOpen)}
                    aria-controls="arts-content"
                    aria-expanded={emoIsOpen}
                    className="text-mauve-perso mt-4 self-end md:mt-0 md:absolute md:bottom-4 md:right-4"
                  >
                    <FaChevronDown
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        emoIsOpen ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="sr-only">
                      {emoIsOpen ? "Réduire" : "Déployer"} le texte « Les
                      arts-plastiques »
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Activité 2 : Image à gauche (desktop), texte à droite */}
          <article
            className="w-full overflow-hidden shadow-md"
            aria-labelledby="emotions-title"
          >
            <div className="w-full overflow-hidden shadow-md">
              {/* Empilé en mobile, row dès md */}
              <div className="flex w-full flex-col md:flex-row relative transition-all duration-500">
                {/* Image à gauche (desktop) / au-dessus (mobile) */}
                <picture className="w-full md:w-1/2 block">
                  <source
                    type="image/webp"
                    srcSet="/images/webp/emotions-480.webp 480w,
            /images/webp/emotions-768.webp 768w,
            /images/webp/emotions-1280.webp 1280w,
            /images/webp/emotions-1920.webp 1920w"
                  />
                  <img
                    src="/images/emotions-1280.jpg" /* fallback UNIQUE */
                    sizes="(min-width: 768px) 50vw, 100vw"
                    alt="Activité art-thérapie sur les émotions : jeux et créations colorées pour enfants"
                    width="2048"
                    height="1536"
                    loading="lazy"
                    decoding="async"
                    className={`block w-full object-cover transition-all duration-500
      h-56 sm:h-72
      ${isOpen ? "md:h-[500px]" : "md:h-[300px]"}
    `}
                  />
                </picture>

                {/* Texte à droite (desktop) / dessous (mobile) */}
                <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8 mt-4 md:mt-0 relative">
                  <h3
                    className="text-4xl sm:text-5xl md:text-6xl font-bold font-titre text-mauve-perso"
                    id="emotions-title"
                  >
                    Les émotions
                  </h3>

                  <p className="font-texte text-lg sm:text-xl mt-4">
                    Comprendre et gérer ses émotions pour retrouver équilibre et
                    sérénité.
                  </p>

                  {/* Texte détaillé (dépliable) */}
                  <div
                    id="emotions-content"
                    className={`transition-all duration-500 overflow-hidden
            ${isOpen ? "max-h-[2000px] md:max-h-[400px] mt-4" : "max-h-0"}
          `}
                  >
                    <p className="font-texte">
                      <span className="text-mauve-perso font-semibold">
                        Les émotions
                      </span>{" "}
                      sont un{" "}
                      <span className="text-mauve-perso font-semibold">
                        vaste univers
                      </span>
                      . Certains enfants ne sont pas spécialement à l’aise pour{" "}
                      <span className="text-mauve-perso font-semibold">
                        parler de leurs émotions
                      </span>{" "}
                      ou tout simplement n’arrivent pas toujours à{" "}
                      <span className="text-mauve-perso font-semibold">
                        les comprendre
                      </span>
                      .<br />
                      Grâce à différents{" "}
                      <span className="text-mauve-perso font-semibold">
                        outils en art-thérapie
                      </span>
                      , nous irons les voir,{" "}
                      <span className="text-mauve-perso font-semibold">
                        tout en douceur et en couleur
                      </span>
                      .
                    </p>
                  </div>

                  {/* Bouton : non-absolu en mobile, absolu dès md pour garder ton placement */}
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-controls="emotions-content"
                    aria-expanded={isOpen}
                    className="text-mauve-perso mt-4 self-start md:mt-0 md:absolute md:bottom-4 md:left-4"
                  >
                    <FaChevronDown
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="sr-only">
                      {isOpen ? "Réduire" : "Déployer"} le texte « Les émotions
                      »
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Activité 3 : Image à droite (desktop), texte à gauche */}
          <article
            className="w-full overflow-hidden shadow-md"
            aria-labelledby="corpo-title"
          >
            <div className="w-full overflow-hidden shadow-md">
              {/* Empilé en mobile, row-reverse dès md */}
              <div className="flex w-full flex-col md:flex-row-reverse relative transition-all duration-500">
                {/* Image */}
                <picture className="w-full md:w-1/2">
                  <source
                    type="image/webp"
                    srcSet="/images/webp/corpo-480.webp 480w,
            /images/webp/corpo-768.webp 768w,
            /images/webp/corpo-1280.webp 1280w,
            /images/webp/corpo-1920.webp 1920w"
                  />
                  <img
                    src="/images/corpo-1280.jpg"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    alt="Atelier expression corporelle : libérer ses émotions par le mouvement et la peinture"
                    width="3024"
                    height="4032"
                    loading="lazy"
                    decoding="async"
                    className={`w-full object-cover transition-all duration-500
      h-56 sm:h-72
      ${expIsOpen ? "md:h-[500px]" : "md:h-[300px]"}
    `}
                  />
                </picture>

                {/* Texte */}
                <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8 mt-4 md:mt-0 relative">
                  <h3
                    className="text-4xl sm:text-5xl md:text-6xl font-bold font-titre text-mauve-perso"
                    id="corpo-title"
                  >
                    Expression corporelle
                  </h3>

                  {/* Sous-titre */}
                  <p className="font-texte text-lg sm:text-xl mt-4">
                    Bouger, ressentir et libérer ses émotions à travers le
                    corps.
                  </p>

                  {/* Texte détaillé (dépliable) */}
                  <div
                    id="corps-content"
                    className={`transition-all duration-500 overflow-hidden
            ${expIsOpen ? "max-h-[2000px] md:max-h-[400px] mt-4" : "max-h-0"}
          `}
                  >
                    <p className="font-texte ">
                      Et oui ! Qui dit{" "}
                      <span className="text-mauve-perso font-semibold">
                        « art »
                      </span>{" "}
                      ne veut pas forcément dire{" "}
                      <span className="text-mauve-perso font-semibold">
                        « rester assis sur une chaise »
                      </span>
                      .<br />
                      Le{" "}
                      <span className="text-mauve-perso font-semibold">
                        corps parle
                      </span>{" "}
                      et{" "}
                      <span className="text-mauve-perso font-semibold">
                        s’exprime
                      </span>{" "}
                      beaucoup à travers des{" "}
                      <span className="text-mauve-perso font-semibold">
                        mouvements
                      </span>
                      , parfois{" "}
                      <span className="text-mauve-perso font-semibold">
                        lents
                      </span>
                      , parfois{" "}
                      <span className="text-mauve-perso font-semibold">
                        rapides
                      </span>
                      .<br />
                      C’est une autre forme d’{" "}
                      <span className="text-mauve-perso font-semibold">
                        art-thérapie
                      </span>{" "}
                      que nous irons explorer avec les{" "}
                      <span className="text-mauve-perso font-semibold">
                        sensations corporelles
                      </span>
                      .
                    </p>
                  </div>

                  {/* Bouton : mobile normal / desktop absolute */}
                  <button
                    type="button"
                    onClick={() => setExpIsOpen(!expIsOpen)}
                    aria-controls="corps-content"
                    aria-expanded={expIsOpen}
                    className="text-mauve-perso mt-4 self-end md:mt-0 md:absolute md:bottom-4 md:right-4"
                  >
                    <FaChevronDown
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        expIsOpen ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="sr-only">
                      {expIsOpen ? "Réduire" : "Déployer"} le texte « Expression
                      corporelle »
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Activité 4 : Image à gauche (desktop), texte à droite */}
          <article
            className="w-full overflow-hidden shadow-md"
            aria-labelledby="nature-title"
          >
            <div className="w-full overflow-hidden shadow-md">
              {/* Empilé en mobile, row dès md */}
              <div className="flex w-full flex-col md:flex-row relative transition-all duration-500">
                {/* Image */}
                <picture className="w-full md:w-1/2">
                  <source
                    type="image/webp"
                    srcSet="/images/webp/nature-480.webp 480w,
            /images/webp/nature-768.webp 768w,
            /images/webp/nature-1280.webp 1280w,
            /images/webp/nature-1920.webp 1920w"
                  />
                  <img
                    src="/images/nature-1280.jpg"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    alt="Atelier d’art en nature à Wavre : enfants créant en forêt pour se connecter à l’environnement"
                    width="2016"
                    height="1512"
                    loading="lazy"
                    decoding="async"
                    className={`w-full object-cover transition-all duration-500
      h-56 sm:h-72
      ${cnvIsOpen ? "md:h-[500px]" : "md:h-[300px]"}
    `}
                  />
                </picture>

                {/* Texte */}
                <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8 mt-4 md:mt-0 relative">
                  <h3
                    className="text-4xl sm:text-5xl md:text-6xl font-bold font-titre text-mauve-perso"
                    id="nature-title"
                  >
                    Activité en nature
                  </h3>

                  {/* Sous-titre */}
                  <p className="font-texte text-lg sm:text-xl mt-4">
                    Cultiver l’écoute, l’empathie et l’expression authentique
                  </p>

                  {/* Texte détaillé (dépliable) */}
                  <div
                    id="nature-content"
                    className={`transition-all duration-500 overflow-hidden
            ${cnvIsOpen ? "max-h-[2000px] md:max-h-[400px] mt-4" : "max-h-0"}
          `}
                  >
                    <p className="font-texte">
                      L’{" "}
                      <span className="text-mauve-perso font-semibold">
                        art allié à la nature
                      </span>{" "}
                      nous permet de{" "}
                      <span className="text-mauve-perso font-semibold">
                        créer
                      </span>{" "}
                      plein de choses et d’{" "}
                      <span className="text-mauve-perso font-semibold">
                        activer tous nos sens
                      </span>{" "}
                      en restant{" "}
                      <span className="text-mauve-perso font-semibold">
                        connecté à notre environnement
                      </span>
                      . Si la{" "}
                      <span className="text-mauve-perso font-semibold">
                        nature
                      </span>{" "}
                      est déjà une{" "}
                      <span className="text-mauve-perso font-semibold">
                        thérapie en elle-même
                      </span>
                      , alors soyez-en-sûr : la pratique de l’{" "}
                      <span className="text-mauve-perso font-semibold">
                        art en nature
                      </span>{" "}
                      sera d’autant plus{" "}
                      <span className="text-mauve-perso font-semibold">
                        puissante
                      </span>{" "}
                      et{" "}
                      <span className="text-mauve-perso font-semibold">
                        thérapeutique
                      </span>
                      .
                    </p>
                  </div>

                  {/* Bouton : mobile normal / desktop absolute */}
                  <button
                    type="button"
                    onClick={() => setCnvIsOpen(!cnvIsOpen)}
                    aria-controls="nature-content"
                    aria-expanded={cnvIsOpen}
                    className="text-mauve-perso mt-4 self-start md:mt-0 md:absolute md:bottom-4 md:left-4"
                  >
                    <FaChevronDown
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        cnvIsOpen ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="sr-only">
                      {cnvIsOpen ? "Réduire" : "Déployer"} le texte « Activité
                      en nature »
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Call-to-action section */}
      <section className="py-20 bg-gradient-to-br from-mauve-perso to-rose-perso text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-titre mb-8">
            Prêt à commencer cette aventure créative ?
          </h2>
          <p className="text-xl font-texte mb-12 opacity-90 leading-relaxed">
            Rejoignez-nous pour des moments uniques de partage, de créativité et
            d'épanouissement dans un cadre bienveillant et professionnel.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              to="/agenda#reservations"
              className="group px-8 py-4 bg-white text-mauve-perso font-texte text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              <FaCalendarCheck className="text-lg group-hover:scale-110 transition-transform" />
              Réserver une séance
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#footer"
              className="group px-8 py-4 border-2 border-white text-white font-texte text-xl rounded-xl hover:bg-white hover:text-mauve-perso transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 cursor-pointer"
            >
              <FaHeart className="text-lg group-hover:scale-110 transition-transform" />
              Poser une question
            </a>
          </div>
        </div>
      </section>

      {/* Acroyoga */}
      <section
        id="acroyoga"
        className="w-full bg-rose-perso/40 relative"
        aria-labelledby="acro-title"
      >
        {/* Header avec image pleine largeur et texte superposé */}
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
          <picture>
            <source
              type="image/webp"
              srcSet="/images/webp/acro-1280.webp 1280w,
            /images/webp/acro-1920.webp 1920w"
            />
            <img
              src="/images/acro-1280.png" /* fallback UNIQUE */
              sizes="100vw"
              alt="Acroyoga en famille dans le Brabant wallon : jeu, mouvement et complicité parents-enfants"
              width="1920"
              height="1280" /* ratio pano exact (1280x262 → 1920x393) */
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </picture>

          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2
              id="acro-title"
              className="text-6xl md:text-9xl text-white font-titre text-center px-4"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
            >
              Les samedis acroyoga en famille
            </h2>
          </div>
        </div>

        {/* Contenu texte + flyer */}
        <div className="w-full flex flex-col md:flex-row items-start">
          {/* Texte gauche centré */}
          <div className="md:w-2/3 flex items-center justify-center px-6 md:px-12 py-16">
            {/* Bloc Acroyoga — variation magazine */}
            <div
              className="relative rounded-[2rem] p-8 md:p-14 overflow-hidden
                bg-gradient-to-br from-blue-perso/70 via-blue-perso/40 to-white
                shadow-2xl ring-1 ring-mauve-perso/10 text-center space-y-8"
            >
              {/* décor léger (grain + halos) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-30"
              >
                <div
                  className="absolute -top-24 -left-24 w-[32rem] h-[32rem] blur-3xl"
                  style={{
                    background:
                      "radial-gradient(40% 40% at 50% 50%, rgba(155,219,231,.35), transparent 70%)",
                  }}
                />
                <div
                  className="absolute -bottom-16 -right-16 w-[26rem] h-[26rem] blur-3xl"
                  style={{
                    background:
                      "radial-gradient(40% 40% at 50% 50%, rgba(246,117,101,.30), transparent 70%)",
                  }}
                />
              </div>

              {/* Titre */}
              <h3
                className="text-4xl md:text-6xl font-titre text-mauve-perso font-semibold
                 leading-tight tracking-tight
                 motion-safe:animate-[fadeInUp_0.6s_ease-out_0.08s_both]"
              >
                Un moment de partage et de bien-être
              </h3>
              <div className="flex justify-center mb-8">
                <div className="w-24 h-1 bg-mauve-perso rounded-full"></div>
              </div>

              {/* tags flottants (mouvement, jeu, complicité) */}
              <div
                className="flex flex-wrap justify-center gap-3
                  motion-safe:animate-[fadeInUp_0.6s_ease-out_0.12s_both]"
              >
                {["Mouvement", "Jeu", "Complicité"].map((t, i) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white/80 text-mauve-perso font-medium
                   ring-1 ring-mauve-perso/10 backdrop-blur
                   motion-safe:animate-[float_6s_ease-in-out_infinite]
                   [animation-delay:calc(var(--i)*200ms)]"
                    style={{ ["--i"]: i }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Paragraphe 1 */}
              <p
                className="font-texte leading-relaxed text-lg text-gray-800 max-w-3xl mx-auto
                motion-safe:animate-[fadeInUp_0.6s_ease-out_0.15s_both]"
              >
                L’
                <span className="font-semibold text-mauve-perso">
                  acroyoga en famille
                </span>{" "}
                est une expérience unique qui associe{" "}
                <span className="font-semibold text-mauve-perso">
                  mouvement
                </span>
                , <span className="font-semibold text-mauve-perso">jeu</span> et
                <span className="font-semibold text-mauve-perso">
                  {" "}
                  complicité
                </span>
                . Petits et grands découvrent ensemble la joie de construire des
                postures simples et ludiques, où chacun trouve sa place et
                apporte son énergie.
              </p>

              {/* Paragraphe 2 (bandeau “verre”) */}
              <div className="max-w-3xl mx-auto">
                <div
                  className="rounded-2xl bg-white/70 backdrop-blur ring-1 ring-mauve-perso/10 p-6 md:p-7 text-left
                    shadow-md motion-safe:animate-[fadeInUp_0.6s_ease-out_0.18s_both]"
                >
                  <p className="font-texte leading-relaxed text-lg text-gray-800">
                    Bien plus qu’une activité physique, l’acroyoga développe la
                    <span className="font-semibold text-mauve-perso">
                      {" "}
                      confiance mutuelle
                    </span>
                    , l’
                    <span className="font-semibold text-mauve-perso">
                      écoute
                    </span>{" "}
                    et la
                    <span className="font-semibold text-mauve-perso">
                      {" "}
                      coopération
                    </span>
                    . Chaque séance alterne entre moments dynamiques et instants
                    de détente, créant un équilibre harmonieux entre
                    <span className="font-semibold text-mauve-perso">
                      {" "}
                      vitalité
                    </span>{" "}
                    et
                    <span className="font-semibold text-mauve-perso">
                      {" "}
                      sérénité
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* Paragraphe 3 + guillemets décoratifs */}
              <div
                className="relative max-w-3xl mx-auto
                  motion-safe:animate-[fadeInUp_0.6s_ease-out_0.21s_both]"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-3 -left-3 text-5xl text-mauve-perso/20 select-none"
                >
                  “
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-6 -right-2 text-5xl text-mauve-perso/20 select-none"
                >
                  ”
                </span>
                <p className="font-texte leading-relaxed text-lg text-gray-800">
                  C’est un véritable{" "}
                  <span className="font-semibold text-mauve-perso">
                    temps de partage
                  </span>
                  , où{" "}
                  <span className="font-semibold text-mauve-perso">rires</span>,{" "}
                  <span className="font-semibold text-mauve-perso">
                    découvertes
                  </span>{" "}
                  et
                  <span className="font-semibold text-mauve-perso">
                    {" "}
                    bien-être
                  </span>{" "}
                  se rencontrent, laissant aux familles un cœur léger et un
                  esprit apaisé.
                </p>
              </div>

              {/* bloc partenaire */}
              <div
                className="flex justify-center
                  motion-safe:animate-[fadeInUp_0.6s_ease-out_0.24s_both]"
              >
                <a
                  href="http://mameshen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/80 backdrop-blur rounded-2xl ring-1 ring-mauve-perso/10
                 px-6 py-5 shadow-md hover:shadow-lg transition-all
                 hover:-translate-y-0.5"
                  aria-label="En savoir plus sur l’acroyoga (nouvel onglet)"
                >
                  <div className="flex flex-col items-center">
                    <picture>
                      <source
                        srcSet="/images/webp/mamslogo-64.webp"
                        type="image/webp"
                      />
                      <img
                        src="/images/webp/mamslogo-64.webp"
                        alt="Logo du partenaire MaMeShen, spécialiste acroyoga"
                        width="128"
                        height="128"
                        loading="lazy"
                        decoding="async"
                        className="w-24 h-24 md:w-28 md:h-28 object-contain mb-3 transition-transform
                       group-hover:scale-105"
                      />
                    </picture>
                    <span className="text-lg md:text-xl font-semibold text-mauve-perso text-center">
                      En savoir plus sur l’acroyoga ?
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Flyer collé à droite */}
          <div className="md:w-1/3 flex flex-col items-end relative py-16 px-12">
            <picture>
              <source type="image/webp" srcSet="/images/webp/flyer.webp" />
              <img
                src="/images/flyer.JPG"
                alt="Flyer des ateliers d’acroyoga en famille à Limal"
                width="1409"
                height="2000"
                loading="lazy"
                decoding="async"
                className="h-[80vh] w-auto object-contain"
                style={{ right: 0, top: "16rem" }}
              />
            </picture>
          </div>
        </div>
      </section>

      {/*Yoga*/}
      <section
        id="yoga-enfant"
        className="w-full bg-blue-perso"
        aria-labelledby="yoga-title"
      >
        {/* Header avec image pleine largeur et texte superposé */}
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
          <picture>
            <source
              type="image/webp"
              srcSet="/images/webp/yoga-enfant-480.webp 480w,
            /images/webp/yoga-enfant-768.webp 768w,
            /images/webp/yoga-enfant-1280.webp 1280w,
            /images/webp/yoga-enfant-1920.webp 1920w"
            />
            <img
              src="/images/yoga-enfant-1280.jpg" /* fallback UNIQUE */
              sizes="100vw"
              alt="Atelier yoga parent-enfant : détente, massages et mouvements ludiques"
              width="1920"
              height="1075"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
          </picture>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2
              id="yoga-title"
              className="text-6xl md:text-9xl text-white font-titre text-center px-4"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
            >
              Les dimanches en mouvement
            </h2>
          </div>
        </div>

        {/* Bloc Yoga parent–enfant — variation 2 colonnes */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-mauve-perso/10 bg-blue-perso">
          {/* décor de fond discret */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30 pointer-events-none"
          >
            <div
              className="absolute -top-24 -left-24 w-[34rem] h-[34rem] blur-3xl"
              style={{
                background:
                  "radial-gradient(40% 40% at 50% 50%, rgba(155,219,231,.25), transparent 70%)",
              }}
            />
            <div
              className="absolute -bottom-20 -right-16 w-[28rem] h-[28rem] blur-3xl"
              style={{
                background:
                  "radial-gradient(40% 40% at 50% 50%, rgba(246,117,101,.22), transparent 70%)",
              }}
            />
          </div>

          <div className="relative grid md:grid-cols-2 gap-0">
            {/* Visuel gauche */}
            <figure className="relative p-8 md:p-10">
              <div
                className="relative aspect-[4/3] w-full max-w-xl mx-auto overflow-hidden
                      rounded-[2.5rem] ring-1 ring-mauve-perso/10 shadow-xl
                      transform-gpu motion-safe:animate-[fadeIn_0.5s_ease-out_both]"
              >
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/images/webp/yoga-bg-768.webp 768w,
            /images/webp/yoga-bg-1280.webp 1280w"
                  />
                  <img
                    src="/images/yoga-bg-1280.jpg" /* fallback unique */
                    alt="Illustration yoga parent-enfant : jeu, détente et mouvement"
                    width="1280"
                    height="1280"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </picture>
                {/* badge en coin */}
                <figcaption
                  className="absolute bottom-3 left-3 px-3 py-1 rounded-full
                               bg-white/85 backdrop-blur ring-1 ring-mauve-perso/10
                               text-mauve-perso text-sm font-medium"
                >
                  3–5 ans • Dimanche
                </figcaption>
              </div>
            </figure>

            {/* Contenu droite */}
            <div className="p-8 md:p-12">
              {/* chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["Mouvement", "Jeu", "Complicité"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-blue-perso/15 text-mauve-perso
                           ring-1 ring-mauve-perso/10 text-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-3xl md:text-5xl font-titre text-mauve-perso mb-3 font-semibold leading-tight">
                Yoga parent–enfant (3 à 5 ans)
              </h3>
              <p className="font-texte text-gray-700">
                Le{" "}
                <span className="font-semibold text-mauve-perso">
                  yoga parent-enfant
                </span>{" "}
                est une pratique accessible dès l’âge de 3 à 5 ans. Elle permet
                aux plus jeunes de découvrir le mouvement via des
                <span className="font-semibold text-mauve-perso">
                  {" "}
                  jeux corporels ludiques
                </span>
                , tandis que les parents partagent un moment de complicité
                bienveillante.
              </p>

              {/* liste iconée */}
              <ul className="mt-6 space-y-3">
                {[
                  [
                    "Motricité & coordination",
                    "La motricité fine et globale progresse à travers des postures simples.",
                  ],
                  [
                    "Concentration & émotions",
                    "Meilleure régulation de l’énergie et apaisement émotionnel.",
                  ],
                  [
                    "Lien & confiance",
                    "Renforce l’attachement et la confiance mutuelle parent-enfant.",
                  ],
                ].map(([title, desc]) => (
                  <li key={title} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full
                              bg-mauve-perso/10 text-mauve-perso"
                    >
                      ✓
                    </span>
                    <p className="font-texte text-gray-800">
                      <span className="font-semibold text-mauve-perso">
                        {title}
                      </span>{" "}
                      — {desc}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="font-texte text-gray-700 mt-6">
                La séance se clôture par des{" "}
                <span className="font-semibold text-mauve-perso">
                  massages simples et relaxants
                </span>
                , pour ancrer une atmosphère de détente et favoriser un retour
                au calme en douceur.
              </p>

              {/* mini-footer d’info source (optionnel) */}
              <div className="mt-6 text-left text-sm text-gray-600">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur
                         ring-1 ring-mauve-perso/10"
                >
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a8 8 0 1 0 .001 16.001A8 8 0 0 0 10 2ZM9 9V5h2v4H9Zm0 6v-4h2v4H9Z" />
                  </svg>
                  Approche douce inspirée des pratiques préscolaires
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
