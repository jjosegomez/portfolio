"use client";

import { useRef, useEffect, useState } from "react";

const experiences = [
  {
    year: "2025 — Now",
    company: "Jabil",
    title: "Financial Systems Developer II",
    location: "Tampa, FL",
    highlights: [
      "Sole developer and technical owner of an AI-enabled internal finance platform for financial analysis, forecasting, and operational reporting.",
      "Built end-to-end systems integrating Snowflake data pipelines, analytics, and automated insights — replacing manual reporting workflows.",
      "Own the full system lifecycle with senior-level autonomy: architecture, development, deployment, security, and maintenance.",
    ],
  },
  {
    year: "2024 — 2025",
    company: "Medtronic",
    title: "Software Engineer I",
    location: "Minneapolis, MN",
    highlights: [
      "Developed full-stack apps and manufacturing equipment integration using Python and Ignition for operational efficiency.",
      "Built a custom OPC UA device module in Java with the Ignition SDK for seamless equipment communication.",
      "Led Validation Plans ensuring compliance with Medtronic and FDA quality standards. Architected database redesign with SQL Server.",
    ],
  },
  {
    year: "2023",
    company: "Google DSC @ USF",
    title: "Tech Lead",
    location: "Tampa, FL",
    highlights: [
      "Delivered 10+ technical workshops to 500+ students covering web development, version control, and project development.",
      "Planned and executed university hackathons. Mentored 10+ students on personal projects.",
    ],
  },
  {
    year: "2023",
    company: "Eversana Intouch",
    title: "Software Development Intern",
    location: "Tampa, FL",
    highlights: [
      "Led website updates for live client sites using HTML, CSS, and JavaScript at a healthcare consulting firm.",
      "Sole developer on collaborative intern project — redesigned company website for modern aesthetics.",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-24 bg-warm-gray transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">
          Career
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-12">
          Where I&apos;ve been<span className="text-accent">.</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-navy/20" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-20">
                {/* Dot on timeline */}
                <div className="absolute left-0 md:left-8 top-1 w-3 h-3 -translate-x-[6.5px] rounded-full bg-navy ring-4 ring-cream" />

                {/* Year badge */}
                <span className="inline-block text-xs font-mono font-bold text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">
                  {exp.year}
                </span>

                <div className="bg-white rounded-xl p-6 border border-navy/10 hover:border-navy/25 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-navy">
                        {exp.company}
                      </h3>
                      <p className="text-text-muted font-medium">{exp.title}</p>
                    </div>
                    <p className="text-sm text-text-muted mt-1 sm:mt-0">
                      {exp.location}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-text-muted text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-accent mt-1 shrink-0">&#9656;</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
