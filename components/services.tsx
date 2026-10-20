"use client";

import React from "react"

import { useEffect, useRef, useState } from "react";
import { Volume2, Lightbulb, Monitor, PartyPopper, Speaker } from "lucide-react";
import { useCMS } from "@/lib/cms-data";
import type { ServiceItem } from "@/lib/cms-data";

const iconMap: Record<ServiceItem["icon"], React.ElementType> = {
  volume: Volume2,
  lightbulb: Lightbulb,
  monitor: Monitor,
  party: PartyPopper,
  speaker: Speaker,
};

export function Services() {
  const { data } = useCMS();
  const { services } = data;
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
    <section id="servicios" className="relative py-24 lg:py-32 bg-background/85 backdrop-blur-sm" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl text-balance">
            {services.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {services.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, i) => {
            const Icon = iconMap[service.icon] || Volume2;
            return (
              <div
                key={service.id}
                className={`group rounded-lg border-b-2 border-primary/30 bg-card p-8 transition-all duration-500 hover:border-primary hover:bg-secondary ${
                  visible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="mb-5 inline-flex rounded-md bg-primary/10 p-3">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
