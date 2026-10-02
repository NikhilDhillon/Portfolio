"use client";

import { animate, m, useMotionValue } from "framer-motion";
import { createContext, useCallback, useContext, useEffect, useId, useLayoutEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { useScrollMotion } from "./motion/ScrollMotion";

const EASE = [0.16, 1, 0.3, 1] as const;
const CLOSE_EASE = [0.4, 0, 0.2, 1] as const;
const DisclosureMotion = createContext({ ready: false, expanded: true, enabled: false });

export function AnimatedDisclosure({ label, children }: { label: string; children: ReactNode }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const height = useMotionValue<number | string>(0);
  const expandedRef = useRef(false);
  const collapseScrollRef = useRef<{ height: number; from: number; to: number } | null>(null);
  const scrollStylesRef = useRef<{ anchor: string; behavior: string } | null>(null);
  const panelId = useId();
  const { enabled } = useScrollMotion();
  const [ready, setReady] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [present, setPresent] = useState(false);

  const releaseScroll = useCallback(() => {
    collapseScrollRef.current = null;
    const previous = scrollStylesRef.current;
    if (!previous) return;
    document.documentElement.style.overflowAnchor = previous.anchor;
    document.documentElement.style.scrollBehavior = previous.behavior;
    scrollStylesRef.current = null;
  }, []);

  useEffect(() => {
    // A new scroll gesture takes over immediately. These passive listeners
    // never intercept the visitor's normal scrolling.
    const cancel = releaseScroll;
    const cancelKey = (event: KeyboardEvent) => {
      if (event.key === "Enter" && event.target === detailsRef.current?.querySelector("summary")) return;
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " ", "Tab", "Enter", "Escape"].includes(event.key)) cancel();
    };
    window.addEventListener("pointerdown", cancel, { passive: true });
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchmove", cancel, { passive: true });
    window.addEventListener("keydown", cancelKey);
    return () => {
      window.removeEventListener("pointerdown", cancel);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchmove", cancel);
      window.removeEventListener("keydown", cancelKey);
      releaseScroll();
    };
  }, [releaseScroll]);

  useEffect(() => {
    // Preserve a native toggle made before hydration. Without JavaScript the
    // server's plain details/summary and unstyled panel work normally.
    const open = detailsRef.current?.open ?? false;
    expandedRef.current = open;
    setExpanded(open);
    setPresent(open);
    setReady(true);
  }, []);

  const toggle = (event: MouseEvent<HTMLElement>) => {
    if (!ready) return;
    event.preventDefault();
    const next = !expandedRef.current;
    collapseScrollRef.current = null;
    expandedRef.current = next;
    if (next) setPresent(true);
    if (!next && panelRef.current?.contains(document.activeElement)) {
      event.currentTarget.focus({ preventScroll: true });
    }
    setExpanded(next);
  };

  useLayoutEffect(() => {
    if (!ready || !panelRef.current || !contentRef.current) return;
    const currentHeight = panelRef.current.getBoundingClientRect().height;
    const targetHeight = expanded ? contentRef.current.getBoundingClientRect().height : 0;
    const root = document.documentElement;
    collapseScrollRef.current = null;

    if (!expanded && enabled && currentHeight > 0) {
      const finalScrollLimit = Math.max(0, root.scrollHeight - currentHeight - window.innerHeight);
      // The final document may be too short to hold this scroll position.
      // Move with the panel's height curve, before native bottom clamping can
      // start. Disable scroll anchoring and smooth-scroll competition briefly.
      collapseScrollRef.current = { height: currentHeight, from: window.scrollY, to: Math.min(window.scrollY, finalScrollLimit) };
      if (!scrollStylesRef.current) {
        scrollStylesRef.current = { anchor: root.style.overflowAnchor, behavior: root.style.scrollBehavior };
      }
      root.style.overflowAnchor = "none";
      root.style.scrollBehavior = "auto";
    }

    // Numeric keyframes avoid the auto-height resolver's temporary zero-height
    // layout measurement, which can clamp a scrolled document before it plays.
    height.set(currentHeight);
    const animation = animate(height, targetHeight, {
      duration: enabled ? (expanded ? 0.5 : 0.4) : 0,
      ease: expanded ? EASE : CLOSE_EASE,
      onUpdate: (value) => {
        const scroll = collapseScrollRef.current;
        if (!scroll || expandedRef.current || scroll.from === scroll.to || typeof value !== "number") return;
        const remaining = Math.max(0, Math.min(1, value / scroll.height));
        window.scrollTo({ top: scroll.to + (scroll.from - scroll.to) * remaining, behavior: "instant" });
      },
      onComplete: () => {
        releaseScroll();
        // Latest intent wins if a closing animation is reversed.
        if (expandedRef.current) height.set("auto");
        else setPresent(false);
      },
    });
    return () => animation.stop();
  }, [ready, expanded, enabled, height, releaseScroll]);

  return (
    <details ref={detailsRef} open={present} data-expanded={ready ? expanded : undefined} className="toolbox-disclosure mt-7 border-t border-hairline/25">
      <summary aria-expanded={ready ? expanded : undefined} aria-controls={panelId} onClick={toggle} className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-medium">
        <span>{label}</span>
        <span className="details-indicator font-mono text-xl text-signal-ink" aria-hidden="true">+</span>
      </summary>
      <DisclosureMotion.Provider value={{ ready, expanded, enabled }}>
        {/* Hydration supplies a starting height for the first open. The server
            stays unstyled so the native disclosure works without JavaScript. */}
        <m.div
          ref={panelRef}
          id={panelId}
          className="disclosure-panel overflow-hidden"
          initial={false}
          style={{ height: ready ? height : undefined }}
          aria-hidden={ready && !expanded ? true : undefined}
          inert={ready && !expanded ? true : undefined}
        >
          <div ref={contentRef} className="flow-root">{children}</div>
        </m.div>
      </DisclosureMotion.Provider>
    </details>
  );
}

export function DisclosureRow({ children, className, index }: { children: ReactNode; className: string; index: number }) {
  const { ready, expanded, enabled } = useContext(DisclosureMotion);
  return (
    <m.div
      className={className}
      initial={false}
      style={{ opacity: ready ? 0 : undefined, y: ready && enabled ? 10 : undefined }}
      animate={ready ? { opacity: expanded ? 1 : 0, y: enabled && !expanded ? 10 : 0 } : undefined}
      transition={{
        duration: enabled ? (expanded ? 0.36 : 0.16) : 0,
        delay: enabled && expanded ? Math.min(index * 0.045, 0.18) : 0,
        ease: EASE,
      }}
    >
      {children}
    </m.div>
  );
}
