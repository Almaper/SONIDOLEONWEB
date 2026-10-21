"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ProjectPageItem } from "@/lib/site-content";
import { CMSProvider } from "@/lib/cms-data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

function ConceptContent({ project }: { project: ProjectPageItem }) {
  const bloques = [project.characteristics, project.workDone].filter((b) => b.items.length > 0);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 pb-10 pt-32 lg:px-8 lg:pt-40">
          <Link href="/#conceptos" className="etiqueta inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Conceptos
          </Link>
          <p className="etiqueta mt-10 flex items-center gap-3 text-primary">
            <span className="h-px w-10 bg-primary" />
            {project.category || "Concepto"}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-6xl">
            {project.h1}
          </h1>
        </section>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden border border-border bg-card">
            <Image src={project.heroImage} alt={project.h1} fill priority sizes="100vw" className="object-cover" />
          </div>
          {project.imageNote && <p className="etiqueta mt-3 text-[0.65rem] text-muted-foreground/60">{project.imageNote}</p>}
        </div>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="space-y-5 lg:col-span-7">
            {project.description.map((p, i) => (
              <p key={i} className={i === 0 ? "font-display text-2xl leading-snug text-foreground sm:text-3xl" : "text-lg leading-relaxed text-muted-foreground"}>
                {p}
              </p>
            ))}
            {project.impact.text && <p className="text-lg leading-relaxed text-muted-foreground">{project.impact.text}</p>}
          </div>
          {bloques.length > 0 && (
            <div className="space-y-10 lg:col-span-4 lg:col-start-9">
              {bloques.map((b, k) => (
                <div key={k}>
                  {b.title && <p className="etiqueta text-muted-foreground">{b.title}</p>}
                  <ul className="mt-4 border-t border-border">
                    {b.items.map((item, i) => (
                      <li key={i} className="flex gap-4 border-b border-border py-3 text-sm">
                        <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </section>

        {project.gallery.length > 0 && (
          <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 sm:grid-cols-2 lg:px-8">
            {project.gallery.map((src, idx) => (
              <div key={src + idx} className="relative aspect-[4/3] overflow-hidden border border-border">
                <Image src={src} alt={`${project.h1}, imagen ${idx + 1}`} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
            ))}
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export function ProjectView({ project }: { project: ProjectPageItem }) {
  return (
    <CMSProvider>
      <ConceptContent project={project} />
    </CMSProvider>
  );
}
