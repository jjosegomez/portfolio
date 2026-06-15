import Section from "./Section";
import Reveal from "./Reveal";
import { about, education, profile } from "@/data/content";

export default function About() {
  return (
    <Section id="about" index="04" title="About">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <p className="font-display text-xl font-medium leading-snug tracking-tight sm:text-2xl">
            {about.lead}
          </p>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
            {about.body}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {profile.signals.map((s) => (
              <span
                key={s}
                className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={2}>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-muted">
            Education
          </p>
          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.school}>
                <p className="font-medium">{e.school}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted">{e.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
