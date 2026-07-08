import { articles } from "@/data/site-data";

import { SectionHeading } from "@/components/SectionHeading";

export function InsightsSection() {
  return (
    <section className="insights" id="insights">
      <div className="insights__inner">
        <SectionHeading eyebrow="Insights" title="Latest insights on startups, product, and growth." />

        <div className="article-list">
          {articles.map((article, index) => (
            <article className="article reveal" key={article.title}>
              <div
                className="article__thumb"
                style={{
                  background: `linear-gradient(135deg, ${index % 2 ? "#071006" : "#B9FF18"}, ${index % 2 ? "#B9FF18" : "#071006"})`,
                }}
              />
              <div>
                <span className="article__meta">
                  {article.date} · {article.category}
                </span>
                <h3>{article.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}