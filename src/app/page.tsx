import { AboutSection } from "@/components/AboutSection";
import { CasesSection } from "@/components/CasesSection";
import { Footer } from "@/components/Footer";
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
        <section className="final-cta" id="book">
          <div className="final-cta__inner">
            <span className="eyebrow">Let's Talk</span>
            <h2>Ready to grow with clarity?</h2>
            <p>Let's turn your idea, product, or business challenge into a focused growth plan.</p>
            <div className="final-cta__actions hero__ctas">
              <a href="#" className="btn btn-primary">
                Book a Call
              </a>
              <a href="#programs" className="btn btn-outline-light">
                View Programs
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}