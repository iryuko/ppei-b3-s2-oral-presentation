import { FixedInstitutionLinks } from "./components/FixedInstitutionLinks";
import { FloatingNavigation } from "./components/FloatingNavigation";
import { DatabaseInteractomeSection } from "./sections/DatabaseInteractomeSection";
import { GanttSection } from "./sections/GanttSection";
import { HeroSection } from "./sections/HeroSection";
import { ProofSection } from "./sections/ProofSection";
import { SummaryAdviceSection } from "./sections/SummaryAdviceSection";
import { TeamSection } from "./sections/TeamSection";
import { institutions, navItems } from "./data/siteData";

export default function App() {
  return (
    <>
      <FixedInstitutionLinks institutions={institutions} />
      <FloatingNavigation items={navItems} />
      <main>
        <HeroSection />
        <TeamSection />
        <GanttSection />
        <DatabaseInteractomeSection />
        <SummaryAdviceSection />
        <ProofSection />
      </main>
      <footer className="site-footer">
        PPEI_B3_S2 / Team B / Group 4 / Final Oral Presentation
      </footer>
    </>
  );
}

