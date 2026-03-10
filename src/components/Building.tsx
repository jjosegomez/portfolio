"use client";

import { useRef, useEffect, useState } from "react";

const projects = [
  {
    name: "ViGo Dental",
    tagline: "AI-native practice management for dentists",
    description:
      "A two-product suite: an AI front desk agent that handles calls, scheduling, and patient intake, plus a schedule optimizer that maximizes chair utilization. Built for dental practices drowning in admin work.",
    stack: ["Next.js", "TypeScript", "Python", "FastAPI", "AI Agents"],
    status: "In Development",
    url: null,
  },
  {
    name: "Memex",
    tagline: "Persistent memory for AI agents",
    description:
      "An open-source npm package that gives AI agents encrypted, long-term memory. Ships with an MCP server for seamless integration with Claude, ChatGPT, and other LLM tools.",
    stack: ["TypeScript", "Node.js", "npm", "MCP Protocol"],
    status: "Shipped",
    url: "https://getmemex.dev",
  },
];

export default function Building() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="building"
      ref={ref}
      className={`py-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">
          Side Ventures
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
          What I&apos;m building<span className="text-accent">.</span>
        </h2>
        <p className="text-text-muted text-lg mb-12 max-w-2xl">
          The 9-to-5 funds the dream. Here&apos;s what I&apos;m working on
          after hours.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative bg-white border border-navy/10 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    project.status === "Shipped"
                      ? "bg-green-100 text-green-700"
                      : "bg-accent-light/50 text-accent"
                  }`}
                >
                  {project.status}
                </span>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-navy transition-colors"
                  >
                    Visit &rarr;
                  </a>
                )}
              </div>

              <h3 className="text-2xl font-bold text-navy mb-1">
                {project.name}
              </h3>
              <p className="text-accent font-medium text-sm mb-4">
                {project.tagline}
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-navy/5 text-navy-light px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
