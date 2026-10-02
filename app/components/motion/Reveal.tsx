"use client";

import { m, useInView } from "framer-motion";
import { useRef, type ReactNode, type RefObject } from "react";
import { useScrollMotion } from "./ScrollMotion";

type RevealProps = { as?: "div" | "li"; className?: string; children: ReactNode; distance?: number; delay?: number };

// A staged entrance. Text keeps its full contrast and settles before reading.
export function Reveal({ as = "div", className = "", children, distance = 28, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: "some" });
  const { enabled } = useScrollMotion();
  const animation = { y: enabled && !inView ? Math.min(distance, 40) : 0 };
  const transition = { duration: enabled ? 0.75 : 0, delay: enabled && inView ? delay : 0, ease: [0.16, 1, 0.3, 1] as const };
  if (as === "li") return <m.li ref={ref as RefObject<HTMLLIElement>} className={`reveal ${className}`} initial={false} animate={animation} transition={transition}>{children}</m.li>;
  return <m.div ref={ref as RefObject<HTMLDivElement>} className={`reveal ${className}`} initial={false} animate={animation} transition={transition}>{children}</m.div>;
}
