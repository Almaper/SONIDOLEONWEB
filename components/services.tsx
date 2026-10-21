"use client";

import React from "react";
import { Lightbulb, Monitor, Box, Hand, Volume2, PartyPopper, Speaker } from "lucide-react";
import { useCMS } from "@/lib/cms-data";
import type { ServiceItem } from "@/lib/cms-data";

const iconMap: Record<ServiceItem["icon"], React.ElementType> = {
  monitor: Monitor,
  box: Box,
  hand: Hand,
  lightbulb: Lightbulb,
  volume: Volume2,
  party: PartyPopper,
  speaker: Speaker,
};

export function Services() {
  const { data } = useCMS();
  const { services } = data;

  return (
    <section id="que-hacemos" className="border-t border-border bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">{services.title}</h2>
          {services.subtitle && <p className="max-w-md text-muted-foreground">{services.subtitle}</p>}
        </div>

        <div className="mt-14 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((service, i) => {
            const Icon = iconMap[service.icon] || Monitor;
            return (
              <div key={service.id} className="group relative border-b border-r border-border p-8 transition-colors hover:bg-card">
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-center justify-between">
                  <span className="etiqueta text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="mt-12 font-display text-xl font-medium">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
