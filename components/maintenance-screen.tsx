"use client";

import Image from "next/image";
import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import type { CMSData } from "@/lib/site-content";

export function MaintenanceScreen({ data }: { data: CMSData }) {
  const { phone, email, address } = data.contact.info;
  const tel = phone.replace(/[^\d+]/g, "");
  const wa = tel.replace(/^\+/, "");
  const waText = encodeURIComponent("[Web sonidoleon.com] Hola, os escribo desde vuestra web.");
  const instagram = data.contact.social.instagram;

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0">
        <Image src={data.hero.image} alt="" fill priority className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
        <Image src="/images/logo.png" alt="Sonido León" width={360} height={110} priority className="h-auto w-56 sm:w-72" />

        <p className="mt-14 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Web en renovación
        </p>

        <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-balance sm:text-5xl">
          {data.maintenance.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          {data.maintenance.text}
        </p>

        <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href={`tel:${tel}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="h-5 w-5" />
            {phone}
          </a>
          <a
            href={`https://wa.me/${wa}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <a href={`mailto:${email}`} className="inline-flex items-center gap-2 transition-colors hover:text-primary">
            <Mail className="h-4 w-4" />
            {email}
          </a>
          {instagram && instagram !== "#" && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-primary">
              <Instagram className="h-4 w-4" />
              @sonido_leon
            </a>
          )}
        </div>

        <div className="mt-16 w-full border-t border-border pt-6 text-xs text-muted-foreground">
          <p>{address}</p>
          <p className="mt-3 flex flex-wrap justify-center gap-4">
            <a href="/aviso-legal" className="hover:text-primary">Aviso legal</a>
            <a href="/politica-privacidad" className="hover:text-primary">Política de privacidad</a>
            <a href="/politica-cookies" className="hover:text-primary">Política de cookies</a>
          </p>
        </div>
      </main>
    </div>
  );
}
