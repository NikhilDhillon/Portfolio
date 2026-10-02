"use client";

import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { SETTLE, useScrollMotion } from "./ScrollMotion";
import { useProjectProgress } from "./ProjectScene";

// Move the entire figure, including its caption. The screenshot itself is never
// cropped further or faded, and its final reading scale is 1.
export function MediaMotion({ children, zoom = true }: { children: ReactNode; zoom?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { enabled, wide } = useScrollMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const localProgress = useSpring(scrollYProgress, SETTLE);
  // A pinned figure follows its stable article, rather than measuring its own
  // changing sticky position. Standalone case-study figures follow themselves.
  const progress = useProjectProgress() ?? localProgress;
  const y = useTransform(progress, [0, 1], wide ? [48, -40] : [20, -16]);
  const scale = useTransform(progress, [0, 0.4, 1], [0.94, 1, 1]);

  return (
    <div ref={ref}>
      <m.div className="motion-plane" style={{ y: enabled ? y : 0, scale: enabled && wide && zoom ? scale : 1 }}>
        {children}
      </m.div>
    </div>
  );
}
