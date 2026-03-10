const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Node.js",
  "Snowflake",
  "FastAPI",
  "SQL Server",
  "Docker",
  "AWS",
  "Tailwind",
  "LLMs",
  "AI Agents",
  "NLP",
  "MongoDB",
  "Git",
  "Java",
  "C#",
  "Express",
];

export default function SkillsMarquee() {
  const doubled = [...skills, ...skills];

  return (
    <div className="py-6 bg-navy overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((skill, i) => (
          <span
            key={i}
            className="mx-6 text-white/70 font-mono text-sm tracking-wider uppercase"
          >
            {skill}
            <span className="text-accent ml-6">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
