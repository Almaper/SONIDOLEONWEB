"use client";

import { useCMS } from "@/lib/cms-data";

export function About() {
  const { data } = useCMS();
  const { about } = data;

  return (
    <section className="border-t border-border bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-12 lg:px-8">
        <p className="etiqueta text-primary lg:col-span-3">{about.title}</p>
        <div className="space-y-6 lg:col-span-9">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "font-display text-2xl font-medium leading-snug text-foreground text-balance sm:text-3xl lg:text-4xl"
                  : "max-w-3xl text-lg leading-relaxed text-muted-foreground"
              }
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
