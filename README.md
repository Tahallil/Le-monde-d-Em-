# Le monde d’Emâ — Site vitrine (React + Tailwind)

> **Pitch :** Site vitrine pour des ateliers enfants (art‑thérapie, acroyoga famille, yoga parent‑enfant) avec créneaux variables. Objectif : UX claire, accessibilité, et SEO robuste malgré des horaires/lieux évolutifs.

---

## Sommaire
- [Aperçu](#aperçu)
- [Fonctionnalités clés](#fonctionnalités-clés)
- [Stack & Architecture](#stack--architecture)
- [Prise en main](#prise-en-main)
- [Référencement (SEO)](#référencement-seo)
- [Accessibilité (A11y)](#accessibilité-a11y)
- [Performance](#performance)
- [Décisions & discussions (Projet Emma)](#décisions--discussions-projet-emma)
- [Ce que j’ai appris](#ce-que-jai-appris)
- [Roadmap](#roadmap)
- [Licence & Contact](#licence--contact)

---

## Aperçu
Site vitrine avec routage, contenu éditorial et intégration d’un agenda externe (source de vérité) pour gérer des créneaux qui bougent chaque semaine. L’enjeu : ne pas « geler » des horaires/lieux côté SEO tout en rassurant les parents et en facilitant la prise de contact.

**Objectifs atteints :**
- Afficher des jours indicatifs (mercredi/samedi/dimanche) sans figer d’heures tant qu’elles ne sont pas confirmées.
- Conserver des données structurées valides pour Google (rich results) sans induire en erreur.
- Garantir une expérience accessible (navigation clavier, focus, texte alternatif).

---

## Fonctionnalités clés
- Agenda intégré (Google Calendar en lecture seule, lazy‑loaded).
- Prise de contact (EmailJS, mail, téléphone, WhatsApp) avec honeypot anti‑spam.
- Schémas Schema.org : `LocalBusiness`, `FAQPage`, `BreadcrumbList`, **`EventSeries` + `Schedule`** (jours sans heures).
- Composant **SkipLink** (“Aller au contenu”) relié à `#main`.
- Meta/OG/Twitter par page avec Helmet ; canonicals ; `robots.txt` + `sitemap.xml`.
- Animations CSS centralisées (DRY) et styles réactifs avec Tailwind.

---

## Stack & Architecture
**Stack :** React (Vite), Tailwind CSS, React Router, EmailJS.  
**Intégrations :** Google Calendar (iframe en lecture seule).

```
/ (racine)
├─ public/
├─ src/
│  ├─ components/     # Header, Footer, SkipLink, etc.
│  ├─ pages/          # Accueil, Activités, Agenda, Mentions, 404
│  ├─ styles/         # index.css (tokens + animations)
│  └─ main.jsx, App.jsx, router
└─ …
```

---

## Prise en main

### Installation
```bash
pnpm install
pnpm dev
```

### Variables d’environnement
Créer un fichier `.env` si nécessaire :
```
VITE_EMAILJS_PUBLIC_KEY=xxxxx
```

### Build
```bash
pnpm build
pnpm preview
```

---

## Référencement (SEO)

**Problème :** les horaires/lieux changent, ce qui rend vite faux le balisage `Event` et les `openingHours` d’un `LocalBusiness`.

**Solution mise en place :**
- **Accueil** : `LocalBusiness` **sans** `openingHoursSpecification` (évite d’annoncer des heures inexactes). On conserve `inLanguage`, `areaServed`, `telephone`, `email`, `sameAs`…
- **Agenda** : un **`EventSeries`** avec `eventSchedule` = `Schedule` **par jour** (mercredi/samedi/dimanche) via `byDay` (valeurs Schema.org), **sans heures**. Message visible : *« heures et lieux susceptibles d’évoluer ; lieu exact communiqué à la confirmation »*.
- **Quand une série se fige** (même heure + même lieu) : on ajoute des **`Event`** datés **uniquement** pour ces séances confirmées (rich results).
- **Canonical** par page, **OG/Twitter** cohérents, **sitemap.xml** soumis à Search Console.

*Bénéfice :* Google reçoit des données **vraies** et **stables**, l’utilisateur voit les détails à jour via l’agenda.

---

## Accessibilité (A11y)
- **Skip link** : lien d’évitement vers `#main` (focusable au clavier).
- **Landmarks** : `<main id="main">` (rôle implicite), titres hiérarchisés.
- **Alt text** descriptifs sur images, focus visibles, contrastes contrôlés.
- **Iframes** avec `title`, `loading="lazy"`, `referrerpolicy="no-referrer"`.

---

## Performance
- **Polices** : `preconnect` vers `fonts.googleapis.com` et `fonts.gstatic.com` (avec `crossorigin` pour gstatic).
- **Images/iframes** non critiques en `loading="lazy"`.
- **Animations CSS** dédupliquées dans `index.css`.
- **Meta `theme-color`** pour PWA‑like sur mobile.

---

## Décisions & discussions (Projet Emma)
- Horaires mouvants & SEO : retirer `openingHoursSpecification` du `LocalBusiness` ; passer de `Event` datés à **`EventSeries` + `Schedule`** (jours sans heures) tant que ce n’est pas figé.
- Clarté UX : mention explicite que les créneaux sont indicatifs et que le **lieu exact** est donné à la confirmation.
- Accessibilité : ajout d’un **SkipLink** et simplification des rôles (`role="main"` non nécessaire).
- DX / Cohérence CSS : centraliser les `@keyframes` ; corriger la casse de la font **"Imperial Script"** pour éviter les fallbacks.
- Iframe agenda : `loading="lazy"` + `referrerpolicy`.
- Index HTML : `preconnect` polices + `theme-color`.

> Ces choix reflètent une approche "SEO‑first sans promesses".

---

## Ce que j’ai appris
- **Tailwind CSS** : design system léger, responsive, animations utilitaires (`animate-float`, `animate-fade-in-up`), approche DRY.
- **SEO concret** : Helmet, données structurées adaptées au contexte, sitemaps/robots, Rich Results.
- **Accessibilité** : skip link, landmarks, alt text, focus management.
- **Prod & sécurité légère** : lazy loading, referrer policy, clé EmailJS publique restreinte par domaine.

---

## Roadmap
- [ ] Ajouter des `Event` datés quand une série devient stable (même lieu + même heure).
- [ ] Enrichir `LocalBusiness` avec `geo`/`hasMap` quand un lieu devient durable.
- [ ] Mesures Lighthouse/Core Web Vitals et compressions images.
- [ ] (Optionnel) Tests Vitest/RTL et lint/CI GitHub Actions.

---

## Licence & Contact
- **Licence** : MIT (ou propriétaire selon le contexte client).
- **Auteur** : Vanderstappen Jimmy — **Contact** : vanderstappen.dev@gmail.com · https://github.com/Tahallil · https://linkedin.com/in/jimmy-vanderstappen-481744313
