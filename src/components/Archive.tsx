import Reveal from "./Reveal";
import { archive } from "@/data/content";

export default function Archive() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.12em] text-muted">
            Archive — earlier projects
          </p>
          <div className="grid gap-x-12 gap-y-7 sm:grid-cols-2">
            {archive.map((a) => (
              <div key={a.name}>
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="font-medium">{a.name}</h4>
                  <span className="shrink-0 font-mono text-[10px] tracking-[0.06em] text-muted">
                    {a.tags.join(" · ")}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted">{a.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
