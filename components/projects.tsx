"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCMS } from "@/lib/cms-data";

export function Projects() {
  const { data } = useCMS();
  const { projects, projectPages } = data;
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Fichas publicadas, en el orden definido en lib/site-content.ts
  const publishedProjects = useMemo(
    () => projectPages.filter((p) => p.published),
    [projectPages]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="proyectos"
      className="relative border-t border-border py-24 lg:py-32 bg-background/50 backdrop-blur-sm"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl text-balance">
            {projects.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {projects.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publishedProjects.map((project, i) => (
            <Link
              key={project.id}
              href={`/proyectos/${project.slug}`}
              className={`group relative aspect-[4/3] overflow-hidden rounded-lg transition-all duration-500 block ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Image
                src={project.cardImage || project.heroImage}
                alt={project.h1}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-background/95 via-background/40 to-transparent pb-6 transition-all duration-300 md:justify-center md:bg-background/80 md:bg-none md:pb-0 md:opacity-0 md:group-hover:opacity-100">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {project.category}
                </span>
                <h3 className="mt-2 px-4 text-center font-display text-lg font-bold text-foreground">
                  {project.h1}
                </h3>
                <span className="mt-3 text-sm text-primary underline underline-offset-4">
                  Ver proyecto
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
