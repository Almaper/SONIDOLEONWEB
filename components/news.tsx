"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar } from "lucide-react";
import { useCMS } from "@/lib/cms-data";

export function News() {
  const { data } = useCMS();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (data.news.length === 0) return null;

  return (
    <section id="novedades" className="relative border-t border-border py-24 lg:py-32 bg-background/70 backdrop-blur-sm" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl text-balance">
            Novedades
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Las últimas noticias y eventos de Sonido León.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.news.map((item, i) => (
            <article
              key={item.id}
              className={`rounded-lg border border-border bg-card p-6 transition-all duration-500 hover:border-primary/50 ${visible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                <time dateTime={item.date}>
                  {new Date(item.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
