"use client";

import { useEffect, useState } from "react";
import { navLinks, IMAGES } from "@/lib/data";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let i = 0; i < navLinks.length; i += 1) {
        const section = document.getElementById(navLinks[i].id);

        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;

          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white py-6 px-6 shadow-md transition-colors dark:bg-slate-900 md:px-14">
      <div className="max-w-[85rem] mx-auto flex justify-between items-center">
        <img
          src={IMAGES.logo}
          alt="logo"
          className="h-[32px] w-[124px] dark:brightness-0 dark:invert"
        />

        <div className="flex items-center gap-6">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full bg-gray-100 p-2 text-slate-900 ring-universal transition-all hover:ring-2 dark:bg-gray-800 dark:text-white"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          <ul className="hidden md:flex justify-end items-center flex-1 space-x-8">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`text-[16px] font-circular font-normal cursor-pointer ${
                  activeSection === link.id
                    ? "text-universal font-semibold border-b-[3px] border-universal"
                    : "text-black dark:text-white"
                }`}
              >
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>

          <div className="md:hidden flex items-center">
            {menuOpen ? (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-8 w-8 cursor-pointer text-black dark:text-white"
                onClick={() => setMenuOpen(false)}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 6 6 18M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-8 w-8 cursor-pointer text-black dark:text-white"
                onClick={() => setMenuOpen(true)}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}

            <div
              className={`${
                menuOpen ? "flex" : "hidden"
              } absolute top-[88px] right-5 rounded-xl bg-white p-6 shadow-lg dark:bg-slate-900`}
            >
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className="cursor-pointer text-[16px] font-circular text-black dark:text-white"
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`${
                        activeSection === link.id
                          ? "text-universal font-semibold border-b-[2px] border-universal"
                          : "text-black dark:text-white"
                      }`}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
