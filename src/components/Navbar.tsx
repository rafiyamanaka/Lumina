"use client";

import { useState } from "react";

import { navLinks } from "@/data/site-data";
import type { NavLink } from "@/data/site-data";

type NavbarProps = {
  links?: NavLink[];
  logoHref?: string;
  ctaHref?: string;
  ctaLabel?: string;
  currentHref?: string;
};

export function Navbar({
  links = navLinks,
  logoHref = "#hero",
  ctaHref = "#book",
  ctaLabel = "Book a Call",
  currentHref,
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href={logoHref} className="logo" onClick={() => setOpen(false)}>
          Lumina <span>Growth</span>
        </a>

        <nav className={`navlinks ${open ? "open" : ""}`} id="navlinks">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={currentHref && link.href === currentHref ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href={ctaHref} className="btn btn-primary btn--compact">
            {ctaLabel}
          </a>
          <button
            type="button"
            className="navtoggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}