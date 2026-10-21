"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useCMS } from "@/lib/cms-data";

export function Projects() {
  const { data } = useCMS();
  const { projects } = data;
  const conceptos = data.projectPages.filter((p) => p.published);
  if (conceptos.length === 0) return null;

  return (
    <section id="conceptos" className="border-t border-border bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">{projects.title}</h2>
          {projects.subtitle && <p className="max-w-md text-muted-foreground">{projects.subtitle}</p>}
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {conceptos.map((c, i) => (
            <Link key={c.id} href={`/conceptos/${c.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden border border-border bg-card">
                <Image
                  src={c.cardImage}
                  alt={c.h1}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="etiqueta absolute left-4 top-4 bg-background/80 px-2.5 py-1.5 text-primary backdrop-blur-sm">
                  {c.category || "Concepto"} {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tight">{c.h1}</h3>
                  {c.description[0] && <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">{c.description[0]}</p>}
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              {c.imageNote && <p className="etiqueta mt-3 text-[0.65rem] text-muted-foreground/60">{c.imageNote}</p>}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
