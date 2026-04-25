export default function SectionWrapper({
  children,
  id,
  className = "",
  tight = false,
}) {
  return (
    <section
      id={id}
      className={`relative w-full ${tight ? "py-16 md:py-20" : "py-20 md:py-28"} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky mb-4">
      <span className="w-5 h-px bg-sky" />
      {children}
      <span className="w-5 h-px bg-sky" />
    </span>
  );
}

export function SectionHeading({ children, className = "" }) {
  return (
    <h2
      className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${className}`}
      style={{ fontFamily: "var(--font-display)" }}
    >
      {children}
    </h2>
  );
}

export function SectionSubheading({ children, className = "" }) {
  return (
    <p className={`text-base md:text-lg text-slate-400 max-w-2xl ${className}`}>
      {children}
    </p>
  );
}
