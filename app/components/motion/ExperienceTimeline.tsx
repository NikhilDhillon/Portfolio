"use client";

import { m, useScroll, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { SETTLE, useScrollMotion } from "./ScrollMotion";

export function ExperienceTimeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { enabled } = useScrollMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 65%"] });
  const progress = useSpring(scrollYProgress, SETTLE);

  return (
    <div ref={ref} className="relative lg:col-span-8">
      <span aria-hidden="true" className="absolute bottom-6 left-1 top-7 w-px bg-hairline/20" />
      <m.span aria-hidden="true" className="timeline-progress pointer-events-none absolute bottom-6 left-1 top-7 w-px origin-top bg-signal" style={{ scaleY: enabled ? progress : 1 }} />
      <ol className="pl-7">{children}</ol>
    </div>
  );
}

export function TimelineNode() {
  const ref = useRef<HTMLSpanElement>(null);
  const { enabled } = useScrollMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "start 50%"] });
  const progress = useSpring(scrollYProgress, SETTLE);

  return (
    <span ref={ref} aria-hidden="true" className="absolute -left-7 top-7 size-[9px] border border-ink bg-canvas">
      <m.span className="absolute -inset-px bg-signal" style={{ opacity: enabled ? progress : 1 }} />
    </span>
  );
}
