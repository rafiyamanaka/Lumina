"use client";

import { useEffect, useRef, useState } from "react";

import { trustStats } from "@/data/site-data";

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLElement | null>(null);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finalValue = `${prefix}${value}${suffix}`;

    if (prefersReducedMotion || typeof window.IntersectionObserver === "undefined") {
      setDisplay(finalValue);
      return;
    }

    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started) return;
          started = true;

          const duration = 1200;
          const startTime = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(`${prefix}${Math.round(value * eased)}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [prefix, suffix, value]);

  return <b ref={ref as React.RefObject<HTMLElement>}>{display}</b>;
}

export function TrustSection() {
  return (
    <section className="trust on-dark">
      <div className="trust__inner">
        <span className="eyebrow">Partnerships</span>
        <div className="trust__head">
          <h2>Clarity, strategy, and execution for ambitious businesses.</h2>
          <p>
            Lumina Growth partners with early-stage startups, growing SMEs, and digital-first companies to turn
            business uncertainty into measurable progress.
          </p>
        </div>

        <div className="stats">
          {trustStats.map((stat) => (
            <div className="stat reveal" key={stat.label}>
              <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}