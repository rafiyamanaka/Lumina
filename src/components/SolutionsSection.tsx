import { solutions } from "@/data/site-data";

import { IconChip } from "@/components/IconChip";
import { SectionHeading } from "@/components/SectionHeading";

export function SolutionsSection() {
  return (
    <section className="solutions" id="solutions">
      <div className="solutions__inner">
        <SectionHeading
          eyebrow="Solutions"
          title="Integrated growth solutions for every stage of business."
          action={
            <a href="#programs" className="btn btn-outline-dark">
              View Programs
            </a>
          }
        />

        <div className="grid5">
          {solutions.map((solution) => (
            <article className="card reveal" key={solution.title}>
              <IconChip>{solution.icon}</IconChip>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}