import Section from "./Section";
import Reveal from "./Reveal";
import { stack } from "@/data/content";

export default function Stack() {
  const all = stack.flatMap((g) => g.items);
  return (
    <Section
      id="stack"
      index="01"
      title="Stack"
      intro="What I build with — weighted toward agentic AI, full-stack delivery, and the data layer underneath."
    >
      <div className="marquee -mx-6 mb-12 border-y border-line py-3.5">
        <div className="marquee-track">
          {[...all, ...all].map((it, i) => (
            <span key={i} className="mx-5 font-mono text-xs uppercase tracking-[0.12em] text-muted">
              {it}
              <span className="ml-5 text-copper">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="divide-y divide-line border-y border-line">
        {stack.map((group, i) => (
          <Reveal key={group.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
            <div className="grid gap-3 py-6 sm:grid-cols-[200px_1fr] sm:gap-8">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-line px-2.5 py-1 text-[13px] text-ink/90 transition-all hover:-translate-y-0.5 hover:border-copper hover:text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
