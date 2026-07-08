"use client";

import { useEffect, useRef, useState } from "react";

export function AboutSection() {
  const visualRef = useRef<HTMLDivElement | null>(null);
  const growthLineRef = useRef<SVGPathElement | null>(null);
  const sparkLineRef = useRef<SVGPolylineElement | null>(null);
  const ringRef = useRef<SVGCircleElement | null>(null);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (growthLineRef.current) {
      const length = growthLineRef.current.getTotalLength();
      growthLineRef.current.style.strokeDasharray = `${length}`;
      growthLineRef.current.style.strokeDashoffset = reducedMotion ? "0" : `${length}`;
    }

    if (sparkLineRef.current) {
      const length = sparkLineRef.current.getTotalLength();
      sparkLineRef.current.style.strokeDasharray = `${length}`;
      sparkLineRef.current.style.strokeDashoffset = reducedMotion ? "0" : `${length}`;
    }

    if (ringRef.current) {
      ringRef.current.style.strokeDasharray = "100.5";
      ringRef.current.style.strokeDashoffset = reducedMotion ? "15" : "100.5";
    }

    if (reducedMotion) {
      setArmed(false);
      if (visualRef.current) {
        visualRef.current.classList.add("chart-revealed");
      }
      return;
    }

    setArmed(true);

    const reveal = () => {
      if (growthLineRef.current) growthLineRef.current.style.strokeDashoffset = "0";
      if (sparkLineRef.current) sparkLineRef.current.style.strokeDashoffset = "0";
      if (ringRef.current) ringRef.current.style.strokeDashoffset = "15";
      visualRef.current?.classList.add("chart-revealed");
    };

    if (typeof window.IntersectionObserver === "undefined" || !visualRef.current) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal();
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(visualRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="reveal">
          <span className="eyebrow">About Lumina</span>
          <h2>We help businesses make smarter decisions and grow with clarity.</h2>
          <p className="body">
            Many founders move fast but struggle with unclear positioning, weak validation, scattered data, and
            inconsistent execution. Lumina Growth brings strategy, product thinking, brand clarity, and growth
            systems into one integrated partnership.
          </p>
          <a href="#solutions" className="btn btn-outline-dark">
            See Our Approach
          </a>
        </div>

        <div ref={visualRef} className={`about-visual reveal ${armed ? "chart-armed" : ""}`}>
          <div className="dash dash--main">
            <div className="dash__top">
              <div>
                <span className="dash__label">Growth Score</span>
                <div className="dash__score">
                  <span className="dash__score-value">84</span>
                  <span className="dash__score-max">/100</span>
                </div>
              </div>
              <span className="dash__badge">Strong Growth</span>
            </div>

            <svg className="dash__linechart" viewBox="0 0 260 120" preserveAspectRatio="none" role="img" aria-label="Grafik tren growth score naik dari waktu ke waktu">
              <defs>
                <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#B9FF18" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#B9FF18" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                className="growth-area"
                d="M0,96 L26,84 L52,88 L78,64 L104,70 L130,46 L156,54 L182,28 L208,36 L234,14 L260,20 L260,120 L0,120 Z"
                fill="url(#growthFill)"
              />
              <path
                ref={growthLineRef}
                className="growth-line"
                d="M0,96 L26,84 L52,88 L78,64 L104,70 L130,46 L156,54 L182,28 L208,36 L234,14 L260,20"
                fill="none"
                stroke="#B9FF18"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle className="growth-dot" cx="260" cy="20" r="5" fill="#071006" stroke="#B9FF18" strokeWidth="3" />
            </svg>
          </div>

          <div className="dash-stats">
            <div className="stat-card">
              <span className="stat-card__label">Revenue Growth</span>
              <div className="stat-card__row">
                <strong className="stat-card__value">+24%</strong>
                <svg className="stat-card__bars" viewBox="0 0 46 28" role="img" aria-label="Grafik batang revenue growth meningkat">
                  <rect className="bar-rect" x="0" y="16" width="6" height="12" rx="2" fill="#B9FF18" fillOpacity="0.35" />
                  <rect className="bar-rect" x="10" y="10" width="6" height="18" rx="2" fill="#B9FF18" fillOpacity="0.55" />
                  <rect className="bar-rect" x="20" y="14" width="6" height="14" rx="2" fill="#B9FF18" fillOpacity="0.4" />
                  <rect className="bar-rect" x="30" y="4" width="6" height="24" rx="2" fill="#B9FF18" />
                  <rect className="bar-rect" x="40" y="8" width="6" height="20" rx="2" fill="#B9FF18" fillOpacity="0.7" />
                </svg>
              </div>
              <span className="stat-card__sub">vs last quarter</span>
            </div>

            <div className="stat-card">
              <span className="stat-card__label">Efficiency</span>
              <div className="stat-card__row">
                <strong className="stat-card__value">85%</strong>
                <svg className="stat-card__ring" viewBox="0 0 40 40" role="img" aria-label="Progress lingkaran efficiency 85 persen">
                  <circle cx="20" cy="20" r="16" fill="none" stroke="#DADFC4" strokeWidth="5" />
                  <circle
                    ref={ringRef}
                    className="efficiency-ring"
                    cx="20"
                    cy="20"
                    r="16"
                    fill="none"
                    stroke="#B9FF18"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray="100.5"
                    strokeDashoffset="100.5"
                    data-target-offset="15"
                    transform="rotate(-90 20 20)"
                  />
                </svg>
              </div>
              <span className="stat-card__sub">process optimization</span>
            </div>

            <div className="stat-card">
              <span className="stat-card__label">Deals This Month</span>
              <div className="stat-card__row">
                <strong className="stat-card__value">23</strong>
                <svg className="stat-card__spark" viewBox="0 0 46 24" role="img" aria-label="Grafik sparkline jumlah deal closing bulan ini">
                  <polyline
                    ref={sparkLineRef}
                    className="spark-line"
                    points="0,18 8,14 16,16 24,8 32,10 40,3 46,6"
                    fill="none"
                    stroke="#B9FF18"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="stat-card__sub">closed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}