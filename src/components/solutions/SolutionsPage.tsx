import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { InteractiveStepsSection } from "@/components/solutions/InteractiveStepsSection";
import { FaqAccordion } from "@/components/solutions/FaqAccordion";
import { SolutionsHeroSection } from "@/components/solutions/SolutionsHeroSection";
import { SolutionsPillarsSection } from "@/components/solutions/SolutionsPillarsSection";
import { frameworkSteps, solutionFaqs, solutionsNavLinks } from "@/data/solutions-page";

const frameworkImage =
  "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?q=80&w=1200&auto=format&fit=crop";

export function SolutionsPage() {
  return (
    <>
      <Navbar
        links={solutionsNavLinks}
        logoHref="/"
        ctaHref="/#book"
        ctaLabel="Book a Call"
        currentHref="/solutions"
      />
      <main>
        <SolutionsHeroSection />
        <InteractiveStepsSection
          sectionClassName="process on-dark"
          sectionId="framework"
          eyebrow="Our Framework"
          title="One methodology, applied to every solution."
          lead="Every engagement, whatever the discipline, moves through the same four phases below. It's why our five solutions never feel like five separate vendors — they run on one operating rhythm your team can predict and eventually run without us."
          steps={frameworkSteps}
          imageSrc={frameworkImage}
          imageAlt="Tim Lumina Growth berdiskusi strategi bersama klien di ruang kerja"
        />
        <SolutionsPillarsSection />

        <section className="faq" id="faq">
          <div className="faq__inner">
            <SectionHeading eyebrow="FAQ" title="Questions founders usually ask before starting." />
            <FaqAccordion items={solutionFaqs} />
          </div>
        </section>

        <FinalCtaSection
          title="Ready to choose the right starting point?"
          description="Tell us where growth feels hardest right now, and we'll map which solution — or combination — fits your stage."
          primaryHref="#book"
          primaryLabel="Book a Call"
          secondaryHref="/#programs"
          secondaryLabel="View Programs"
        />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}