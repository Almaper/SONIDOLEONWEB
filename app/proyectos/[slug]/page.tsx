import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { defaultData } from "@/lib/site-content";
import { ProjectView } from "@/components/project-view";

// Las fichas se generan en el servidor para que Google lea su contenido
// y cada una tenga su propio título, descripción e imagen al compartir.

export const dynamicParams = false;

function getProject(slug: string) {
  return defaultData.projectPages.find((p) => p.slug === slug && p.published);
}

export function generateStaticParams() {
  return defaultData.projectPages
    .filter((p) => p.published)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: { absolute: project.seoTitle },
    description: project.metaDescription,
    alternates: { canonical: `/proyectos/${project.slug}` },
    openGraph: {
      title: project.seoTitle,
      description: project.metaDescription,
      url: `/proyectos/${project.slug}`,
      images: [{ url: project.heroImage }],
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectView project={project} />;
}
