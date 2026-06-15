import Reveal from "./Reveal";
import { profile } from "@/data/content";

const ghost =
  "rounded-md border border-line-strong px-5 py-3 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-ink";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <p className="font-mono text-xs text-copper">05</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-[-0.03em] sm:text-6xl">
            Let&apos;s build something good<span className="text-copper">.</span>
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
            Open to software engineering roles. The fastest way to reach me is
            email — I read everything.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md bg-copper px-5 py-3 font-mono text-xs uppercase tracking-wider text-oncopper transition-colors hover:bg-copper-strong"
            >
              {profile.email}
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className={ghost}>
              LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className={ghost}>
              GitHub
            </a>
            <a href={profile.links.resume} className={ghost}>
              Résumé
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 font-mono text-[11px] text-muted sm:flex-row">
          <span>© 2026 Juan Gomez</span>
          <span>Built with Next.js · Tailwind · deployed on Cloudflare</span>
        </div>
      </footer>
    </section>
  );
}
