"use client";

import { useState } from "react";
import { navLinks, IMAGES } from "@/lib/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md py-6 px-6 md:px-14">
      <div className="max-w-[85rem] mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={IMAGES.logo} alt="logo" className="w-[124px] h-[32px]" />

        {/* Desktop nav */}
        <ul className="hidden md:flex justify-end items-center flex-1 space-x-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-[16px] font-circular font-normal cursor-pointer ${
                  link.active
                    ? "text-universal font-semibold border-b-[3px] border-universal"
                    : "text-black"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center relative">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="w-8 h-8 text-black cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>

          {/* Mobile dropdown */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute top-[48px] right-0 bg-white shadow-lg p-6 rounded-xl min-w-[200px] z-50`}
          >
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className="text-[16px] font-circular text-black cursor-pointer"
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={
                      link.active
                        ? "text-universal font-semibold border-b-[2px] border-universal"
                        : "text-black"
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
