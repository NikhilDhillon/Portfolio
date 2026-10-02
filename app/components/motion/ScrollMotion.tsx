"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { LazyMotion, domMin } from "framer-motion";

type ScrollMotionState = {
  /** Motion is on after hydration unless the visitor prefers reduced motion. */
  enabled: boolean;
  /** Desktop depth has enough horizontal room, even in a short window. */
  wide: boolean;
  /** Pinned scenes need enough width and height to keep their content in view. */
  desktopScene: boolean;
};

const initialState: ScrollMotionState = { enabled: false, wide: false, desktopScene: false };
const ScrollMotionContext = createContext<ScrollMotionState>(initialState);

// The server and the first client render share one static state, so nothing is
// hidden before hydration and the markup never mismatches. Motion is armed
// after mount and switched off again if reduced motion is turned on.
export function ScrollMotionProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ScrollMotionState>(initialState);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    const tall = window.matchMedia("(min-height: 800px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setState({
      enabled: !reduced.matches,
      wide: !reduced.matches && wide.matches,
      desktopScene: !reduced.matches && wide.matches && tall.matches,
    });
    update();
    wide.addEventListener("change", update);
    tall.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      tall.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  // The motion primitives use the lightweight `m` components. LazyMotion with
  // domMin supplies the renderer and animation features, without gestures;
  // `strict` throws if a full `motion` component slips in.
  return (
    <LazyMotion features={domMin} strict>
      <ScrollMotionContext.Provider value={state}>{children}</ScrollMotionContext.Provider>
    </LazyMotion>
  );
}

export const useScrollMotion = () => useContext(ScrollMotionContext);

/**
 * Overdamped spring (damping ratio 2): smooths scroll input like an instrument
 * needle settling, with no overshoot or bounce.
 */
export const SETTLE = { stiffness: 140, damping: 28, mass: 0.35 };
