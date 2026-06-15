// Dumb wrapper — hidden/animated state lives in globals.css (gated on
// prefers-reduced-motion). RevealController adds `.in` on scroll, robustly.

type Props = {
  children: React.ReactNode;
  className?: string;
  /** stagger step 1–5 */
  delay?: 1 | 2 | 3 | 4 | 5;
};

export default function Reveal({ children, className = "", delay }: Props) {
  const d = delay ? `d${delay}` : "";
  return <div className={`reveal ${d} ${className}`.trim()}>{children}</div>;
}
