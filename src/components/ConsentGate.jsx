// src/components/ConsentGate.jsx
import { useEffect, useMemo, useState } from "react";

/**
 * ConsentGate – bloque le rendu d'un contenu embarqué tant que l'utilisateur
 * n'a pas donné son accord. Stocke la préférence dans localStorage.
 *
 * Exemple d'usage (Google Calendar) :
 * <ConsentGate
 *   storageKey="consent-google-calendar"
 *   serviceName="Google Calendar"
 *   description="Ce calendrier est fourni par Google. En l'affichant, Google peut déposer des cookies et collecter des données."
 * >
 *   <iframe ... />
 * </ConsentGate>
 */
export default function ConsentGate({
  storageKey = "consent-external-embeds",
  serviceName = "Contenu externe",
  description = "Ce contenu externe peut déposer des cookies et collecter des données.",
  allowLabel = "Autoriser",
  revokeLabel = "Retirer l'autorisation",
  className = "",
  children,
}) {
  const [isAllowed, setIsAllowed] = useState(false);
  const storage = useMemo(() => (typeof window !== "undefined" ? window.localStorage : null), []);

  // Charger la préférence au montage
  useEffect(() => {
    if (!storage) return;
    try {
      const raw = storage.getItem(storageKey);
      if (raw === "true") setIsAllowed(true);
    } catch {}
  }, [storage, storageKey]);

  const allow = () => {
    setIsAllowed(true);
    try { storage?.setItem(storageKey, "true"); } catch {}
  };

  const revoke = () => {
    setIsAllowed(false);
    try { storage?.removeItem(storageKey); } catch {}
  };

  if (isAllowed) {
    return (
      <div className={className}>
        {children}
        <div className="mt-3 text-right">
          <button
            type="button"
            onClick={revoke}
            className="text-sm underline underline-offset-2 text-gray-500 hover:text-gray-700"
            aria-label={`${revokeLabel} pour ${serviceName}`}
          >
            {revokeLabel}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50 text-center ${className}`}
      role="region"
      aria-label={`Autoriser ${serviceName}`}
    >
      <div className="max-w-prose">
        <h3 className="font-semibold text-lg mb-2">{serviceName} bloqué</h3>
        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
      </div>

      <button
        type="button"
        onClick={allow}
        className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-mauve-perso text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-mauve-perso"
        aria-label={`Autoriser ${serviceName}`}
      >
        {allowLabel}
      </button>

      <p className="mt-3 text-xs text-gray-500">
        Votre choix est enregistré dans ce navigateur et peut être modifié à tout moment.
      </p>
    </div>
  );
}
