"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { m, useScroll, useSpring } from "framer-motion";
import { navLinks, profile } from "../data/portfolio";
import { Arrow } from "./Arrow";
import { SETTLE, useScrollMotion } from "./motion/ScrollMotion";

type SectionId = (typeof navLinks)[number]["id"];

function useActiveSection() {
  const [active, setActive] = useState<SectionId | null>(null);
  const selectedRef = useRef<SectionId | "top" | null>(null);
  const selectSection = useCallback((id: SectionId | "top") => {
    selectedRef.current = id;
    setActive(id === "top" ? null : id);
  }, []);

  useEffect(() => {
    const targets = ["top", ...navLinks.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    let frame: number | null = null;
    const updateActive = () => {
      frame = null;
      // Anchor navigation expresses intent even when adjacent sections share
      // the same clamped scroll position. Manual scrolling releases it below.
      if (selectedRef.current !== null) {
        setActive(selectedRef.current === "top" ? null : selectedRef.current);
        return;
      }
      const last = targets[targets.length - 1];
      // The last section may never reach the activation band on a tall
      // viewport. At the bottom of the page, make that visible section current.
      const atBottom = window.scrollY > 0 &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      const current = atBottom && last && last.getBoundingClientRect().top < window.innerHeight
        ? last
        : targets.find((target) => {
            const bounds = target.getBoundingClientRect();
            const activationY = window.innerHeight * 0.4;
            return bounds.top <= activationY && bounds.bottom > activationY;
          });
      setActive(current && current.id !== "top" ? (current.id as SectionId) : null);
    };
    const scheduleUpdate = () => {
      if (frame === null) frame = requestAnimationFrame(updateActive);
    };
    const resumeScrollTracking = () => {
      selectedRef.current = null;
      scheduleUpdate();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) {
        resumeScrollTracking();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.clientX >= document.documentElement.clientWidth) resumeScrollTracking();
    };
    const onHashChange = () => {
      const target = targets.find((target) => `#${target.id}` === window.location.hash);
      if (target) selectSection(target.id as SectionId | "top");
      else resumeScrollTracking();
    };
    const observer = new IntersectionObserver(scheduleUpdate, {
      rootMargin: "-40% 0px -55% 0px",
    });

    targets.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("wheel", resumeScrollTracking, { passive: true });
    window.addEventListener("touchmove", resumeScrollTracking, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("hashchange", onHashChange);
    onHashChange();
    scheduleUpdate();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("wheel", resumeScrollTracking);
      window.removeEventListener("touchmove", resumeScrollTracking);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("hashchange", onHashChange);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [selectSection]);

  return { active, selectSection };
}

// Page progress, drawn along the header's bottom edge. With reduced motion it
// tracks scroll directly instead of through the spring.
function ScrollProgress() {
  const { enabled } = useScrollMotion();
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, SETTLE);
  return (
    <m.span
      aria-hidden="true"
      className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-signal"
      style={{ scaleX: enabled ? smoothed : scrollYProgress }}
    />
  );
}

export function SiteHeader({ home = true }: { home?: boolean }) {
  const { active, selectSection } = useActiveSection();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const destinationRef = useRef<string | null>(null);
  const menuScrollRef = useRef({ left: 0, top: 0 });
  const sectionHref = (id: string) => `${home ? "" : "/"}#${id}`;

  const openMenu = () => {
    destinationRef.current = null;
    menuScrollRef.current = { left: window.scrollX, top: window.scrollY };
    dialogRef.current?.showModal();
    // Native dialog autofocus can move the document beneath the top layer.
    window.scrollTo({ ...menuScrollRef.current, behavior: "instant" });
    setMenuOpen(true);
  };

  const closeMenu = () => {
    destinationRef.current = null;
    dialogRef.current?.close();
  };

  const navigateFromMenu = (event: MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    // Closing the dialog restores the page's scroll container. Navigate only
    // after that close, so native focus restoration cannot undo the jump.
    if (!home) {
      destinationRef.current = null;
      dialogRef.current?.close();
      return;
    }
    event.preventDefault();
    selectSection(id);
    destinationRef.current = id;
    dialogRef.current?.close();
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      setMenuOpen(false);
      const destination = destinationRef.current;
      destinationRef.current = null;
      if (!destination) {
        menuButtonRef.current?.focus({ preventScroll: true });
        requestAnimationFrame(() => {
          window.scrollTo({ ...menuScrollRef.current, behavior: "instant" });
        });
        return;
      }
      requestAnimationFrame(() => {
        const section = document.getElementById(destination);
        if (!section) return;
        section.focus({ preventScroll: true });
        if (window.location.hash !== `#${destination}`) history.pushState(null, "", `#${destination}`);
        section.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
      });
    };
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  // The menu is only reachable below the md breakpoint; close it if the
  // viewport grows past that while it is open.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (query.matches) dialogRef.current?.close();
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-[var(--z-header)] border-b border-hairline/[0.12] bg-canvas/90 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a
          href={sectionHref("top")}
          onClick={() => { if (home) selectSection("top"); }}
          className="-my-2 flex min-h-11 items-center gap-2.5 py-2 text-[0.9375rem] font-semibold tracking-[-0.01em]"
        >
          <span aria-hidden="true" className="size-3 bg-signal" />
          <span translate="no">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={sectionHref(link.id)}
                    onClick={() => { if (home) selectSection(link.id); }}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative inline-flex h-11 items-center px-3 text-[0.9375rem] transition-colors duration-150 hover:text-ink ${
                      isActive ? "text-ink" : "text-ink-muted"
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 bottom-1.5 h-0.5 bg-signal transition-opacity duration-200 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary hidden min-h-11 sm:inline-flex"
          >
            Resume
            <Arrow dir="ne" />
            <span className="sr-only">(PDF, opens in a new tab)</span>
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="btn btn-secondary min-h-11 md:hidden"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={openMenu}
          >
            Menu
          </button>
        </div>
      </div>
      <ScrollProgress />

      <dialog
        ref={dialogRef}
        id="site-menu"
        aria-label="Site menu"
        className="menu-dialog md:hidden"
      >
        <div className="flex min-h-full flex-col pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <div className="shell flex h-16 items-center justify-between border-b border-hairline/[0.12]">
            <span className="flex items-center gap-2.5 text-[0.9375rem] font-semibold tracking-[-0.01em]">
              <span aria-hidden="true" className="size-3 bg-signal" />
              <span translate="no">{profile.name}</span>
            </span>
            <button type="button" className="btn btn-secondary min-h-11" onClick={closeMenu}>
              Close
            </button>
          </div>

          <nav aria-label="Menu" className="shell pt-6">
            <ul>
              {navLinks.map((link) => (
                <li key={link.id} className="rule first:border-t-0">
                  <a
                    href={sectionHref(link.id)}
                    onClick={(event) => navigateFromMenu(event, link.id)}
                    aria-current={active === link.id ? "true" : undefined}
                    className="type-title flex min-h-16 items-center justify-between text-[2rem]"
                  >
                    {link.label}
                    <Arrow dir="e" className="text-xl text-ink-muted" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="shell mt-auto grid gap-3 pt-10">
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full justify-between"
            >
              Resume
              <Arrow dir="ne" />
              <span className="sr-only">(PDF, opens in a new tab)</span>
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-secondary w-full justify-between">
              <span className="truncate">{profile.email}</span>
              <Arrow dir="e" />
            </a>
          </div>
        </div>
      </dialog>
    </header>
  );
}
