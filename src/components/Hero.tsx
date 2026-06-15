"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { profile } from "@/data/content";

export default function Hero() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const drawRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const id = setTimeout(() => drawRef.current?.classList.add("go"), 60);
    const reduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (reduce) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      if (!raf)
        raf = requestAnimationFrame(() => {
          raf = 0;
          if (portraitRef.current)
            portraitRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      clearTimeout(id);
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const dl = (i: number) => ({ animationDelay: `${i * 0.07}s` } as React.CSSProperties);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
        <div>
          <p className="rise d1 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Software Engineer — {profile.location}
          </p>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            <span className="word" style={dl(0)}>I&nbsp;</span>
            <span className="word" style={dl(1)}>build&nbsp;</span>
            <span ref={drawRef} className="word draw" style={dl(2)}>software</span>
            <br />
            <span className="word" style={dl(3)}>end&nbsp;</span>
            <span className="word" style={dl(4)}>to&nbsp;</span>
            <span className="word" style={dl(5)}>
              end<span className="text-copper">.</span>
            </span>
          </h1>

          <p className="rise d4 mt-6 max-w-xl font-display text-lg font-medium tracking-tight text-muted sm:text-xl">
            AI-first solutions and full-stack platforms — designed, built, and shipped.
          </p>

          <p className="rise d5 mt-6 max-w-lg text-[15px] leading-relaxed text-muted">
            I&apos;m a <span className="font-medium text-ink">Colombian-American engineer</span> in
            Tampa. I build an{" "}
            <span className="font-medium text-ink">AI-driven finance platform at Jabil</span> — and I
            ship my own products on the side.{" "}
            <span className="font-medium text-ink">M.S. CS @ Georgia Tech</span>, incoming.
          </p>

          <div className="rise d5 mt-9 flex flex-wrap items-center gap-3">
            <a href="#work" className="rounded-md bg-copper px-5 py-3 font-mono text-xs uppercase tracking-wider text-oncopper transition-colors hover:bg-copper-strong">
              View work →
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-md border border-line-strong px-5 py-3 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-ink">
              LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="rounded-md border border-line-strong px-5 py-3 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-ink">
              GitHub
            </a>
          </div>

          <div className="rise d6 mt-9 flex flex-wrap gap-x-6 gap-y-1.5 font-mono text-xs text-muted">
            <span><span className="text-ink">3+</span> years building</span>
            <span><span className="text-ink">Fortune-500</span> · Medtronic &amp; Jabil</span>
          </div>
        </div>

        {/* Portrait — parallax wrapper + reveal inner */}
        <div ref={portraitRef} className="relative mx-auto w-full max-w-xs will-change-transform lg:max-w-none">
          <div className="rise d3 relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface">
            <span className="absolute left-3 top-3 z-10 rounded bg-bg/80 px-2 py-1 font-mono text-[10px] tracking-[0.1em] text-copper backdrop-blur">
              JG · 2026
            </span>
            <Image
              src="/images/portrait.jpg"
              alt="Juan Gomez"
              width={760}
              height={950}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-white">
              <span>Juan Gomez</span>
              <span>Tampa, FL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
