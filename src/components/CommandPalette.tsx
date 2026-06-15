"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { nav, profile } from "@/data/content";

type Action = { label: string; hint: string; run: () => void };

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const lastFocused = useRef<HTMLElement | null>(null);
  const close = useCallback(() => {
    setOpen(false);
    lastFocused.current?.focus?.();
  }, []);

  const actions: Action[] = useMemo(
    () => [
      ...nav.map((n) => ({
        label: n.label,
        hint: "Section",
        run: () => document.querySelector(n.href)?.scrollIntoView({ behavior: "smooth" }),
      })),
      { label: "Let's work together", hint: "Section", run: () => document.querySelector("#hire")?.scrollIntoView({ behavior: "smooth" }) },
      { label: "Download résumé", hint: "PDF", run: () => window.open(profile.links.resume, "_blank") },
      { label: "GitHub", hint: "External", run: () => window.open(profile.links.github, "_blank") },
      { label: "LinkedIn", hint: "External", run: () => window.open(profile.links.linkedin, "_blank") },
      { label: "Email Juan", hint: profile.email, run: () => (window.location.href = `mailto:${profile.email}`) },
    ],
    []
  );

  const results = useMemo(
    () => actions.filter((a) => a.label.toLowerCase().includes(q.toLowerCase())),
    [actions, q]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => {
          if (!o) lastFocused.current = document.activeElement as HTMLElement;
          return !o;
        });
        setQ("");
        setSel(0);
      } else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 20);
  }, [open]);
  useEffect(() => setSel(0), [q]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(results.length - 1, s + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(0, s - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const a = results[sel];
      if (a) {
        a.run();
        close();
      }
    } else if (e.key === "Tab") {
      e.preventDefault(); // trap focus inside the dialog
    }
  };

  return (
    <>
      <button
        onClick={() => {
          lastFocused.current = document.activeElement as HTMLElement;
          setOpen(true);
          setQ("");
          setSel(0);
        }}
        className="fixed bottom-5 right-5 z-50 hidden items-center gap-1.5 rounded-full border border-line bg-bg/85 px-3.5 py-2 font-mono text-[11px] text-muted shadow-sm backdrop-blur transition-colors hover:text-ink md:flex"
        aria-label="Open command menu"
      >
        <kbd className="rounded border border-line px-1">⌘</kbd>
        <kbd className="rounded border border-line px-1">K</kbd>
        <span>menu</span>
      </button>

      {open && (
        <div className="cmdk-backdrop flex items-start justify-center p-4 pt-[18vh]" onClick={close}>
          <div
            className="cmdk-panel w-full max-w-lg overflow-hidden rounded-xl border border-line bg-bg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={onKeyDown}
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
          >
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Jump to…"
              className="w-full border-b border-line bg-transparent px-4 py-3.5 text-[15px] text-ink outline-none placeholder:text-muted"
            />
            <ul className="max-h-72 overflow-auto py-1">
              {results.length === 0 && <li className="px-4 py-3 text-sm text-muted">No matches</li>}
              {results.map((a, idx) => (
                <li key={a.label}>
                  <button
                    onMouseEnter={() => setSel(idx)}
                    onClick={() => {
                      a.run();
                      close();
                    }}
                    className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm ${
                      idx === sel ? "bg-surface text-ink" : "text-muted"
                    }`}
                  >
                    <span>{a.label}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted">{a.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
