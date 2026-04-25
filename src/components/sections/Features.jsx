import { features, programs, testimonials, partners } from "@/lib/data";
import SectionWrapper, {
  SectionLabel,
  SectionHeading,
  SectionSubheading,
} from "@/components/ui/SectionWrapper";

/* ── Feature Card ─────────────────────────────────────────────────────────── */
function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative glass rounded-2xl p-6 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 cursor-default">
      <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3
        className="text-base font-semibold text-white mb-2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

/* ── Program Card ─────────────────────────────────────────────────────────── */
function ProgramCard({ category, tag, duration, partner, level, enrolled }) {
  const tagColors = {
    "High Demand": "bg-red-500/10 text-red-400 border-red-500/20",
    Bestseller: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    New: "bg-mint/10 text-emerald-400 border-emerald-500/20",
    Popular: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  };

  return (
    <div className="glass rounded-2xl p-6 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <h3
          className="text-base font-semibold text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {category}
        </h3>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full border ${tagColors[tag] ?? ""}`}
        >
          {tag}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Partner", value: partner },
          { label: "Duration", value: duration },
          { label: "Level", value: level },
          { label: "Enrolled", value: enrolled },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">
              {label}
            </p>
            <p className="text-sm text-slate-200 font-medium">{value}</p>
          </div>
        ))}
      </div>

      <button className="mt-auto w-full py-2.5 rounded-xl border border-blue-500/30 text-sm text-blue-400 font-medium hover:bg-blue-600/10 transition-colors">
        View Program →
      </button>
    </div>
  );
}

/* ── Testimonial Card ─────────────────────────────────────────────────────── */
function TestimonialCard({ quote, name, title, company, avatar }) {
  return (
    <div className="glass rounded-2xl p-7 flex flex-col gap-5">
      <div className="flex gap-1 text-amber-400 text-sm">{"★★★★★"}</div>
      <p className="text-slate-300 text-sm leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center text-white text-xs font-bold">
          {avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-slate-500">
            {title} · {company}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Solutions Banner ─────────────────────────────────────────────────────── */
function SolutionsBanner() {
  const solutions = [
    {
      icon: "🏢",
      title: "For CHROs",
      desc: "Align learning with business strategy and board-level talent goals.",
    },
    {
      icon: "📚",
      title: "For L&D Teams",
      desc: "From curriculum design to analytics — everything in one OS.",
    },
    {
      icon: "💻",
      title: "For Tech Leaders",
      desc: "Build engineering depth in AI, ML, and cloud-native stacks.",
    },
  ];

  return (
    <SectionWrapper
      id="solutions"
      className="border-y border-white/6 bg-[#0D1829]/60"
    >
      <div className="text-center mb-12">
        <SectionLabel>Solutions</SectionLabel>
        <SectionHeading>Built for Every Role in Your Org</SectionHeading>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {solutions.map((s) => (
          <div
            key={s.title}
            className="relative glass rounded-2xl p-8 text-center overflow-hidden group hover:border-sky/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-4xl mb-4">{s.icon}</div>
            <h3
              className="text-lg font-semibold mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {s.title}
            </h3>
            <p className="text-sm text-slate-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

/* ── Main export ──────────────────────────────────────────────────────────── */
export default function Features() {
  return (
    <>
      <SolutionsBanner />

      {/* Features grid */}
      <SectionWrapper id="features">
        <div className="text-center mb-14">
          <SectionLabel>Platform Features</SectionLabel>
          <SectionHeading className="mb-4">
            Everything L&amp;D Teams Need
          </SectionHeading>
          <SectionSubheading className="mx-auto text-center">
            From curriculum design to analytics — Accredian Enterprise is the
            complete operating system for ambitious learning organizations.
          </SectionSubheading>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
          {features.map((f) => (
            <FeatureCard key={f.id} {...f} />
          ))}
        </div>
      </SectionWrapper>

      {/* Programs */}
      <SectionWrapper id="programs" className="bg-[#0D1829]/40">
        <div className="text-center mb-14">
          <SectionLabel>Program Catalog</SectionLabel>
          <SectionHeading className="mb-4">
            Programs from{" "}
            <span className="gradient-text">Top Institutions</span>
          </SectionHeading>
          <SectionSubheading className="mx-auto text-center">
            Co-designed with IITs, IIMs, and global universities for real-world
            applicability.
          </SectionSubheading>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
          {programs.map((p) => (
            <ProgramCard key={p.id} {...p} />
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper id="testimonials">
        <div className="text-center mb-14">
          <SectionLabel>Testimonials</SectionLabel>
          <SectionHeading className="mb-4">
            Trusted by L&amp;D Leaders
          </SectionHeading>
          <SectionSubheading className="mx-auto text-center">
            Hear from the CHROs and L&D heads who transformed their
            organizations.
          </SectionSubheading>
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </SectionWrapper>

      {/* Partners marquee */}
      <SectionWrapper
        id="partners"
        tight
        className="border-y border-white/6 overflow-hidden"
      >
        <p className="text-center text-xs text-slate-500 uppercase tracking-widest mb-8">
          Academic &amp; Institutional Partners
        </p>
        <div className="relative overflow-hidden">
          <div className="animate-marquee flex gap-10 w-max">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-6 py-3 glass rounded-xl whitespace-nowrap"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600/15 flex items-center justify-center text-xs font-bold text-blue-400">
                  {p.short.slice(0, 2)}
                </div>
                <span className="text-sm font-semibold text-slate-300">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
