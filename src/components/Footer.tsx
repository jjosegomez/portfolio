import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 font-mono text-[11px] text-muted sm:flex-row sm:justify-between">
        <span>© 2026 Juan Gomez</span>
        <div className="flex items-center gap-5">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            GitHub
          </a>
        </div>
        <span>Built with Next.js · Tailwind · Cloudflare</span>
      </div>
    </footer>
  );
}
