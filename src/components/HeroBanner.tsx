"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type HeroAction = {
  href: string;
  label: string;
  variant: "primary" | "outline";
};

type HeroBannerProps = {
  className?: string;
  id?: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
  actions: HeroAction[];
  badges?: string[];
};

export function HeroBanner({
  className = "",
  id = "hero",
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  actions,
  badges = [],
}: HeroBannerProps) {
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
      className={`hero ${className}`.trim()}
      id={id}
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero__media">
        <img ref={imageRef} src={imageSrc} alt={imageAlt} loading="eager" />
      </div>
      <div className="hero__glow" />

      {badges.map((badge, index) => (
        <span key={badge} className={`hero__badge hero__badge--${index + 1}`}>
          <i className="dot" />
          {badge}
        </span>
      ))}

      <div className="hero__inner">
        <div className="hero__stage">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="sub">{description}</p>
          <div className="hero__ctas">
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={`btn ${action.variant === "primary" ? "btn-primary" : "btn-outline-light"}`}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="hero__bottom-fade" />
    </section>
  );
}