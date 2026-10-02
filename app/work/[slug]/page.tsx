import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactSection } from "../../components/ContactSection";
import { ProjectCaseStudy } from "../../components/ProjectCaseStudy";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { ScrollMotionProvider } from "../../components/motion/ScrollMotion";
import { projects } from "../../data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const image = project.image
    ? { url: project.image.src, width: project.image.width, height: project.image.height, alt: project.image.alt }
    : { url: "/Home.jpg", width: 1200, height: 630, alt: "Nikhil Dhillon’s portfolio overview" };
  return {
    title: `${project.name} - Nikhil Dhillon`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: `${project.name} - Nikhil Dhillon`, description: project.summary, url: `/work/${project.slug}`, type: "article", images: [image] },
    twitter: { card: "summary_large_image", title: `${project.name} - Nikhil Dhillon`, description: project.summary, images: [image.url] },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <ScrollMotionProvider>
      <SiteHeader home={false} />
      <main id="main" tabIndex={-1}><ProjectCaseStudy project={project} /><ContactSection /></main>
      <SiteFooter home={false} />
    </ScrollMotionProvider>
  );
}
