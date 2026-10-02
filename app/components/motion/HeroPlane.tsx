"use client";

import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { SETTLE, useScrollMotion } from "./ScrollMotion";

export function HeroPlane({ children, className, plane }: { children: ReactNode; className: string; plane: "copy" | "meter" }) {
  const ref = useRef<HTMLDivElement>(null);
  const { enabled, wide } = useScrollMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const progress = useSpring(scrollYProgress, SETTLE);
  const y = useTransform(progress, [0, 1], [0, wide ? (plane === "copy" ? 100 : -64) : (plane === "copy" ? 16 : -18)]);
  const x = useTransform(progress, [0, 1], [0, plane === "copy" ? -28 : 24]);

  return (
    <div ref={ref} className={className}>
      <m.div className="motion-plane" style={{ y: enabled ? y : 0, x: enabled && wide ? x : 0 }}>
        {children}
      </m.div>
    </div>
  );
}
