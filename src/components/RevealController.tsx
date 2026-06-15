"use client";

import { useEffect } from "react";

/**
 * One shared, rAF-throttled scroll check that reveals every `.reveal` element
 * once its top crosses ~92% of the viewport. Unlike a per-element
 * IntersectionObserver, this can't be skipped by a fast/programmatic scroll:
 * after any scroll, everything above the trigger line is revealed and stays.
 */
export default function RevealController() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    let raf = 0;

    const check = () => {
      raf = 0;
      const trigger = window.innerHeight * 0.92;
      for (const el of els) {
        if (el.classList.contains("in")) continue;
        if (el.getBoundingClientRect().top < trigger) el.classList.add("in");
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };

    check(); // reveal whatever is in view on load
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
