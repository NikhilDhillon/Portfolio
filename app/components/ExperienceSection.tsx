import { experience, profile } from "../data/portfolio";
import { Arrow } from "./Arrow";
import { MaskHeading } from "./motion/MaskHeading";
import { ExperienceTimeline, TimelineNode } from "./motion/ExperienceTimeline";

const monthYear = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
function formatMonth(isoMonth: string) {
  const [year, month] = isoMonth.split("-").map(Number);
  return monthYear.format(new Date(Date.UTC(year, month - 1, 1)));
}

export function ExperienceSection() {
  return (
    <section id="experience" tabIndex={-1} aria-labelledby="experience-title" className="shell grid gap-8 border-t border-hairline/25 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20">
      <div className="experience-heading lg:col-span-4">
        <p className="label mb-3">Software, systems & quality</p>
        <MaskHeading id="experience-title" className="type-heading">Experience</MaskHeading>
        <a href={profile.resumeHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2"><span className="link">Full Resume</span><Arrow dir="ne" /><span className="sr-only">(PDF, opens in a new tab)</span></a>
      </div>
      <ExperienceTimeline>
        {experience.map((role) => (
          <li key={role.id} className="relative grid gap-3 border-t border-ink py-6 sm:grid-cols-[8rem_1fr] sm:gap-6">
            <TimelineNode />
            <p className="label tabular pt-1"><time dateTime={role.start}>{formatMonth(role.start)}</time><span aria-hidden="true"> - </span><span className="sr-only"> to </span><time dateTime={role.end}>{formatMonth(role.end)}</time></p>
            <div className="min-w-0">
              <h3 className="type-title text-xl">{role.title}</h3>
              <p className="mt-2 text-sm text-ink-muted"><span translate="no">{role.org}</span> / {role.location}</p>
              <ul className="mt-4 space-y-2 leading-relaxed">{role.points.slice(0, 2).map((point) => <li key={point}>{point}</li>)}</ul>
            </div>
          </li>
        ))}
      </ExperienceTimeline>
    </section>
  );
}
