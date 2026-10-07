const EMAIL = "mohammedamaan@gmail.com";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute right-[-200px] top-[40%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute left-[-200px] top-[65%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-sm font-bold">
            AI
          </div>
          <span className="text-sm font-medium tracking-wide">
            aiappgenerator<span className="text-white/40">.in</span>
          </span>
        </div>

        <a
          href={`mailto:${EMAIL}?subject=Interested in aiappgenerator.in`}
          className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium transition hover:bg-white/10"
        >
          Make an Offer
        </a>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] max-w-6xl flex-col items-center justify-center px-6 pb-20 pt-12 text-center">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-2 text-xs font-medium text-violet-200">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]" />
          Premium AI domain available
        </div>

        <h1 className="max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
          AI App
          <span className="block bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
            Generator
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55 sm:text-xl">
          A powerful, memorable domain for the next generation of
          AI-powered app creation.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={`mailto:${EMAIL}?subject=Interested in aiappgenerator.in&body=Hi, I am interested in acquiring aiappgenerator.in.`}
            className="group rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90"
          >
            Make an Offer
            <span className="ml-2 transition group-hover:ml-3">→</span>
          </a>

          <a
            href="#why"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-white/80 transition hover:bg-white/10"
          >
            Explore the domain
          </a>
        </div>

        {/* Domain card */}
        <div className="mt-20 w-full max-w-4xl">
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.035] p-2 shadow-2xl shadow-violet-950/20 backdrop-blur-xl">
            <div className="rounded-[22px] border border-white/5 bg-[#090909] px-6 py-10 sm:px-12 sm:py-14">
              <div className="mb-4 text-xs uppercase tracking-[0.3em] text-white/30">
                The domain
              </div>

              <div className="break-all text-3xl font-medium tracking-tight sm:text-5xl">
                <span className="text-white">aiappgenerator</span>
                <span className="text-white/30">.in</span>
              </div>

              <div className="mt-5 text-sm text-white/35">
                Available for acquisition
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why this domain */}
      <section
        id="why"
        className="relative z-10 mx-auto max-w-6xl px-6 py-28 lg:px-10"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
            Why this name
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            The name says exactly what the product does.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/45">
            Clear. Descriptive. Highly relevant to the rapidly growing AI
            application ecosystem.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Clear intent", "Instantly communicates an AI app creation product."],
            ["02", "Highly relevant", "Built around one of the fastest-growing technology categories."],
            ["03", "Brandable", "A strong foundation for a SaaS, platform or developer tool."],
            ["04", "Memorable", "Simple enough to understand and remember after one visit."],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:bg-white/[0.045]"
            >
              <div className="text-xs text-white/25">{number}</div>
              <h3 className="mt-12 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/40">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-28 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">
            Built for
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              "AI app builders",
              "SaaS startups",
              "Developer platforms",
              "No-code & low-code products",
              "AI development agencies",
              "Next-generation software companies",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-2xl border border-white/10 px-6 py-5"
              >
                <span className="text-white/70">{item}</span>
                <span className="text-white/20">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[100px]" />

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
          Available now
        </p>

        <h2 className="mt-6 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
          Own the name.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/45">
          Interested in acquiring aiappgenerator.in? Get in touch and make
          your offer.
        </p>

        <a
          href={`mailto:${EMAIL}?subject=Offer for aiappgenerator.in`}
          className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90"
        >
          Contact the Owner →
        </a>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 py-8 text-xs text-white/25 sm:flex-row lg:px-10">
          <span>aiappgenerator.in</span>
          <span>Premium domain available for acquisition</span>
        </div>
      </footer>
    </main>
  );
}