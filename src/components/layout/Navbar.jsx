"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#0B1221]/90 backdrop-blur-lg border-b border-white/6 shadow-2xl"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-lg bg-electric flex items-center justify-center text-white font-bold text-sm"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A
          </div>
          <span
            className="text-lg font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Accredian
            <span className="ml-1 text-xs font-medium text-sky border border-sky/30 rounded px-1.5 py-0.5">
              ENTERPRISE
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="secondary" size="sm">
            Sign In
          </Button>
          <Button variant="primary" size="sm" href="#contact">
            Get a Demo
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1.5">
            <span
              className={`block h-0.5 bg-current transition-all duration-200 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 bg-[#0B1221]/95 border-t border-white/6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-slate-300 hover:text-white border-b border-white/5 text-sm"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 mt-4">
            <Button
              variant="secondary"
              size="sm"
              className="flex-1 justify-center"
            >
              Sign In
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              className="flex-1 justify-center"
            >
              Get a Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
