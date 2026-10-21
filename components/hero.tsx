"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { useCMS } from "@/lib/cms-data";

export function Hero() {
  const { data } = useCMS();
  const { subtitle, badge, image } = data.hero;

  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
      <div className="bg-rejilla absolute inset-0 opacity-60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pb-28">
        {badge && (
          <p className="etiqueta flex items-center gap-3 text-primary">
            <span className="h-px w-10 bg-primary" />
            {badge}
          </p>
        )}
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {subtitle}
        </h1>
        <a href="#conceptos" className="etiqueta mt-12 inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
          Ver conceptos
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
