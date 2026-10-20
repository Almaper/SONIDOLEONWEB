// Contenido de la web (sin "use client" para poder usarlo también en el servidor:
// metadatos SEO, sitemap y páginas de proyecto renderizadas en servidor).

// ── Types ──────────────────────────────────────────────────────────

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface ProjectPageItem {
  id: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroImage: string;
  cardImage: string;
  category: string;
  gallery: string[];
  description: string[];
  characteristics: {
    title: string;
    items: string[];
  };
  workDone: {
    title: string;
    items: string[];
  };
  impact: {
    title: string;
    text: string;
  };
  cta: string;
  published: boolean;
}

export interface InstagramPost {
  url: string;
  image: string;
  title: string;
  reel: boolean;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  text: string;
}

export interface ServiceItem {
  id: string;
  icon: "volume" | "lightbulb" | "monitor" | "party" | "speaker";
  title: string;
  description: string;
}

export interface SocialLinks {
  instagram: string;
  youtube: string;
  facebook: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface CMSData {
  maintenanceMode: boolean;
  hero: {
    title: string;
    highlight: string;
    subtitle: string;
    image: string;
    badge: string;
    stats: { value: string; label: string }[];
  };
  about: {
    title: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: ProjectItem[];
  };
  projectPages: ProjectPageItem[];
  contact: {
    title: string;
    subtitle: string;
    info: ContactInfo;
    social: SocialLinks;
  };
  footer: {
    copyright: string;
  };
  news: NewsItem[];
  instagram: {
    title: string;
    subtitle: string;
    profile: string;
    handle: string;
    posts: InstagramPost[];
  };
}

// ── Contenido ─────────────────────────────────────────────────────
// Los textos viven en /content/*.json y se editan desde el panel
// (Pages CMS, configurado en .pages.yml). Aquí solo se juntan y se completan.

import portada from "../content/portada.json";
import proyectos from "../content/proyectos.json";
import instagram from "../content/instagram.json";
import contacto from "../content/contacto.json";

type ProyectoJSON = {
  published?: boolean;
  h1: string;
  slug?: string;
  category?: string;
  image?: string;
  gallery?: string[];
  description?: string[];
  characteristics?: { title?: string; items?: string[] };
  workDone?: { title?: string; items?: string[] };
  impact?: { title?: string; text?: string };
  cta?: string;
  seoTitle?: string;
  metaDescription?: string;
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const projectPages: ProjectPageItem[] = (proyectos.items as ProyectoJSON[]).map((p, i) => {
  const description = (p.description ?? []).filter(Boolean);
  const image = p.image || "/images/hero-bg.jpg";
  return {
    id: `pp${i + 1}`,
    slug: p.slug?.trim() || slugify(p.h1),
    seoTitle: p.seoTitle?.trim() || `${p.h1} | Sonido León`,
    metaDescription: p.metaDescription?.trim() || (description[0] ?? p.h1).slice(0, 160),
    h1: p.h1,
    heroImage: image,
    cardImage: image,
    category: p.category ?? "",
    gallery: (p.gallery ?? []).filter(Boolean),
    description,
    characteristics: { title: p.characteristics?.title ?? "", items: (p.characteristics?.items ?? []).filter(Boolean) },
    workDone: { title: p.workDone?.title ?? "", items: (p.workDone?.items ?? []).filter(Boolean) },
    impact: { title: p.impact?.title ?? "", text: p.impact?.text ?? "" },
    cta: p.cta ?? "",
    published: p.published !== false,
  };
});

export const defaultData: CMSData = {
  maintenanceMode: Boolean(portada.maintenanceMode),
  hero: { ...portada.hero, image: portada.hero.image || "/images/hero-bg.jpg" },
  about: portada.about,
  services: {
    ...portada.services,
    items: (portada.services.items as Partial<ServiceItem>[]).map((it, i) => ({
      id: it.id || `s${i + 1}`,
      icon: (it.icon || "volume") as ServiceItem["icon"],
      title: it.title ?? "",
      description: it.description ?? "",
    })),
  },
  projects: {
    title: proyectos.title,
    subtitle: proyectos.subtitle,
    items: projectPages.map((p) => ({ id: p.id, title: p.h1, category: p.category, description: "", image: p.cardImage })),
  },
  projectPages,
  contact: { title: contacto.title, subtitle: contacto.subtitle, info: contacto.info, social: contacto.social },
  footer: contacto.footer,
  news: [],
  instagram: {
    ...instagram,
    posts: (instagram.posts as Partial<InstagramPost>[])
      .filter((p) => p.url && p.image)
      .slice(0, 4)
      .map((p) => ({ url: p.url!, image: p.image!, title: p.title ?? "", reel: Boolean(p.reel) })),
  },
};
