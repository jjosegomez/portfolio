"use client";

import { useEffect, useState } from "react";
import { nav } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          juan<span className="text-copper">.</span>gomez
        </a>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-ink">
              {n.label}
            </a>
          ))}
          <a
            href="#hire"
            className="rounded-md bg-copper px-3.5 py-2 font-mono text-xs uppercase tracking-wider text-oncopper transition-colors hover:bg-copper-strong"
          >
            Let&apos;s work together!
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-bg/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-sm text-muted last:border-0 hover:text-ink"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#hire"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-md bg-copper px-4 py-2.5 text-center font-mono text-xs uppercase tracking-wider text-oncopper"
            >
              Let&apos;s work together!
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
