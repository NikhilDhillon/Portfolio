import Link from "next/link";
import { profile, projects } from "../data/portfolio";
import { Arrow } from "./Arrow";
import { ProjectFigure, ProjectLinks, StackList } from "./ProjectEvidence";
import { ReturnlyWorkflow } from "./ReturnlyWorkflow";
import { MaskHeading } from "./motion/MaskHeading";
import { ProjectScene } from "./motion/ProjectScene";

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);
  const wearlyze = projects.find((project) => project.slug === "wearlyze")!;

  return (
    <section id="work" tabIndex={-1} aria-labelledby="work-title" className="shell py-14 lg:py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="label mb-3">Products & engineering</p>
          <MaskHeading id="work-title" className="type-heading">Selected work</MaskHeading>
        </div>
        <p className="max-w-[35ch] text-ink-muted">Planning a semester, measuring progress, and keeping a pickup in sync.</p>
      </div>
      <div className="mt-10 lg:mt-12">
        {featured.map((project, index) => (
          <ProjectScene key={project.slug} id={project.slug} titleId={`${project.slug}-title`}>
            <div className="project-copy flex flex-col items-start lg:col-span-5">
              <p className="label">0{index + 1} / {project.kind}</p>
              <h3 id={`${project.slug}-title`} className="type-title mt-3 text-[clamp(2rem,1.4rem+2vw,3rem)]">
                <Link href={`/work/${project.slug}`} className="hover:text-signal-ink" translate="no">{project.name}</Link>
              </h3>
              <p className="mt-4 max-w-[36ch] text-xl leading-snug">{project.summary}</p>
              <p className="mt-4 max-w-[45ch] text-ink-muted">{project.highlight}</p>
              <p className="label mt-4">{project.context}</p>
              <div className="mt-5"><StackList items={project.stack} label={`${project.name} stack`} /></div>
              <div className="mt-7 flex flex-wrap items-center gap-3 lg:mt-auto lg:pt-7">
                <Link href={`/work/${project.slug}`} className="btn btn-secondary">Case study <Arrow dir="e" /><span className="sr-only"> for {project.name}</span></Link>
                <ProjectLinks project={project} compact />
              </div>
            </div>
            <div className="project-visual min-w-0 lg:col-span-7">
              {project.slug === "returnly" ? <ReturnlyWorkflow compact /> : <ProjectFigure project={project} preview />}
            </div>
          </ProjectScene>
        ))}
      </div>
      <div className="grid gap-6 border-t border-hairline/30 py-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="label mb-2">Also explored</p>
          <Link href={`/work/${wearlyze.slug}`} className="group inline-flex min-h-11 items-center gap-3 font-semibold"><span className="link">Wearlyze / computer vision</span><Arrow dir="e" /></Link>
          <p className="mt-1 text-sm text-ink-muted">Garment segmentation and visual product matching.</p>
        </div>
        <div className="lg:col-span-7">
          <p className="label mb-2">More on GitHub</p>
          <a href="https://github.com/NikhilDhillon/SpendLens" target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-11 items-center gap-3 font-semibold"><span className="link">SpendLens / spending analysis</span><Arrow dir="ne" /><span className="sr-only">(opens in a new tab)</span></a>
          <p className="mt-1 text-sm text-ink-muted">Connected financial data and a read-only AI assistant.</p>
          <a href={profile.githubRepos} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm"><span className="link">All repositories</span><Arrow dir="ne" /><span className="sr-only">(opens in a new tab)</span></a>
        </div>
      </div>
    </section>
  );
}
