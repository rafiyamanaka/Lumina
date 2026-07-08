"use client";

import { useState } from "react";

import { navLinks } from "@/data/site-data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#hero" className="logo" onClick={() => setOpen(false)}>
          Lumina <span>Growth</span>
        </a>

        <nav className={`navlinks ${open ? "open" : ""}`} id="navlinks">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href="#book" className="btn btn-primary btn--compact">
            Book a Call
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