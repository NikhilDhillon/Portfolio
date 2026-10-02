"use client";

import { m, useScroll, useSpring, type MotionValue } from "framer-motion";
import { createContext, useContext, useRef, type ReactNode } from "react";
import { SETTLE, useScrollMotion } from "./ScrollMotion";

const ProjectProgressContext = createContext<MotionValue<number> | null>(null);
export const useProjectProgress = () => useContext(ProjectProgressContext);

export function ProjectScene({ children, id, titleId }: { children: ReactNode; id: string; titleId: string }) {
  const ref = useRef<HTMLElement>(null);
  const { enabled } = useScrollMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 35%"] });
  const progress = useSpring(scrollYProgress, SETTLE);

  return (
    <ProjectProgressContext.Provider value={progress}>
      <article ref={ref} id={id} aria-labelledby={titleId} className="project-scene relative grid gap-7 border-t border-ink py-8 lg:grid-cols-12 lg:gap-12 lg:py-10">
        <m.span aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-px h-0.5 origin-left bg-signal" style={{ scaleX: enabled ? progress : 0 }} />
        {children}
      </article>
    </ProjectProgressContext.Provider>
  );
}
