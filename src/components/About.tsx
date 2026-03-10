"use client";

import { useRef, useEffect, useState } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 bg-warm-gray transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">
          About
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-12">
          The short version<span className="text-accent">.</span>
        </h2>

        {/* Photo + bio side by side */}
        <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start mb-12">
          <div className="mx-auto md:mx-0 w-64 md:w-full shrink-0 rounded-2xl overflow-hidden border border-navy/10 shadow-md">
            <img
              src="/images/graduation.jpeg"
              alt="Juan Gomez at graduation"
              className="w-full h-80 object-cover object-top"
            />
          </div>
          <div className="space-y-5 text-lg text-text-muted leading-relaxed">
            <p>
              I&apos;m a <strong className="text-navy">Colombian-American engineer</strong> based
              in Tampa, FL. CS grad from the University of South Florida, currently
              pursuing a <strong className="text-navy">Master&apos;s in Computer Science</strong> at
              Georgia Tech. Building enterprise systems at Jabil and shipping
              my own products on the side.
            </p>
            <p>
              At Jabil, I&apos;m the <strong className="text-navy">sole developer</strong> behind
              an AI-enabled finance platform — I own the full stack from Snowflake
              pipelines to the frontend. Before that, I built manufacturing software
              and device integrations at Medtronic.
            </p>
            <p>
              Outside of work, I&apos;m building{" "}
              <strong className="text-navy">ViGo Dental</strong> — AI-native practice
              management for dentists — and shipped{" "}
              <strong className="text-navy">Memex</strong>, an open-source memory layer for
              AI agents.
            </p>
          </div>
        </div>

        {/* Cards row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-navy/10">
            <h3 className="font-bold text-navy text-lg mb-3">What I work with</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "Python",
                "Node.js",
                "Tailwind",
                "Snowflake",
                "SQL Server",
                "FastAPI",
                "Docker",
                "AWS",
                "Git",
                "LLMs",
                "AI Agents",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-navy/5 text-navy text-sm font-medium px-3 py-1.5 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-navy/10">
            <h3 className="font-bold text-navy text-lg mb-3">Beyond the code</h3>
            <p className="text-text-muted">
              Bilingual (English & Spanish). Cyclist. Gamer. Recently married.
              Former Google DSC Tech Lead and Microsoft mentee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
