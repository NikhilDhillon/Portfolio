import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { projects, type Project, type ProjectFormula } from "../data/portfolio";
import { Arrow } from "./Arrow";
import { ProjectFigure, ProjectLinks, StackList } from "./ProjectEvidence";
import { ReturnlyWorkflow } from "./ReturnlyWorkflow";

function FormulaPanel({ formula }: { formula: ProjectFormula }) {
  const terms = formula.terms.map((term) => term.name);
  const parts = formula.expression.split(new RegExp(`(${terms.join("|")})`));
  return (
    <section aria-labelledby="formula-title" className="frame mt-10 p-5 sm:p-8">
      <h2 id="formula-title" className="type-title text-2xl">How a session is scored</h2>
      <p className="mt-3 max-w-[65ch] text-ink-muted">The score compares a session with the previous best-strength session. Combining three signals makes the comparison account for more than the heaviest set alone.</p>
      <p className="readout mt-6 text-[clamp(1rem,0.75rem+1.3vw,1.875rem)] leading-relaxed [overflow-wrap:anywhere]">
        <span className="label block mb-2">{formula.label} =</span>
        {parts.map((part, index) => terms.includes(part) ? <span key={index} className="text-signal-ink">{part}</span> : <Fragment key={index}>{part}</Fragment>)}
      </p>
      <dl className="mt-7 grid gap-6 sm:grid-cols-3">
        {formula.terms.map((term) => (
          <div key={term.name} className="border-t border-hairline/20 pt-4">
            <dt className="readout text-signal-ink">{term.name} <span className="text-ink-muted">{term.weight}%</span></dt>
            <dd className="mt-2 text-sm text-ink-muted">{term.meaning}</dd>
          </div>
        ))}
      </dl>
      <p className="label mt-6">{formula.footnote}</p>
    </section>
  );
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  const next = projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length];
  return (
    <div className="shell py-10 lg:py-16">
      <div className="mx-auto max-w-[62.5rem]">
        <Link href="/#work" className="inline-flex min-h-11 items-center gap-2 text-sm"><Arrow dir="n" /><span className="link">Back to selected work</span></Link>
        <header className="mt-8 border-t border-ink pt-6">
          <p className="label">{project.kind} / {project.context}</p>
          <h1 className="type-display mt-4 text-[clamp(3rem,1.75rem+5vw,6rem)]" translate="no">{project.name}</h1>
          <p className="mt-6 max-w-[40ch] text-[clamp(1.25rem,1rem+0.8vw,1.75rem)] leading-snug">{project.summary}</p>
          <div className="mt-6"><StackList items={project.stack} label={`${project.name} stack`} /></div>
          <div className="mt-6 flex flex-wrap items-center gap-3"><ProjectLinks project={project} />{project.status ? <p className="label">{project.status}</p> : null}</div>
          {project.sourceNote ? <p className="mt-4 max-w-[65ch] text-sm leading-relaxed text-ink-muted">{project.sourceNote}</p> : null}
        </header>

        <div className="mt-10">
          {project.slug === "returnly" ? <ReturnlyWorkflow /> : <ProjectFigure project={project} />}
        </div>
        <div className="mt-10 grid gap-8 border-t border-hairline/25 pt-8 lg:grid-cols-12 lg:gap-12">
          <section aria-labelledby="problem-title" className="lg:col-span-5">
            <h2 id="problem-title" className="type-title text-2xl">{project.problemLabel ?? "The problem"}</h2>
            <p className="mt-4 leading-relaxed">{project.problem}</p>
          </section>
          <section aria-labelledby="scope-title" className="lg:col-span-7">
            <h2 id="scope-title" className="type-title text-2xl">{project.scopeLabel ?? "What I built"}</h2>
            <ul className="mt-4 list-[square] space-y-3 pl-4 leading-relaxed marker:text-signal-ink">{project.built.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </div>
        {project.note ? (
          <section aria-labelledby="decision-title" className="mt-10 border-l-2 border-signal pl-5 sm:pl-7">
            <h2 id="decision-title" className="type-title text-2xl">{project.note.label}</h2>
            <p className="mt-4 max-w-[70ch] text-lg leading-relaxed">{project.note.text}</p>
          </section>
        ) : null}
        {project.formula ? <FormulaPanel formula={project.formula} /> : null}
        {project.outcome ? (
          <section aria-labelledby="outcome-title" className="mt-10 border-t border-hairline/25 pt-7">
            <h2 id="outcome-title" className="type-title text-2xl">{project.slug === "donext" ? "Working product" : "Result"}</h2>
            <p className="mt-4 max-w-[70ch] text-lg leading-relaxed">{project.outcome}</p>
          </section>
        ) : null}
        {project.slug === "donext" ? (
          <section aria-labelledby="mobile-title" className="mt-10 grid items-start gap-8 sm:grid-cols-2">
            <div>
              <h2 id="mobile-title" className="type-title text-2xl">The same plan, a smaller screen</h2>
              <p className="mt-4 max-w-[40ch] text-ink-muted">On mobile, the weekly calendar becomes a day-by-day agenda. Classes, study blocks, and personal commitments stay together.</p>
            </div>
            <figure className="max-w-[20rem]">
              <Image src="/work/donext-week-mobile.jpg" alt="DoNext mobile agenda with a week selector and the selected day's classes and study sessions." width={390} height={1124} sizes="(min-width: 640px) 320px, calc(100vw - 2rem)" className="frame h-auto w-full" />
              <figcaption className="label mt-3">Product screenshot / Mobile agenda, demo account</figcaption>
            </figure>
          </section>
        ) : null}
        <nav aria-label="Case study navigation" className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-ink pt-6">
          <Link href="/#work" className="inline-flex min-h-11 items-center gap-2"><span className="link">All selected work</span><Arrow dir="n" /></Link>
          <Link href={`/work/${next.slug}`} className="inline-flex min-h-11 items-center gap-2"><span className="link">Next: {next.name}</span><Arrow dir="e" /></Link>
        </nav>
      </div>
    </div>
  );
}
