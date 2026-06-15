"use client";

import { useState } from "react";
import { profile, services } from "@/data/content";

// Web3Forms access key — PUBLIC by design (lives in client HTML, only routes
// submissions to the owning inbox). Safe to commit; not a secret.
const WEB3FORMS_KEY = "f08dd661-1be3-44f1-8b49-4b292630ff6f";
// Optional booking link (Cal.com / Calendly). Empty = the "rather talk?" link
// is hidden, so prod never shows a dead link.
const BOOKING_URL = "";

type Status = "idle" | "sending" | "ok" | "error";

const field =
  "w-full rounded-md border border-line bg-bg px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors placeholder:text-muted focus:border-copper";
const label =
  "mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted";

export default function ProjectForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="mt-10 max-w-xl rounded-lg border border-line bg-surface p-6">
        <p className="font-display text-lg font-bold tracking-tight">Got it — thanks.</p>
        <p className="mt-1 text-[14px] leading-relaxed text-muted">
          I read everything and reply to the ones I can help with. Talk soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 max-w-xl">
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="subject" value={services.cta.subject} />
      <input type="hidden" name="from_name" value="techbyjuan.com" />
      {/* honeypot — bots fill this, humans never see it */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="pf-name" className={label}>Name</label>
          <input id="pf-name" name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="pf-email" className={label}>Email</label>
          <input id="pf-email" name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
        </div>
      </div>

      <div className="mt-3">
        <label htmlFor="pf-msg" className={label}>What you&apos;re building</label>
        <textarea
          id="pf-msg"
          name="message"
          required
          rows={4}
          className={`${field} resize-y`}
          placeholder="A sentence or two on the project, rough timeline, and budget if you have one."
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-md bg-copper px-5 py-3 font-mono text-xs uppercase tracking-wider text-oncopper transition-colors hover:bg-copper-strong disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : `${services.cta.label} →`}
        </button>

        {BOOKING_URL && (
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-wider text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            Rather talk? Grab a time →
          </a>
        )}

        <span className="font-mono text-[11px] text-muted">{services.availability}</span>
      </div>

      {status === "error" && (
        <p className="mt-3 text-[13px] text-muted">
          Something went wrong — email{" "}
          <a href={`mailto:${profile.email}`} className="text-copper-strong underline underline-offset-2">
            {profile.email}
          </a>{" "}
          directly.
        </p>
      )}
    </form>
  );
}
