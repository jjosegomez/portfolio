"use client";

import { useEffect, useState } from "react";

const TARGETS: [string, string][] = [
  ["top", "Top"],
  ["work", "Work"],
  ["experience", "Experience"],
  ["stack", "Stack"],
  ["about", "About"],
  ["hire", "Let's work together"],
];

export default function ScrollProgress() {
  const [p, setP] = useState(0);
  const [active, setActive] = useState("top");

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
      let cur = "top";
      for (const [id] of TARGETS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) cur = id;
      }
      setActive(cur);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ ["--p"]: `${p}%` } as React.CSSProperties} />
      <nav className="minimap hidden lg:flex" aria-label="Jump to section">
        {TARGETS.map(([id, label]) => (
          <button
            key={id}
            className={active === id ? "active" : ""}
            title={label}
            aria-label={label}
            aria-current={active === id ? "true" : undefined}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
          />
        ))}
      </nav>
    </>
  );
}
