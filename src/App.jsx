// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useRef, useEffect, lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";
import SidebarMenu from "./components/SidebarMenu";
import Overlay from "./components/Overlay";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import SkipLink from "./components/SkipLink";

// ✅ Lazy load des pages (déclaré au niveau du module)
// ⛔️ NE PAS importer ces pages en haut avec `import Accueil from ...`
const Accueil = lazy(() => import("./pages/Accueil"));
const Activites = lazy(() => import("./pages/Activites"));
const Agenda = lazy(() => import("./pages/Agenda"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Layout qui contient Header/Footer et affiche BackToTop si on est sur /activites
function Layout({ children, menuOpen, toggleMenu, closeMenu }) {
  const mainRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Quand l’URL change, focus sur le contenu
    mainRef.current?.focus();
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Skip link (visible uniquement au clavier) */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black px-3 py-2 rounded shadow"
      >
        Aller au contenu principal
      </a>

      <Header onMenuToggle={toggleMenu} />
      <SkipLink />
      {/* ✅ Landmark principal */}
      <main
        id="main"
        role="main"
        ref={mainRef}
        tabIndex={-1}
        className="h-auto z-0"
      >
        {children}
      </main>

      <Footer />

      {/* Overlay et Sidebar */}
      <Overlay isVisible={menuOpen} onClick={closeMenu} />
      <SidebarMenu isOpen={menuOpen} onClose={closeMenu} />

      {/* Bouton affiché uniquement si on est sur /activites */}
      {location.pathname === "/activites" && <BackToTop />}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        >
          <Suspense fallback={<div className="p-6" role="status" aria-live="polite">Chargement…</div>}>
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/activites" element={<Activites />} />
              <Route path="/agenda" element={<Agenda />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
