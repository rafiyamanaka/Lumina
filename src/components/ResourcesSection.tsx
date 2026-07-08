import { resources } from "@/data/site-data";

import { SectionHeading } from "@/components/SectionHeading";
import { SvgIcon } from "@/components/SvgIcon";

export function ResourcesSection() {
  return (
    <section className="resources" id="resources">
      <div className="resources__inner">
        <SectionHeading
          eyebrow="Resources"
          title="Practical tools for founders and growing teams."
          action={
            <a href="#" className="btn btn-outline-dark">
              Explore Resources
            </a>
          }
        />

        <div className="grid4">
          {resources.map((resource) => (
            <article className="resource reveal" key={resource.title}>
              <SvgIcon>{resource.icon}</SvgIcon>
              <h4>{resource.title}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}