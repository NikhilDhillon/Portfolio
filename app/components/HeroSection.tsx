import { profile } from "../data/portfolio";
import { HandleMeter } from "./HandleMeter";
import { Arrow } from "./Arrow";
import { HeroPlane } from "./motion/HeroPlane";

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-title" className="hero-section shell grid gap-8 pb-12 pt-9 sm:pt-12 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-16 lg:pt-16">
      <HeroPlane plane="copy" className="lg:col-span-7">
        <p className="label"><span className="block sm:inline">CS Honours, University of Victoria</span><span aria-hidden="true" className="hidden sm:inline"> · </span><span className="sr-only">. </span><span className="block sm:inline">Graduating April 2027</span></p>
        <h1 id="hero-title" translate="no" className="type-display mt-5 text-[clamp(4rem,1.5rem+9vw,7.5rem)]"><span className="block">Nikhil</span>{" "}<span className="block">Dhillon</span></h1>
        <p className="mt-6 max-w-[36ch] text-[clamp(1.125rem,1rem+0.45vw,1.375rem)] leading-[1.45]">Software developer building reliable systems and practical products, from C++ desktop apps to full-stack web and mobile.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#work" className="btn btn-primary">View work<Arrow dir="s" /></a>
          <a href={profile.resumeHref} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Resume<Arrow dir="ne" /><span className="sr-only">(PDF, opens in a new tab)</span></a>
        </div>
      </HeroPlane>
      <HeroPlane plane="meter" className="w-full max-w-xl lg:col-span-5 lg:max-w-none"><HandleMeter /></HeroPlane>
    </section>
  );
}
