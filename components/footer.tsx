"use client";

import { useCMS } from "@/lib/cms-data";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

export function Footer() {
  const { data } = useCMS();

  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-sm py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <a href="/#inicio" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Sonido León"
              width={140}
              height={42}
              className="h-8 w-auto"
            />
          </a>

          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <a href="/#inicio" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/#servicios" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/#proyectos" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="/#contacto" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href={data.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Sonido León"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {data.footer.copyright}
          </p>
          <div className="mt-2 flex justify-center gap-4">
            {/* ENLACES LEGALES COMPLETOS */}
            <Link
              href="/politica-privacidad"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Política de privacidad
            </Link>
            <Link
              href="/politica-cookies"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Política de cookies
            </Link>
            <Link
              href="/aviso-legal"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Aviso legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}