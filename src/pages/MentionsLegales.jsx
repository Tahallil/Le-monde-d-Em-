// src/pages/MentionsLegales.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MentionsLegales() {
  return (
    <>
      <Helmet>
        <title>Mentions légales – Le monde d’Emâ</title>
        <meta
          name="description"
          content="Mentions légales du site Le monde d’Emâ : informations éditoriales, contact, responsabilité, droit à l’image et protection des données personnelles."
        />
        <link rel="canonical" href="https://lemondedema.com/mentions-legales" />
        <meta property="og:title" content="Mentions légales – Le monde d’Emâ" />
        <meta
          property="og:description"
          content="Informations légales, coordonnées et politique de confidentialité du site Le monde d’Emâ."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://lemondedema.com/mentions-legales"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="min-h-[60vh] px-6 py-12 max-w-5xl mx-auto font-texte">
        <h1 className="text-5xl font-titre font-bold text-mauve-perso mb-8">
          Mentions légales
        </h1>

        <p className="mb-6 text-gray-700">
          Bienvenue sur les mentions légales du site{" "}
          <span className="font-semibold">Le monde d’Emâ</span>. Pour toute
          question, vous pouvez nous contacter via le{" "}
          <Link to="/#footer" className="underline">
            formulaire
          </Link>
          .
        </p>

        <nav aria-label="Sommaire" className="mb-8">
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>
              <a href="#editeur" className="underline">
                Éditeur du site
              </a>
            </li>
            <li>
              <a href="#contact" className="underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#hebergeur" className="underline">
                Hébergeur
              </a>
            </li>
            <li>
              <a href="#responsabilite" className="underline">
                Responsabilité
              </a>
            </li>
            <li>
              <a href="#image" className="underline">
                Droits d’auteur & droit à l’image
              </a>
            </li>
            <li>
              <a href="#donnees" className="underline">
                Protection des données
              </a>
            </li>
          </ul>
        </nav>

        <section id="editeur" className="mb-8">
          <h2 className="text-2xl font-soustitre font-semibold mb-2">
            Éditeur du site
          </h2>
          <p className="text-gray-700">
            Jimmy – site édité à titre personnel, Brabant wallon (Belgique).
          </p>
        </section>

        <section id="contact" className="mb-8">
          <h2 className="text-2xl font-soustitre font-semibold mb-2">
            Contact
          </h2>
          <p className="text-gray-700">
            Email :{" "}
            <a
              href="mailto:contact.lemondedema@gmail.com"
              className="underline"
            >
              contact.lemondedema@gmail.com
            </a>
            <br />
            Téléphone :{" "}
            <a href="tel:+32472714970" className="underline">
              +32 (0)472 71 49 70
            </a>
          </p>
        </section>

        <section id="hebergeur" className="mb-8">
          <h2 className="text-2xl font-soustitre font-semibold mb-2">
            Hébergeur
          </h2>
          <p className="text-gray-700">
            Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
            –{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              vercel.com
            </a>
          </p>
        </section>

        <section id="responsabilite" className="mb-8">
          <h2 className="text-2xl font-soustitre font-semibold mb-2">
            Responsabilité
          </h2>
          <p className="text-gray-700">
            Les informations présentées sur ce site ont une vocation
            informative. Elles peuvent être mises à jour sans préavis. L’éditeur
            ne saurait être tenu responsable d’une mauvaise interprétation ou
            d’un usage inapproprié des contenus.
          </p>
        </section>

        <section id="image" className="mb-8">
          <h2 className="text-2xl font-soustitre font-semibold mb-2">
            Droits d’auteur et droit à l’image
          </h2>
          <p className="text-gray-700">
            Les textes, images et visuels présents sur ce site sont protégés par
            le droit d’auteur. Toute reproduction ou réutilisation sans accord
            préalable est interdite.
            <br />
            <br />
            Les enfants et personnes figurant sur certaines photos ont donné
            leur autorisation (ou celle de leurs parents/tuteurs légaux) pour
            l’utilisation de leur image dans le cadre exclusif de ce site.
            <br />
            <br />
            Si vous êtes identifiable sur une photo et souhaitez qu’elle soit
            retirée, merci d’en faire la demande par email à l’adresse de
            contact.
          </p>
        </section>

        <section id="donnees" className="mb-8">
          <h2 className="text-2xl font-soustitre font-semibold mb-2">
            Protection des données personnelles
          </h2>
          <p className="text-gray-700">
            Les informations collectées via le formulaire de contact (nom,
            email, message) sont utilisées uniquement pour répondre aux
            demandes.
            <br />
            <br />
            Elles ne sont jamais transmises à des tiers et sont conservées
            uniquement le temps nécessaire au traitement de la demande.
            <br />
            <br />
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous pouvez demander l’accès, la rectification ou la
            suppression de vos données en écrivant à l’adresse suivante :{" "}
            <a
              href="mailto:contact.lemondedema@gmail.com"
              className="underline"
            >
              contact.lemondedema@gmail.com
            </a>
            .
          </p>
        </section>
        <section id="contenus-embarques" className="mt-12">
          <h2 className="font-titre text-3xl font-semibold mb-4">
            Contenus embarqués & cookies
          </h2>
          <p className="font-texte leading-relaxed mb-4">
            Certaines pages du site peuvent intégrer des contenus fournis par
            des services tiers. C’est notamment le cas de la page « Agenda » qui
            propose un calendrier Google. L’affichage de ce contenu est bloqué
            par défaut. Si vous choisissez de l’activer, le service tiers
            (Google) peut déposer des cookies et collecter des données
            techniques et d’usage conformément à ses propres politiques. Tant
            que vous n’avez pas donné votre accord, aucun cookie tiers lié à ce
            contenu n’est déposé.
          </p>
          <p className="font-texte leading-relaxed mb-4">
            Votre choix d’activer ou non ces contenus est enregistré localement
            dans votre navigateur et peut être modifié à tout moment via le
            bouton « Retirer l’autorisation » affiché sous le contenu une fois
            activé. Pour plus d’informations sur le traitement opéré par Google,
            veuillez consulter la politique de confidentialité de Google ainsi
            que la documentation relative aux cookies de ses services.
          </p>
          <p className="font-texte leading-relaxed">
            En dehors de ces contenus embarqués, le site ne dépose pas de
            cookies soumis à consentement à des fins publicitaires ou de suivi.
            Les éventuels cookies strictement nécessaires au bon fonctionnement
            du site ne requièrent pas votre accord préalable.
          </p>
        </section>
      </div>
    </>
  );
}
