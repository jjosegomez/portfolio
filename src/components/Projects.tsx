"use client";

import { useRef, useEffect, useState } from "react";

const projects = [
  {
    name: "Prometheus AITutor",
    description:
      "AI tutoring platform for high school students — evaluates knowledge gaps and generates personalized slides. NLP-powered backend with Django, React + TypeScript frontend.",
    stack: ["TypeScript", "React", "Django", "Python", "NLP"],
  },
  {
    name: "FirstLand",
    description:
      "Real estate platform with a GPT-4-powered Realtor AI assistant. Full MERN stack with Google Places API integration and Passport.js auth.",
    stack: ["React", "Node.js", "MongoDB", "Express", "OpenAI"],
  },
  {
    name: "Pac-Man AI",
    description:
      "Classic Pac-Man with Reinforced Learning AI (Reflex Agent). Demonstrates AI that learns and adapts to game mechanics in real-time.",
    stack: ["Python", "AI", "Reinforcement Learning"],
  },
  {
    name: "Facial Recognition",
    description:
      "ML-based facial recognition system using the ORL dataset. Implements SVM, KNN, PCA, and LDA for classification and dimensionality reduction.",
    stack: ["Python", "SVM", "KNN", "PCA", "LDA"],
  },
  {
    name: "SupremeBot",
    description:
      "Automated e-commerce bot built with Selenium and Python for web scraping, data collection, and automated purchasing.",
    stack: ["Python", "Selenium"],
  },
  {
    name: "Technical Analysis App",
    description:
      "Data visualization application for business technical analysis. Built with C# and .NET for analyzing files and visualizing patterns.",
    stack: ["C#", ".NET", "Visual Studio"],
  },
];

export default function Projects() {
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
      id="projects"
      ref={ref}
      className={`py-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">
          Archive
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
          Past projects<span className="text-accent">.</span>
        </h2>
        <p className="text-text-muted text-lg mb-12 max-w-2xl">
          A selection of things I&apos;ve built during school and on my own time.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group bg-white border border-navy/10 rounded-xl p-6 hover:border-navy/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-navy-light transition-colors">
                {project.name}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-navy/5 text-navy-light px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
