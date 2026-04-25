import { heroStats } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1221] via-[#0D1829] to-[#091018]" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-sky-500/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-900/15 blur-3xl pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border text-xs font-medium text-sky mb-8 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
            </span>
            India&apos;s #1 Enterprise Learning Platform · Trusted by 500+
            Companies
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.08] mb-6 animate-fade-up"
            style={{
              fontFamily: "var(--font-display)",
              animationDelay: "0.1s",
              opacity: 0,
            }}
          >
            Upskill Your <span className="gradient-text">Workforce</span>
            <br />
            At Scale
          </h1>

          {/* Sub-headline */}
          <p
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Partner with{" "}
            <span className="text-slate-200 font-medium">
              IITs, IIMs, and global universities
            </span>{" "}
            to upskill enterprise teams with curated programs, live mentorship,
            and real-time analytics that deliver measurable ROI.
          </p>

          {/* CTA row */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            <Button variant="primary" size="lg" href="#contact">
              Get a Free Demo
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
            <Button variant="secondary" size="lg" href="#features">
              Explore Features
            </Button>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger animate-fade-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-5 text-center hover:border-blue-500/30 transition-all duration-300"
              >
                <div
                  className="text-3xl md:text-4xl font-bold gradient-text mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce">
        <span className="text-xs">Scroll</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
