"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Building", href: "#building" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-navy font-bold text-xl tracking-tight hover:text-navy-light transition-colors"
        >
          JG<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-navy transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/jjgomezswe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white bg-navy px-4 py-2 rounded-md hover:bg-navy-light transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-cream/95 backdrop-blur-md ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium text-navy"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/jjgomezswe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white bg-navy px-5 py-2 rounded-md"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
