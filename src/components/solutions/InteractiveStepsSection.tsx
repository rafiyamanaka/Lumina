"use client";

import { useState } from "react";

import type { ProcessStep } from "@/data/site-data";

type InteractiveStepsSectionProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  steps: ProcessStep[];
  imageSrc: string;
  imageAlt: string;
  sectionClassName?: string;
  sectionId?: string;
};

export function InteractiveStepsSection({
  eyebrow,
  title,
  lead,
  steps,
  imageSrc,
  imageAlt,
  sectionClassName = "process",
  sectionId,
}: InteractiveStepsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalLabel = String(steps.length).padStart(2, "0");

  return (
    <section className={sectionClassName} id={sectionId}>
      <div className="process__inner">
        <div className="process__copy reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {lead ? <p className="lead">{lead}</p> : null}
          <div className="steps">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  className={`step ${isActive ? "active" : ""}`}
                  key={step.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="step__num">{String(index + 1).padStart(2, "0")}</span>
                  <span className="step__body">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="process__visual reveal">
          <img src={imageSrc} alt={imageAlt} loading="lazy" />
          <div className="ring ring--2" />
          <div className="ring ring--1" />
          <span className="process__tag">
            {String(activeIndex + 1).padStart(2, "0")} / {totalLabel}
          </span>
        </div>
      </div>
    </section>
  );
}