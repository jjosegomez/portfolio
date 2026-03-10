export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy hidden lg:block" />

      <div className="mx-auto max-w-6xl px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="py-24 lg:py-0">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-up opacity-0">
              Engineer & Builder
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy leading-[1.05] mb-6 animate-fade-up opacity-0 delay-100">
              Juan
              <br />
              Gomez
              <span className="text-accent">.</span>
            </h1>
            <p className="text-lg text-text-muted max-w-lg mb-8 animate-fade-up opacity-0 delay-200">
              Financial Systems Developer at Jabil by day.
              <br />
              Building AI-native software by night.
              <br />
              <span className="text-navy font-medium">Based in Tampa, FL.</span>
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 delay-300">
              <a
                href="#building"
                className="bg-navy text-white px-6 py-3 rounded-md font-semibold hover:bg-navy-light transition-colors"
              >
                What I&apos;m Building
              </a>
              <a
                href="https://www.linkedin.com/in/jjgomezswe/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-navy text-navy px-6 py-3 rounded-md font-semibold hover:bg-navy hover:text-white transition-all"
              >
                Get in Touch
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 mt-12 animate-fade-up opacity-0 delay-400">
              <div>
                <p className="text-3xl font-bold text-navy">3+</p>
                <p className="text-sm text-text-muted">Years Building</p>
              </div>
              <div className="w-px bg-navy/20" />
              <div>
                <p className="text-3xl font-bold text-navy">2</p>
                <p className="text-sm text-text-muted">Products Shipped</p>
              </div>
              <div className="w-px bg-navy/20" />
              <div>
                <p className="text-3xl font-bold text-navy">MS</p>
                <p className="text-sm text-text-muted">CS @ Georgia Tech</p>
              </div>
            </div>
          </div>

          {/* Right — Code card (on navy bg) */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white w-full max-w-md">
              <div className="font-mono text-sm space-y-3">
                <p className="text-accent-light">// currently</p>
                <p>
                  <span className="text-white/60">role:</span>{" "}
                  <span className="text-white">&quot;Financial Systems Developer II&quot;</span>
                </p>
                <p>
                  <span className="text-white/60">company:</span>{" "}
                  <span className="text-white">&quot;Jabil Inc&quot;</span>
                </p>
                <p>
                  <span className="text-white/60">building:</span>{" "}
                  <span className="text-accent-light">[&quot;ViGo Dental&quot;, &quot;Memex&quot;]</span>
                </p>
                <p>
                  <span className="text-white/60">stack:</span>{" "}
                  <span className="text-white">&quot;React, TypeScript, Python, AI&quot;</span>
                </p>
                <p className="text-white/40">
                  <span className="animate-pulse">_</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
