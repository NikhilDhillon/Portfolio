import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
// import { WebCapabilitiesSection } from "./components/WebCapabilitiesSection";
import { ContactSection } from "./components/ContactSection";

export default function WebDeveloperPortfolio() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-white">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <WebCapabilitiesSection /> */}
      <ContactSection />
    </main>
  );
}
