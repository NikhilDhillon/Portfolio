"use client";

import { useEffect, useState, type AnimationEvent, type CSSProperties } from "react";
import { Arrow } from "./Arrow";

// Résumé measurement: 8,000+ graphics objects fell to about 2,000.
// Every cell represents 100 objects; the figures remain visible in both views.
const CELLS = 80;
const KEPT = 20;
type View = "before" | "after";

export function HandleMeter() {
  const [view, setView] = useState<View>("after");
  const [intro, setIntro] = useState(true);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stopIfReduced = () => {
      if (reduced.matches) setIntro(false);
    };
    stopIfReduced();
    reduced.addEventListener("change", stopIfReduced);
    return () => reduced.removeEventListener("change", stopIfReduced);
  }, []);

  const finishIntro = (event: AnimationEvent<HTMLElement>) => {
    // Cell 20 is the last of the 60 removed cells to finish its entrance.
    if (event.animationName === "meter-clear" && event.target instanceof HTMLElement && event.target.dataset.introLast === "true") {
      setIntro(false);
    }
  };
  const show = (next: View) => {
    // User input takes over immediately; no delayed callback changes the view.
    setIntro(false);
    setView(next);
    setAnnouncement(next === "before" ? "Before the fix: more than 8,000 graphics objects." : "After the fix: about 2,000 graphics objects.");
  };
  return (
    <figure className="meter frame p-5 sm:p-7" data-view={view} data-intro={intro ? "playing" : "done"} onAnimationEnd={finishIntro}>
      <p className="label">Reliable Controls / 2026 internship</p>
      <p className="type-title mt-3 text-[clamp(1.375rem,1.1rem+1vw,1.75rem)]">Fixed a Windows resource leak.</p>
      <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <p className="readout text-[clamp(2.5rem,1.7rem+2.5vw,3.75rem)] leading-none text-signal-ink">−75%</p>
        <p className="text-sm text-ink-muted">graphics objects in one workflow</p>
      </div>
      <p className="readout mt-4 text-xl">8,000+ <Arrow dir="e" className="text-ink-muted" /><span className="sr-only"> to </span> ~2,000</p>
      <div className="meter-grid mt-5" aria-hidden="true">
        {Array.from({ length: CELLS }, (_, index) => (
          <span
            key={index}
            className="meter-cell"
            data-kept={index < KEPT ? "true" : "false"}
            data-intro-last={index === KEPT ? "true" : undefined}
            style={{
              "--delay": `${view === "before" ? index * 3 : (CELLS - index) * 4}ms`,
              "--intro-delay": `${320 + (CELLS - 1 - index) * 18}ms`,
            } as CSSProperties}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <figcaption className="label max-w-[29ch]">C++ / MFC. One cell is 100 Windows graphics (GDI) objects.</figcaption>
        <div role="group" aria-label="Show graphics objects" className="meter-controls flex border border-ink">
          {(["before", "after"] as const).map((value) => <button key={value} type="button" aria-pressed={view === value} onClick={() => show(value)} className="seg-btn">{value === "before" ? "Before" : "After"}</button>)}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">{announcement}</p>
    </figure>
  );
}
