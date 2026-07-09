type FinalCtaSectionProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  eyebrow?: string;
  id?: string;
};

export function FinalCtaSection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  eyebrow = "Let's Talk",
  id = "book",
}: FinalCtaSectionProps) {
  return (
    <section className="final-cta" id={id}>
      <div className="final-cta__inner">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="final-cta__actions hero__ctas">
          <a href={primaryHref} className="btn btn-primary">
            {primaryLabel}
          </a>
          <a href={secondaryHref} className="btn btn-outline-light">
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}