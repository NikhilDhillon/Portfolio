"use client";

import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type RefObject } from "react";
import { SETTLE, useScrollMotion } from "./ScrollMotion";

type HeadingProps = { as?: "h2" | "h3"; id?: string; className?: string; translate?: "no"; children: ReactNode };

// A clear typographic entrance: full contrast throughout, settled by the
// reading position. No mask makes visibility depend on continued scrolling.
export function MaskHeading({ as = "h2", className = "", ...props }: HeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const { enabled, wide } = useScrollMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 65%"] });
  const progress = useSpring(scrollYProgress, SETTLE);
  // Stay within the following text's gap, including small-screen wrap layouts.
  const y = useTransform(progress, [0, 1], [wide ? 18 : 12, 0]);
  const x = useTransform(progress, [0, 1], [wide ? -20 : 0, 0]);
  const style = { y: enabled ? y : 0, x: enabled ? x : 0 };

  return as === "h3"
    ? <m.h3 ref={ref as RefObject<HTMLHeadingElement>} {...props} className={`scroll-heading ${className}`} style={style} />
    : <m.h2 ref={ref as RefObject<HTMLHeadingElement>} {...props} className={`scroll-heading ${className}`} style={style} />;
}
