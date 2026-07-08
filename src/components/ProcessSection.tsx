"use client";

import { useState } from "react";

import { processSteps } from "@/data/site-data";

const processImage =
  "https://images.unsplash.com/photo-1646617747563-4f080bddf282?q=80&w=1200&auto=format&fit=crop";

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="process">
      <div className="process__inner">
        <div className="process__copy reveal">
          <span className="eyebrow">How We Work</span>
          <h2>A focused process designed to turn uncertainty into progress.</h2>
          <div className="steps" id="steps">
            {processSteps.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <button className={`step ${isActive ? "active" : ""}`} key={step.title} type="button" onClick={() => setActiveIndex(index)}>
                  <span className="step__num">0{index + 1}</span>
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
          <img src={processImage} alt="Tim Lumina Growth memetakan diagram strategi di atas kertas" loading="lazy" />
          <div className="ring ring--2" />
          <div className="ring ring--1" />
          <span className="process__tag">0{activeIndex + 1} / 05</span>
        </div>
      </div>
    </section>
  );
}