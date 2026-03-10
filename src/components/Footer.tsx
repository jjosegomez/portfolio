export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let&apos;s build something<span className="text-accent">.</span>
            </h2>
            <p className="text-white/60 max-w-md">
              Always open to interesting conversations, collaborations, and
              new opportunities. Reach out.
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-4">
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/jjgomezswe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/jjosegomez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors font-medium"
              >
                GitHub
              </a>
              <a
                href="mailto:jjgomezswe@gmail.com"
                className="text-white/60 hover:text-accent transition-colors font-medium"
              >
                Email
              </a>
            </div>
            <a
              href="https://docs.google.com/document/d/1e39WtsnwBifsmVNcytldUySPRYGdlBdfHojKvtSfboc/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent transition-colors text-sm"
            >
              View Resume &rarr;
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Juan Gomez. Built with Next.js &
            Tailwind.
          </p>
          <p className="text-white/30 text-xs font-mono">
            Tampa, FL
          </p>
        </div>
      </div>
    </footer>
  );
}
