import { plans } from "@/data/site-data";

import { IconChip } from "@/components/IconChip";
import { SectionHeading } from "@/components/SectionHeading";

export function ProgramsSection() {
  return (
    <section className="programs" id="programs">
      <div className="programs__inner">
        <SectionHeading
          eyebrow="Programs"
          title="Flexible programs for every growth stage."
          description="Choose a focused program based on where your business is right now."
          align="center"
          dark
        />

        <div className="plans">
          {plans.map((plan) => (
            <article className={`plan ${plan.featured ? "featured" : ""}`} key={plan.name}>
              <IconChip dark>
                <path d="M12 3v18M3 12h18" />
              </IconChip>
              <h3>{plan.name}</h3>
              <p className="desc">{plan.description}</p>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#book" className="btn btn-primary">
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}