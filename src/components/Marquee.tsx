import { logos } from "@/data/site-data";

export function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-label">
        <span className="eyebrow">Trusted by growing teams</span>
      </div>
      <div className="marquee" aria-label="Trusted by growing teams">
        {[...logos, ...logos].map((name, index) => (
          <div className="marquee-card" key={`${name}-${index}`}>
            <span className="mark" />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}