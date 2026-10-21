import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { defaultData } from "@/lib/site-content";

// Todas las fichas de concepto publicadas entran solas en el sitemap.
const projectSlugs = defaultData.projectPages
  .filter((p) => p.published)
  .map((p) => p.slug);

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sonidoleon.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...["politica-privacidad", "politica-cookies", "aviso-legal"].map((path) => ({
      url: `${baseUrl}/${path}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];

  const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${baseUrl}/conceptos/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}
