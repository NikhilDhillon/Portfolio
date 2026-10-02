import { profile } from "../data/portfolio";
import { CopyEmailButton } from "./CopyEmailButton";
import { Arrow } from "./Arrow";
import { MaskHeading } from "./motion/MaskHeading";
import { Reveal } from "./motion/Reveal";

const channels = [
  { label: "Resume", value: "PDF", href: profile.resumeHref },
  { label: "GitHub", value: "NikhilDhillon", href: profile.github },
  { label: "LinkedIn", value: "Nikhil Dhillon", href: profile.linkedin },
] as const;

export function ContactSection() {
  return (
    <section id="contact" tabIndex={-1} aria-labelledby="contact-title" className="border-t border-ink bg-surface">
      <div className="shell grid gap-10 py-14 lg:grid-cols-12 lg:gap-10 lg:py-16">
        <div className="min-w-0 lg:col-span-7">
          <MaskHeading id="contact-title" className="type-heading">
            Get in touch
          </MaskHeading>
          <Reveal>
            <p className="mt-5 max-w-[46ch] text-lg leading-snug text-ink-muted">
              I’m interested in opportunities to build reliable software, solve meaningful
              technical problems, and learn alongside a strong team.
            </p>
          </Reveal>
          <Reveal distance={40}>
            <a
              href={`mailto:${profile.email}`}
              className="link type-title mt-10 inline-block text-[clamp(1.375rem,0.75rem+2.7vw,3rem)] [overflow-wrap:anywhere]"
            >
              {profile.email}
            </a>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <CopyEmailButton email={profile.email} />
            </div>
          </Reveal>
        </div>

        <dl className="self-end lg:col-span-4 lg:col-start-9">
          {channels.map((channel, index) => (
            <Reveal key={channel.label} distance={24} delay={index * 0.08} className="rule relative grid grid-cols-[6.5rem_1fr] items-center gap-4">
              <dt className="label">{channel.label}</dt>
              <dd>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-12 items-center justify-between gap-3 font-medium after:absolute after:inset-0"
                >
                  <span>
                    <span className="sr-only">{channel.label}: </span>
                    <span className="link">{channel.value}</span>
                  </span>
                  <Arrow dir="ne" className="text-ink-muted group-hover:text-ink" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </dd>
            </Reveal>
          ))}
          <Reveal distance={24} delay={0.24} className="rule grid grid-cols-[6.5rem_1fr] items-center gap-4 border-b border-hairline/[0.16]">
            <dt className="label">Location</dt>
            <dd className="flex min-h-12 items-center font-medium">{profile.location}</dd>
          </Reveal>
        </dl>
      </div>
    </section>
  );
}
