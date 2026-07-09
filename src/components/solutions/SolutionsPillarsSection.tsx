import { solutionPillars } from "@/data/solutions-page";

import { SolutionPillarSection } from "@/components/solutions/SolutionPillarSection";

export function SolutionsPillarsSection() {
  return (
    <>
      {solutionPillars.map((pillar) => (
        <SolutionPillarSection key={pillar.id} pillar={pillar} total={solutionPillars.length} />
      ))}
    </>
  );
}