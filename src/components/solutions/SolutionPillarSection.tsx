import { IconChip } from "@/components/IconChip";
import type { SolutionPillar } from "@/data/solutions-page";

type SolutionPillarSectionProps = {
  pillar: SolutionPillar;
  total: number;
};

export function SolutionPillarSection({ pillar, total }: SolutionPillarSectionProps) {
  return (
    <section className={`pillar ${pillar.bg} ${pillar.reverse ? "pillar--reverse" : ""}`} id={pillar.id}>
      <div className="pillar__inner">
        <div className="pillar__content reveal">
          <div className="pillar__index">
            <IconChip>{pillar.icon}</IconChip>
            <span className="n">
              {pillar.num} / 0{total} — {pillar.tag}
            </span>
          </div>
          <h2>{pillar.title}</h2>
          <p className="pillar__lead">{pillar.lead}</p>

          <div className="approach">
            <span className="block-label">Our Approach</span>
            <div className="approach-grid">
              {pillar.steps.map((step, index) => (
                <div className="approach-step" key={step.title}>
                  <span className="approach-step__num">0{index + 1}</span>
                  <div className="approach-step__title">{step.title}</div>
                  <p className="approach-step__desc">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pillar__visual reveal">
          <div className="dash">
            <div className="dash__top">
              <div>
                <span>{pillar.score.label}</span>
                <div className="dash__score">
                  {pillar.score.value}
                  <span className="dash__score-max">/{pillar.score.max}</span>
                </div>
              </div>
              <span className="dash__badge">{pillar.score.badge}</span>
            </div>
            <div className="dash__rows">
              {pillar.score.rows.map((row) => (
                <div className="dash__row" key={row[0]}>
                  <span>{row[0]}</span>
                  <strong>{row[1]}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="get-card">
            <span className="block-label">What You Get</span>
            <ul className="check-list">
              {pillar.deliverables.map((item) => (
                <li key={item}>
                  <span className="check-list__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="check-list__text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}