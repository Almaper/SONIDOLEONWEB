"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Phone, Instagram } from "lucide-react";
import type { ProjectPageItem } from "@/lib/site-content";
import { CMSProvider } from "@/lib/cms-data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function ProjectContent({ project }: { project: ProjectPageItem }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={project.heroImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a proyectos
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {project.h1}
            </h1>

            {/* Hero Image */}
            <div className="relative aspect-video rounded-lg overflow-hidden mb-12">
              <Image
                src={project.heroImage}
                alt={project.h1}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Description */}
            <div className="prose prose-lg prose-invert max-w-none mb-16">
              {project.description.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-muted-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Galería */}
            {project.gallery.length > 0 && (
              <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.gallery.map((src, idx) => (
                  <div key={src + idx} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image src={src} alt={`${project.h1}, foto ${idx + 1}`} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                ))}
              </div>
            )}

            {/* Characteristics */}
            {project.characteristics.items.length > 0 && (
<section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {project.characteristics.title}
              </h2>
              <ul className="space-y-3">
                {project.characteristics.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            )}

            {/* Work Done */}
            {project.workDone.items.length > 0 && (
<section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {project.workDone.title}
              </h2>
              <ul className="space-y-3">
                {project.workDone.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            )}

            {/* Impact */}
            {project.impact.text && (
<section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {project.impact.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.impact.text}
              </p>
            </section>
            )}

            {/* CTA */}
            <section className="bg-primary/10 border border-primary/30 rounded-lg p-8 text-center">
              <p className="text-xl text-foreground mb-6">
                {project.cta || "¿Tienes un proyecto en mente? Hablemos."}
              </p>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Contactar
              </Link>
            </section>

            <p className="pt-4 text-center">
              <a
                href="https://www.instagram.com/sonido_leon/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
              >
                <Instagram className="h-5 w-5" />
                Más trabajos en Instagram
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export function ProjectView({ project }: { project: ProjectPageItem }) {
  return (
    <CMSProvider>
      <ProjectContent project={project} />
      <WhatsAppButton project={project.h1} />
    </CMSProvider>
  );
}
