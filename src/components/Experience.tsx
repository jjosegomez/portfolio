import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <div>
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={((i % 3) + 1) as 1 | 2 | 3}>
            <article className="grid gap-3 border-t border-line py-8 first:border-t-0 sm:grid-cols-[220px_1fr] sm:gap-x-10">
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight">
                  {job.company}
                </h3>
                <p className="text-sm text-ink/80">{job.title}</p>
                <p className="mt-1 font-mono text-[11px] tracking-[0.04em] text-muted">
                  {job.dates} · {job.location}
                </p>
              </div>
              <ul className="space-y-2.5">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-[14px] leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
