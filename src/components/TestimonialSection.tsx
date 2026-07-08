"use client";

import { useState } from "react";

import { testimonials } from "@/data/site-data";

export function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  return (
    <section className="testi">
      <div className="testi__inner">
        <span className="eyebrow">Testimonial</span>
        <blockquote>{current.quote}</blockquote>
        <div className="testi__author">
          <div className="avatar" />
          <div>
            <strong>{current.name}</strong>
            <span>{current.role}</span>
          </div>
        </div>
        <div className="testi__nav">
          <button type="button" aria-label="Previous testimonial" onClick={() => setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)}>
            ←
          </button>
          <button type="button" aria-label="Next testimonial" onClick={() => setIndex((value) => (value + 1) % testimonials.length)}>
            →
          </button>
        </div>
      </div>
    </section>
  );
}