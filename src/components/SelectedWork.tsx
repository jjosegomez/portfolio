"use client";

import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { projects, type Project } from "@/data/content";

function withTransition(fn: () => void) {
  const doc = document as Document & { startViewTransition?: (cb: () => void) => void };
  if (doc.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    doc.startViewTransition(fn);
  } else {
    fn();
  }
}

function Row({ p, open, onToggle }: { p: Project; open: boolean; onToggle: () => void }) {
  const panelId = `proj-${p.id}`;
  return (
    <div className="sweep relative transition-transform duration-300 hover:-translate-y-0.5">
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="group grid w-full grid-cols-[auto_1fr_auto] items-start gap-5 py-8 text-left sm:gap-8"
      >
        <span className={`font-mono text-xs transition-colors ${open ? "text-copper" : "text-copper/70 group-hover:text-copper"}`}>
          {p.id}
        </span>
        <span>
          <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-display text-2xl font-bold tracking-tight">
              <span className="link-underline">{p.name}</span>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{p.role}</span>
          </span>
          <span className="mt-3 block max-w-2xl text-[15px] leading-relaxed text-muted">{p.blurb}</span>
          <span className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
                {t}
              </span>
            ))}
          </span>
        </span>
        <span
          aria-hidden
          className={`mt-1 font-mono text-xl text-copper transition-transform duration-300 ${open ? "rotate-90" : "group-hover:translate-x-1"}`}
        >
          ›
        </span>
      </button>

      <div
        id={panelId}
        className="grid transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className={`pb-8 pl-[2.5rem] transition-opacity duration-300 sm:pl-[3.25rem] ${open ? "opacity-100" : "opacity-0"}`}>
            <ul className="space-y-2">
              {(p.highlights ?? []).map((h, i) => (
                <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            {p.url && (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-copper px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider text-oncopper transition-colors hover:bg-copper-strong"
              >
                Visit site ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SelectedWork() {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <Section
      id="work"
      index="02"
      title="Selected Work"
      intro="A few things I've designed and built — from a production AI legal platform to shipped products and client sites. Tap a project to expand."
    >
      <div className="divide-y divide-line border-y border-line">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
            <Row
              p={p}
              open={openId === p.id}
              onToggle={() => withTransition(() => setOpenId((cur) => (cur === p.id ? null : p.id)))}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
