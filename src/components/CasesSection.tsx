import { cases } from "@/data/site-data";

import { SectionHeading } from "@/components/SectionHeading";

export function CasesSection() {
  return (
    <section className="cases">
      <div className="cases__inner">
        <SectionHeading eyebrow="Case Studies" title="Real growth stories from ambitious teams." />

        <div className="case-list">
          {cases.map((item) => (
            <article className="case reveal" key={item.title}>
              <div className="case__thumb" style={{ background: `linear-gradient(135deg, ${item.accentFrom}, ${item.accentTo})` }} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span className="case__result">{item.result}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}