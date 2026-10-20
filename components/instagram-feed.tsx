"use client";

import Image from "next/image";
import { Instagram, Play } from "lucide-react";
import { useCMS } from "@/lib/cms-data";

export function InstagramFeed() {
  const { data } = useCMS();
  const ig = data.instagram;
  if (!ig || ig.posts.length === 0) return null;

  return (
    <section id="instagram" className="relative border-t border-border py-24 lg:py-32 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl text-balance">{ig.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">{ig.subtitle}</p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {ig.posts.map((post) => (
            <li key={post.url}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label={`${post.title} (abre Instagram)`}
              >
                <span className="relative block aspect-square overflow-hidden rounded-lg border border-border bg-card">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {post.reel && (
                    <span className="absolute right-2 top-2 rounded-full bg-background/70 p-1.5 text-foreground">
                      <Play className="h-3.5 w-3.5 fill-current" />
                    </span>
                  )}
                </span>
                <span className="mt-2 block text-sm font-medium leading-snug text-muted-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href={ig.profile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Instagram className="h-5 w-5" />
            Síguenos en {ig.handle}
          </a>
        </div>
      </div>
    </section>
  );
}
