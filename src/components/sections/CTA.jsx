"use client";

import { useState } from "react";
import { industries, teamSizes } from "@/lib/data";
import SectionWrapper, {
  SectionLabel,
  SectionHeading,
} from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const INITIAL = {
  name: "",
  email: "",
  company: "",
  phone: "",
  industry: "",
  teamSize: "",
  message: "",
};

export default function CTA() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handle = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <SectionWrapper
      id="contact"
      className="bg-gradient-to-b from-[#0B1221] to-[#091018]"
    >
      {/* Top ribbon CTA */}
      <div
        className="relative rounded-3xl overflow-hidden mb-16 p-10 md:p-14 text-center"
        style={{
          background:
            "linear-gradient(135deg, #1E3A5F 0%, #1a2f50 50%, #162845 100%)",
        }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <p className="text-sky text-sm font-semibold uppercase tracking-widest mb-3">
            Join 500+ Enterprises
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Our L&D consultants will map your skill gaps, business goals, and
            build a tailored learning roadmap — completely free.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "✓ No credit card required",
              "✓ Dedicated success manager",
              "✓ Results in 90 days",
            ].map((t) => (
              <span
                key={t}
                className="text-sm text-slate-300 bg-white/5 border border-white/10 rounded-full px-4 py-1.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Lead form */}
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <SectionLabel>Get Started</SectionLabel>
          <SectionHeading>Book a Free Consultation</SectionHeading>
        </div>

        {status === "success" ? (
          <div className="glass rounded-3xl p-14 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3
              className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We&apos;ve received your request!
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              A dedicated learning consultant will reach out within 24 hours.
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setStatus("idle")}
            >
              Submit another
            </Button>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="glass rounded-3xl p-8 md:p-10 space-y-5"
          >
            {/* Row 1 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Full Name *"
                name="name"
                value={form.name}
                onChange={handle}
                required
                placeholder="Rajesh Kumar"
              />
              <Field
                label="Work Email *"
                name="email"
                type="email"
                value={form.email}
                onChange={handle}
                required
                placeholder="rajesh@company.com"
              />
            </div>

            {/* Row 2 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Company *"
                name="company"
                value={form.company}
                onChange={handle}
                required
                placeholder="Acme Corp"
              />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handle}
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Row 3 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <SelectField
                label="Industry"
                name="industry"
                value={form.industry}
                onChange={handle}
                options={industries}
              />
              <SelectField
                label="Team Size"
                name="teamSize"
                value={form.teamSize}
                onChange={handle}
                options={teamSizes}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide">
                Tell us about your goals
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handle}
                rows={3}
                placeholder="We want to upskill our data team in AI/ML..."
                className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors resize-none"
              />
            </div>

            {errorMsg && (
              <p className="text-red-400 text-sm text-center">{errorMsg}</p>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />{" "}
                  Submitting…
                </>
              ) : (
                <>Book Free Consultation →</>
              )}
            </Button>

            <p className="text-center text-xs text-slate-600">
              By submitting you agree to our{" "}
              <a href="#" className="text-sky hover:underline">
                Privacy Policy
              </a>
              . No spam, ever.
            </p>
          </form>
        )}
      </div>
    </SectionWrapper>
  );
}

/* ── Sub-components ──────────────────────────────────────────────────────── */
function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors"
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-[#0B1221] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
