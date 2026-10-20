"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton({ project = "" } = {}) {
  const phoneNumber = "34649202904";
  // El texto empieza siempre igual para saber que el mensaje llega desde la web.
  const message = project
    ? `[Web sonidoleon.com] Hola, he visto el proyecto «${project}» en vuestra web y me gustaría pedir presupuesto.`
    : "[Web sonidoleon.com] Hola, os escribo desde vuestra web. Me gustaría pedir presupuesto para un evento.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-green-500 text-white rounded-full px-4 py-3 shadow-lg hover:bg-green-600 transition-all"
    >
      <MessageCircle className="h-6 w-6" />
      <span>WhatsApp</span>
    </button>
  );
}