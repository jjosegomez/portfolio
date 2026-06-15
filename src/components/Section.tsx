import Reveal from "./Reveal";

type Props = {
  id: string;
  index: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
};

export default function Section({ id, index, title, intro, children }: Props) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-copper">{index}</span>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
          </div>
          {intro && (
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
              {intro}
            </p>
          )}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
