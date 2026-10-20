"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, User } from "lucide-react";
import { useCMS } from "@/lib/cms-data";

export function Contact() {
  const { data } = useCMS();
  const { contact } = data;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "", // 👈 NUEVO CAMPO
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Tu ID de Formspree
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xojnjzzv";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", phone: "", message: "" }); // 👈 RESETEAR TAMBIÉN TELÉFONO
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="relative border-t border-border py-24 lg:py-32 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl text-balance">
            {contact.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {contact.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* FORMULARIO CON NUEVO CAMPO DE TELÉFONO */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Campo Nombre */}
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                Nombre completo *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-md border border-border bg-card pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Tu nombre"
                />
              </div>
            </div>

            {/* Campo Email */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-md border border-border bg-card pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            {/* 👇 NUEVO CAMPO DE TELÉFONO */}
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                Teléfono
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full rounded-md border border-border bg-card pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>

            {/* Campo Mensaje */}
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Mensaje *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                placeholder="Cuéntanos sobre tu evento (fecha, tipo de evento, número de asistentes...)"
              />
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {/* Mensajes de estado */}
            {status === "success" && (
              <p className="text-sm text-primary font-medium">
                ✅ ¡Mensaje enviado! Te responderemos pronto.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500 font-medium">
                ❌ Error al enviar. Intenta de nuevo o escríbenos directamente.
              </p>
            )}

            {/* Aviso de privacidad */}
            <p className="text-xs text-muted-foreground text-center mt-2">
              Al enviar, aceptas nuestra{" "}
              <a href="/politica-privacidad" className="text-primary hover:underline">
                Política de Privacidad
              </a>
            </p>
          </form>

          {/* DATOS DE CONTACTO (sin cambios) */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Teléfono</h4>
                  <a href={`tel:${contact.info.phone.replace(/\s+/g, "")}`} className="mt-1 block text-sm text-muted-foreground hover:text-primary">{contact.info.phone}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Email</h4>
                  <a href={`mailto:${contact.info.email}`} className="mt-1 block text-sm text-muted-foreground hover:text-primary">{contact.info.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Ubicación</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {contact.info.address}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-foreground">Síguenos</h4>
              <div className="flex gap-4">
                {contact.social.instagram && contact.social.instagram !== "#" && (
                  <a
                    href={contact.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="rounded-md border border-border p-3 text-muted-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
                {contact.social.youtube && contact.social.youtube !== "#" && (
                  <a
                    href={contact.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="rounded-md border border-border p-3 text-muted-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                )}
                {contact.social.facebook && contact.social.facebook !== "#" && (
                  <a
                    href={contact.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="rounded-md border border-border p-3 text-muted-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}