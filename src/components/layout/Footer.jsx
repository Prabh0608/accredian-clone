const footerLinks = {
  Platform: [
    "Features",
    "Analytics Dashboard",
    "Custom Programs",
    "Integrations",
    "Security",
  ],
  Company: ["About Us", "Careers", "Blog", "Press", "Contact"],
  Resources: [
    "Case Studies",
    "Whitepapers",
    "Webinars",
    "Documentation",
    "Status",
  ],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-[#080F1A]">
      {/* Top grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-7 h-7 rounded-md bg-electric flex items-center justify-center text-white font-bold text-xs"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A
            </div>
            <span
              className="font-bold text-white text-sm"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Accredian Enterprise
            </span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-4">
            The complete operating system for enterprise learning.
          </p>
          <div className="flex gap-3">
            {["𝕏", "in", "▶"].map((s, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs text-slate-400 hover:border-sky/40 hover:text-sky transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              {group}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <span>
            © {new Date().getFullYear()} Accredian. All rights reserved.
          </span>
          <span className="flex items-center gap-1">
            Built with ❤️ in India &nbsp;·&nbsp; Partnered with IITs &amp; IIMs
          </span>
        </div>
      </div>
    </footer>
  );
}
