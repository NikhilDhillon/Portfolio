import Image from "next/image";
import type { Project } from "../data/portfolio";
import { Arrow } from "./Arrow";
import { MediaMotion } from "./motion/MediaMotion";

export function StackList({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.8125rem] leading-6 text-ink-muted">
      {items.map((item) => <li key={item} translate="no">{item}</li>)}
    </ul>
  );
}

export function ProjectLinks({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <>
      {project.links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={compact && link.label !== "Live app" ? "inline-flex min-h-11 items-center gap-2 px-2 text-sm" : `btn ${link.label === "Live app" ? "btn-primary" : "btn-secondary"}`}>
          <span className={compact && link.label !== "Live app" ? "link" : undefined}>{link.label}</span>
          <Arrow dir="ne" />
          <span className="sr-only"> for {project.name} (opens in a new tab)</span>
        </a>
      ))}
    </>
  );
}

export function ProjectFigure({ project, preview = false }: { project: Project; preview?: boolean }) {
  const { image } = project;
  if (!image) return null;
  return (
    <MediaMotion>
      <figure>
        <div className={`frame overflow-hidden ${preview ? "relative aspect-[16/10]" : ""}`}>
          {preview ? (
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1320px) 696px, (min-width: 1024px) 55vw, calc(100vw - 2rem)" className="object-cover object-left-top" />
          ) : (
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(min-width: 1320px) 1000px, (min-width: 1024px) 80vw, calc(100vw - 2rem)" className="h-auto w-full" />
          )}
        </div>
        <figcaption className="label mt-3">
          <span className={image.evidence === "Design concept" ? "text-signal-ink" : "text-ink"}>{image.evidence}</span>
          <span aria-hidden="true"> / </span><span className="sr-only">: </span>{image.caption}
        </figcaption>
      </figure>
    </MediaMotion>
  );
}
