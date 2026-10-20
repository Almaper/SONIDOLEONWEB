"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Comprobar si el usuario ya ha aceptado/rechazado cookies
    const consent = localStorage.getItem("sonidoleon_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("sonidoleon_cookie_consent", "all");
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("sonidoleon_cookie_consent", "necessary");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 p-4 md:p-6 z-50 shadow-lg">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-gray-300 text-sm flex-1">
            <span className="font-semibold text-yellow-400">🍪 Sonido León</span> utiliza cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar el contenido.
            <Link
              href="/politica-cookies"
              className="text-yellow-400 hover:text-yellow-300 underline ml-1 font-medium"
            >
              Más información
            </Link>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={acceptNecessary}
              className="px-4 py-2 text-sm font-medium text-yellow-400 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Solo necesarias
            </button>
            <button
              onClick={acceptAll}
              className="px-6 py-2 text-sm font-semibold text-black bg-yellow-400 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Aceptar todas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}