import { SkillsSection } from "./SkillsSection";
import { AnimatedDisclosure } from "./AnimatedDisclosure";
import { MaskHeading } from "./motion/MaskHeading";
import { Reveal } from "./motion/Reveal";

export function AboutSection() {
  return (
    <section id="about" tabIndex={-1} aria-labelledby="about-title" className="shell grid gap-8 border-t border-hairline/25 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20">
      <div className="lg:col-span-4"><p className="label mb-3">Behind the work</p><MaskHeading id="about-title" className="type-heading">About</MaskHeading></div>
      <div className="lg:col-span-8">
        <Reveal>
          <p className="max-w-[45ch] text-[clamp(1.25rem,1.1rem+0.6vw,1.625rem)] leading-[1.4]">My projects turn planning and performance data into useful decisions: what to work on next, whether training is paying off, and where a return pickup stands.</p>
          <p className="mt-5 max-w-[65ch] text-lg leading-relaxed text-ink-muted">That work spans the interface and the systems underneath it. A clear screen matters, and so do the scheduling rules, data model, and live updates that make it dependable.</p>
        </Reveal>
        <AnimatedDisclosure label="Explore my toolbox">
          <SkillsSection />
        </AnimatedDisclosure>
      </div>
    </section>
  );
}
