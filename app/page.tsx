import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { ScrollMotionProvider } from "./components/motion/ScrollMotion";
import { profile } from "./data/portfolio";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: "https://portfolio-nikhil-dhillons-projects.vercel.app",
  address: { "@type": "PostalAddress", addressLocality: "Victoria", addressRegion: "BC" },
  affiliation: { "@type": "CollegeOrUniversity", name: "University of Victoria" },
  sameAs: [profile.github, profile.linkedin],
};

export default function WebDeveloperPortfolio() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <ScrollMotionProvider>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
          <AboutSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </ScrollMotionProvider>
    </>
  );
}
