import { AboutSection } from "@/components/AboutSection";
import { CasesSection } from "@/components/CasesSection";
import { Footer } from "@/components/Footer";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { HeroSection } from "@/components/HeroSection";
import { InsightsSection } from "@/components/InsightsSection";
import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";
import { ProcessSection } from "@/components/ProcessSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SolutionsSection } from "@/components/SolutionsSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { TrustSection } from "@/components/TrustSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <Marquee />
        <AboutSection />
        <SolutionsSection />
        <ProcessSection />
        <ProgramsSection />
        <CasesSection />
        <TestimonialSection />
        <InsightsSection />
        <ResourcesSection />
        <FinalCtaSection
          title="Ready to grow with clarity?"
          description="Let's turn your idea, product, or business challenge into a focused growth plan."
          primaryHref="#"
          primaryLabel="Book a Call"
          secondaryHref="#programs"
          secondaryLabel="View Programs"
        />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}