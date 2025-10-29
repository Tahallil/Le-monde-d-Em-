import { Helmet } from "react-helmet-async";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import ConsentGate from "../components/ConsentGate";

export default function Agenda() {
  return (
    <>
      <Helmet>
        {/* Enhanced title with better appeal */}
        <title>
          Agenda & Réservation | Ateliers créatifs enfants Brabant wallon - Le
          monde d'Emâ
        </title>
        <meta
          name="description"
          content="📅 Consultez l'agenda et réservez vos ateliers : Art-thérapie mercredis, Acroyoga samedis, Yoga dimanches. Tarifs famille et disponibilités en temps réel dans le Brabant wallon."
        />
        <meta
          name="keywords"
          content="réservation atelier enfant Brabant wallon, agenda activités créatives, planning art-thérapie Brabant wallon, tarifs ateliers bien-être enfants, disponibilités yoga famille"
        />
        <link rel="canonical" href="https://lemondedema.com/agenda" />

        {/* Open Graph */}
        <meta property="og:locale" content="fr_BE" />
        <meta
          property="og:title"
          content="Agenda & Réservation - Ateliers créatifs enfants"
        />
        <meta
          property="og:description"
          content="📅 Découvrez les créneaux disponibles et réservez facilement vos ateliers de bien-être et créativité pour enfants dans le Brabant wallon"
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
        <meta property="og:url" content="https://lemondedema.com/agenda" />
        <meta property="og:site_name" content="Le monde d'Emâ" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Agenda ateliers enfants Brabant wallon 📅"
        />
        <meta
          name="twitter:description"
          content="Réservez vos ateliers créatifs et thérapeutiques facilement"
        />
        <meta
          name="twitter:image"
          content="https://lemondedema.com/images/twitter-card.png"
        />
        <meta name="twitter:site" content="@lemondedema" />
        <meta name="twitter:creator" content="@lemondedema" />

        {/* Enhanced JSON-LD for events */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EventSeries",
            name: "Ateliers récurrents – Le monde d’Emâ",
            inLanguage: "fr-BE",
            description:
              "Séries d'ateliers enfants (art-thérapie, acroyoga famille, yoga parent-enfant). Jours indicatifs ; heures et lieux confirmés dans l’agenda intégré.",
            organizer: {
              "@type": "Organization",
              name: "Le monde d'Emâ",
              url: "https://lemondedema.com",
              telephone: "+32472714970",
              email: "contact.lemondedema@gmail.com",
              sameAs: [
                "https://www.instagram.com/le_monde_d_ema",
                "https://www.facebook.com/people/Le-monde-dEm%C3%A2/61579992146987/",
              ],
            },
            eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
            eventSchedule: [
              {
                "@type": "Schedule",
                repeatFrequency: "P1W",
                byDay: "https://schema.org/Wednesday",
              },
              {
                "@type": "Schedule",
                repeatFrequency: "P1W",
                byDay: "https://schema.org/Saturday",
              },
              {
                "@type": "Schedule",
                repeatFrequency: "P1W",
                byDay: "https://schema.org/Sunday",
              },
            ],
            location: {
              "@type": "Place",
              name: "Brabant wallon",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Wallonie",
                addressCountry: "BE",
              },
            },
            potentialAction: {
              "@type": "ReserveAction",
              target: [
                "mailto:contact.lemondedema@gmail.com",
                "tel:+32472714970",
                "https://wa.me/32472714970",
              ],
              name: "Réserver / Demander confirmation",
            },
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
                name: "Comment réserver un atelier ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vous pouvez réserver directement par téléphone au +32 472 71 49 70, par email à contact.lemondedema@gmail.com ou via WhatsApp. La réservation est obligatoire pour garantir votre place.",
                },
              },
              {
                "@type": "Question",
                name: "Que faut-il apporter pour les ateliers ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Prévoyez des vêtements confortables, une gourde et une collation saine, si possible. Pour les activités nature, des chaussures adaptées sont recommandées. Tout le matériel créatif est fourni.",
                },
              },
              {
                "@type": "Question",
                name: "Combien d'enfants peuvent participer par atelier ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Chaque atelier accueille entre 4 et 8 enfants maximum pour garantir un accompagnement personnalisé et de qualité. Si un créneau est complet, un second peut être organisé.",
                },
              },
              {
                "@type": "Question",
                name: "À partir de quel âge les enfants peuvent-ils participer ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Les ateliers d'art-thérapie et pleine conscience sont ouverts dès 6 ans. Le yoga parent-enfant du dimanche accueille les enfants dès 3 ans accompagnés d'un parent.",
                },
              },
              {
                "@type": "Question",
                name: "Où se déroulent les ateliers ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Les ateliers ont lieu dans différents espaces du Brabant wallon. L'adresse précise est communiquée lors de la confirmation de réservation.",
                },
              },
              {
                "@type": "Question",
                name: "Quels sont les tarifs des ateliers ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mercredi (Art-thérapie et Yoga) : 30€ par enfant. Samedi (Acroyoga) : 15€ par personne. Dimanche (Yoga parent–enfant) : 10€ par enfant et 15€ par adulte. Il n’y a pas d’abonnement.",
                },
              },
            ],
          })}
        </script>

        {/* Breadcrumb */}
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
                name: "Agenda",
                item: "https://lemondedema.com/agenda",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Section 1 : Agenda */}
      <section className="py-12 bg-blue-perso text-center">
        <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold font-titre text-mauve-perso mb-8 flex items-center justify-center gap-4 animate-fade-in-down">
          <FaCalendarAlt className="text-mauve-perso" /> Agenda
        </h1>
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-mauve-perso rounded-full"></div>
        </div>
        <p className="text-mauve-perso font-texte text-xl mb-8">
          Consultez ci-dessous les prochains événements et activités prévues.
        </p>
        <div className="flex justify-center">
          <div className="w-full max-w-5xl rounded-lg shadow-lg overflow-hidden">
            <ConsentGate
              storageKey="consent-google-calendar"
              serviceName="Google Calendar"
              description="Ce calendrier est fourni par Google. En l’affichant, Google peut déposer des cookies et collecter des données. Tu peux retirer ton accord à tout moment."
            >
              <iframe
                src="https://calendar.google.com/calendar/embed?src=1537db982dfbbc53c4aeb19eb627c139d048f524f85e9910b6348521dded4b74%40group.calendar.google.com&ctz=Europe%2FBrussels"
                title="Agenda Google"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-[600px] border-0"
                aria-describedby="reservations-title"
              />
            </ConsentGate>
          </div>
        </div>

        <div
          id="reservations"
          className="max-w-4xl mx-auto text-center px-6 pt-5"
        >
          <h2
            id="reservations-title"
            className="text-4xl font-titre font-bold text-mauve-perso mb-6"
          >
            Réservations
          </h2>
          <p className="font-texte text-lg text-gray-700 leading-relaxed">
            Les créneaux affichés ci-dessus sont à titre indicatif.
            <br />
            La réservation se fait uniquement en contactant directement
            <span className="font-semibold text-mauve-perso">
              {" "}
              Le monde d’Emâ{" "}
            </span>
            via les outils disponibles :
            <a
              href="mailto:contact.lemondedema@gmail.com"
              className="underline text-rose-perso"
            >
              {" "}
              email
            </a>
            ,
            <a href="tel:+32472714970" className="underline text-rose-perso">
              {" "}
              téléphone{" "}
            </a>
            ou{" "}
            <a href="#footer" className="underline text-rose-perso">
              {" "}
              formulaire de contact
            </a>
            .
            <br />
            Les inscriptions sont validées personnellement par Emma, afin de
            placer chaque enfant au bon moment.
            <br />
            Le lieu exact est communiqué lors de la confirmation.
          </p>
        </div>
      </section>

      {/* Section 2 : Lieux des événements */}
      <section className="py-12 bg-rose-perso/40">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-7xl font-bold font-titre text-mauve-perso mb-6 flex items-center justify-center gap-2">
            <FaMapMarkerAlt /> Lieux des événements
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-mauve-perso rounded-full"></div>
          </div>
          <ul className="space-y-4 font-texte">
            <li className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <span>
                📍 Mercredi : Coopérative du Colombier (Mont-Saint-Guibert)
              </span>
              <a
                href="https://www.google.com/maps/place/Coop%C3%A9rative+du+Colombier/@50.6222121,4.61771,18z/data=!4m15!1m8!3m7!1s0x47c17fa9ab719965:0x7fb671855436d204!2sRue+de+Blanmont+5,+1435+Mont-Saint-Guibert!3b1!8m2!3d50.6218634!4d4.6195286!16s%2Fg%2F11c0zs2jxd!3m5!1s0x47c17f7263a0b5e7:0xb62016193150ef16!8m2!3d50.6220907!4d4.6194242!16s%2Fg%2F11y780bjrk?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-perso hover:underline text-sm"
                aria-label="Voir la Coopérative du Colombier sur Google Maps (nouvel onglet)"
              >
                Voir sur Google Maps
              </a>
            </li>

            <li className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <span>📍 Samedi : CareFit (Rixensart)</span>
              <a
                href="https://www.google.com/maps/place/CareFit+-+Kin%C3%A9s+%2F+Kin%C3%A9s+du+sport+%2F+Podologue+%2F+Ost%C3%A9opathe+%2F+Nutritionniste%2F+Psy+%2F+Coaching/@50.7239188,4.5104649,17z/data=!4m14!1m7!3m6!1s0x47c3d7a4b6e814a3:0x83d7d4c2f94f5249!2sCareFit+-+Kin%C3%A9s+%2F+Kin%C3%A9s+du+sport+%2F+Podologue+%2F+Ost%C3%A9opathe+%2F+Nutritionniste%2F+Psy+%2F+Coaching!8m2!3d50.7239154!4d4.5130398!16s%2Fg%2F11pz359y3b!3m5!1s0x47c3d7a4b6e814a3:0x83d7d4c2f94f5249!8m2!3d50.7239154!4d4.5130398!16s%2Fg%2F11pz359y3b?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-perso hover:underline text-sm"
                aria-label="Voir CareFit sur Google Maps (nouvel onglet)"
              >
                Voir sur Google Maps
              </a>
            </li>

            <li className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <span>📍 Dimanche : ORIGIN'Loisirs asbl (Rixensart)</span>
              <a
                href="https://www.google.com/maps/place/ORIGIN'Loisirs+asbl/@50.7132526,4.5338317,16z/data=!4m14!1m7!3m6!1s0x47c3d6ffa047537d:0x27fa0b603f62406!2sORIGIN'Loisirs+asbl!8m2!3d50.7132492!4d4.5364066!16s%2Fg%2F11b7rn97xc!3m5!1s0x47c3d6ffa047537d:0x27fa0b603f62406!8m2!3d50.7132492!4d4.5364066!16s%2Fg%2F11b7rn97xc?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-perso hover:underline text-sm"
                aria-label="Voir ORIGIN'Loisirs asbl sur Google Maps (nouvel onglet)"
              >
                Voir sur Google Maps
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Section Tarifs */}
      <section
        className="py-16 bg-blue-perso"
        aria-labelledby="tarifs-title"
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2
            id="tarifs-title"
            className="text-6xl md:text-7xl font-bold font-titre text-mauve-perso mb-4 text-center"
          >
            Tarifs des ateliers
          </h2>

          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-mauve-perso rounded-full"></div>
          </div>

          {/* Badge info */}
          <p className="font-texte text-base md:text-lg text-gray-700 text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 shadow-sm">
              🌸{" "}
              <span className="text-mauve-perso font-semibold">
                Tarifs simples
              </span>{" "}
              — sans abonnement
            </span>
          </p>

          {/* Grid de cartes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Mercredi */}
            <article className="group relative rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
              <div className="absolute -top-3 left-4 px-3 py-1 text-xs font-texte rounded-full bg-mauve-perso text-white shadow">
                Art-thérapie
              </div>
              <div className="p-6 md:p-8 text-center">
                <h3 className="font-titre text-4xl text-mauve-perso mb-2">
                  Mercredi
                </h3>
                <p className="font-texte text-gray-600 mb-4">
                  Séance d’expression créative
                </p>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="font-texte text-5xl font-bold text-mauve-perso leading-none">
                    30€
                  </span>
                  <span className="font-texte text-gray-600">/ enfant</span>
                </div>
                <p className="font-texte text-sm text-gray-500">
                  Matériel créatif inclus
                </p>
              </div>
            </article>

            {/* Samedi */}
            <article className="group relative rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
              <div className="absolute -top-3 left-4 px-3 py-1 text-xs font-texte rounded-full bg-mauve-perso text-white shadow">
                Acroyoga famille
              </div>
              <div className="p-6 md:p-8 text-center">
                <h3 className="font-titre text-4xl text-mauve-perso mb-2">
                  Samedi
                </h3>
                <p className="font-texte text-gray-600 mb-4">
                  Jeu, confiance, équilibre
                </p>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="font-texte text-5xl font-bold text-mauve-perso leading-none">
                    15€
                  </span>
                  <span className="font-texte text-gray-600">/ personne</span>
                </div>
                <p className="font-texte text-sm text-gray-500">Séance de 1h</p>
              </div>
            </article>

            {/* Dimanche */}
            <article className="group relative rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
              <div className="absolute -top-3 left-4 px-3 py-1 text-xs font-texte rounded-full bg-mauve-perso text-white shadow">
                Yoga parent-enfant
              </div>
              <div className="p-6 md:p-8 text-center">
                <h3 className="font-titre text-4xl text-mauve-perso mb-2">
                  Dimanche
                </h3>
                <p className="font-texte text-gray-600 mb-4">
                  Mouvement doux & complicité
                </p>

                {/* Double prix */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-texte text-4xl font-bold text-mauve-perso leading-none">
                      10€
                    </span>
                    <span className="font-texte text-gray-600">/ enfant</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-texte text-4xl font-bold text-mauve-perso leading-none">
                      15€
                    </span>
                    <span className="font-texte text-gray-600">/ adulte</span>
                  </div>
                </div>

                <p className="font-texte text-sm text-gray-500 mt-2">
                  Séance de 1h
                </p>
              </div>
            </article>
          </div>

          {/* Lien de réservation */}
          <div className="text-center mt-10">
            <a
              href="#reservations"
              className="inline-flex items-center gap-3 px-6 py-3 bg-mauve-perso text-white font-texte text-lg rounded-xl shadow-lg hover:bg-[#4a2250] transition-colors"
              aria-label="Aller à la section Réservations"
            >
              Voir comment réserver
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 3 : FAQ */}
      <section className="py-16 bg-rose-perso/40 text-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-7xl font-bold font-titre text-mauve-perso mb-6 flex items-center justify-center">
            Questions fréquentes
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-mauve-perso rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition hover:scale-110">
              <h3 className="font-semibold font-texte text-xl text-mauve-perso mb-2">
                Faut-il réserver à l’avance ?
              </h3>
              <p className="font-texte">
                Oui, toutes les activités nécessitent une{" "}
                <strong>réservation</strong> afin de garantir votre place.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition hover:scale-110">
              <h3 className="font-semibold font-texte text-xl text-mauve-perso mb-2">
                Que faut-il prévoir ?
              </h3>
              <p className="font-texte">
                Des <strong>vêtements adaptés</strong> à la météo, de{" "}
                <strong>bonnes chaussures</strong> si l’activité se déroule en
                forêt, une <strong>gourde</strong> et une{" "}
                <strong>collation</strong>, saine si possible.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition hover:scale-110">
              <h3 className="font-semibold font-texte text-xl text-mauve-perso mb-2">
                Combien d’enfants peuvent participer à un atelier ?
              </h3>
              <p className="font-texte">
                Chaque atelier accueille entre <strong>4 et 8 enfants</strong>.
                Si un atelier est complet, un second pourra être{" "}
                <strong>proposé</strong> dans la journée.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition hover:scale-110">
              <h3 className="font-semibold font-texte text-xl text-mauve-perso mb-2">
                À partir de quel âge les enfants peuvent-ils participer ?
              </h3>
              <p className="font-texte">
                Les ateliers sont ouverts dès <strong>6 ans</strong>. Le
                dimanche, les sessions sont accessibles dès{" "}
                <strong>3 ans</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
