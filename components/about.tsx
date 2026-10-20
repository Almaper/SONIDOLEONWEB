"use client";

import { useEffect, useRef, useState } from "react";
import { useCMS } from "@/lib/cms-data";

export function About() {
  const { data } = useCMS();
  const { about } = data;
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

  return (
    <section className="relative border-t border-border py-24 lg:py-32 bg-background/50 backdrop-blur-sm" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div
            className={`transition-all duration-700 ${visible ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl text-balance">
              {about.title}
            </h2>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="mt-6 text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {about.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`rounded-lg border border-border bg-card p-6 text-center transition-all duration-500 ${visible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                style={{ animationDelay: `${i * 100 + 200}ms` }}
              >
                <p className="font-display text-4xl font-extrabold text-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
