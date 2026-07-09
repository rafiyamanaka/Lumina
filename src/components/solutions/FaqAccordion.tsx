"use client";

import { useState } from "react";

import type { FaqItem } from "@/data/solutions-page";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  function toggleItem(index: number) {
    setOpenItems((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isActive = openItems.includes(index);
        const panelId = `faq-${index}`;

        return (
          <div className={`accordion-item accordion-item--faq ${isActive ? "active" : ""}`} key={item.question}>
            <button
              type="button"
              className="accordion-item__trigger"
              aria-expanded={isActive}
              aria-controls={panelId}
              onClick={() => toggleItem(index)}
            >
              <span className="accordion-item__title">{item.question}</span>
              <svg className="accordion-item__icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div className="accordion-item__panel" id={panelId} role="region">
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}