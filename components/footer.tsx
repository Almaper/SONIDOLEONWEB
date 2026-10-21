"use client";

import Image from "next/image";
import Link from "next/link";
import { useCMS } from "@/lib/cms-data";

export function Footer() {
  const { data } = useCMS();

  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <a href="/#inicio" className="flex items-center" aria-label="Sonido León, inicio">
          <Image src="/images/logo.png" alt="Sonido León" width={140} height={42} className="h-7 w-auto opacity-80" />
        </a>
        <div className="etiqueta flex flex-wrap gap-x-6 gap-y-2 text-[0.65rem] text-muted-foreground">
          <span>{data.footer.copyright}</span>
          <Link href="/aviso-legal" className="hover:text-primary">Aviso legal</Link>
          <Link href="/politica-privacidad" className="hover:text-primary">Privacidad</Link>
          <Link href="/politica-cookies" className="hover:text-primary">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
