"use client";

import { useEffect, useRef, useState } from "react";

import { heroBadges } from "@/data/site-data";

const heroImage =
  "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?q=80&w=1600&auto=format&fit=crop";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setCanAnimate(hasFinePointer && !prefersReducedMotion);
  }, []);

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    if (!canAnimate || !sectionRef.current) return;

    const bounds = sectionRef.current.getBoundingClientRect();
    const mx = ((event.clientX - bounds.left) / bounds.width) * 100;
    const my = ((event.clientY - bounds.top) / bounds.height) * 100;
    const offsetX = mx / 100 - 0.5;
    const offsetY = my / 100 - 0.5;

    sectionRef.current.style.setProperty("--mx", `${mx.toFixed(1)}%`);
    sectionRef.current.style.setProperty("--my", `${my.toFixed(1)}%`);
    sectionRef.current.classList.add("is-glowing");

    if (imageRef.current) {
      imageRef.current.style.transform = `translate(${(offsetX * -16).toFixed(1)}px, ${(offsetY * -12).toFixed(1)}px) scale(1.06)`;
    }
  }

  function handleMouseLeave() {
    sectionRef.current?.classList.remove("is-glowing");
    if (imageRef.current) {
      imageRef.current.style.transform = "";
    }
  }

  return (
    <section
      className="hero"
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero__media">
        <img
          ref={imageRef}
          src={heroImage}
          alt="Tim Lumina Growth berdiskusi strategi bersama klien di ruang kerja"
          loading="eager"
        />
      </div>
      <div className="hero__glow" />

      {heroBadges.map((badge, index) => (
        <span key={badge} className={`hero__badge hero__badge--${index + 1}`}>
          <i className="dot" />
          {badge}
        </span>
      ))}

      <div className="hero__inner">
        <div className="hero__stage">
          <span className="eyebrow">Strategic Growth Partner</span>
          <h1>Your Strategic Partner from <em>Idea</em> to Growth.</h1>
          <p className="sub">
            We help founders validate ideas, build better products, and scale businesses with strategy, data,
            and execution.
          </p>
          <div className="hero__ctas">
            <a href="#book" className="btn btn-primary">
              Book a Call
            </a>
            <a href="#solutions" className="btn btn-outline-light">
              View Solutions
            </a>
          </div>
        </div>
      </div>
      <div className="hero__bottom-fade" />
    </section>
  );
}