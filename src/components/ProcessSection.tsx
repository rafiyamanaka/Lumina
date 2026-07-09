"use client";
import { InteractiveStepsSection } from "@/components/solutions/InteractiveStepsSection";
import { processSteps } from "@/data/site-data";

const processImage = "https://images.unsplash.com/photo-1646617747563-4f080bddf282?q=80&w=1200&auto=format&fit=crop";

export function ProcessSection() {
  return (
    <InteractiveStepsSection
      eyebrow="How We Work"
      title="A focused process designed to turn uncertainty into progress."
      steps={processSteps}
      imageSrc={processImage}
      imageAlt="Tim Lumina Growth memetakan diagram strategi di atas kertas"
    />
  );
}