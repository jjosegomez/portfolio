import Reveal from "./Reveal";
import ProjectForm from "./ProjectForm";
import { services } from "@/data/content";

export default function WorkWithMe() {
  return (
    <section id="hire" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-copper">
            05 · {services.kicker}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
            {services.heading}
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
            {services.lead}
          </p>
        </Reveal>

        {/* Hairline grid — gap-px over bg-line reveals 1px dividers, no boxed cards */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {services.items.map((s, i) => (
            <Reveal
              key={s.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="bg-bg"
            >
              <div className="group h-full p-6 transition-colors hover:bg-surface">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-copper">0{i + 1}</span>
                  <h3 className="font-display text-lg font-bold tracking-tight">{s.title}</h3>
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <ProjectForm />
        </Reveal>
      </div>
    </section>
  );
}
