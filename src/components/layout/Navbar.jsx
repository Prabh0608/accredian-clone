"use client";

import { useEffect, useState } from "react";
import { navLinks, IMAGES } from "@/lib/data";

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

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md py-6 px-6 md:px-14">
      <div className="max-w-[85rem] mx-auto flex justify-between items-center">
        <img src={IMAGES.logo} alt="logo" className="w-[124px] h-[32px]" />

        <ul className="hidden md:flex justify-end items-center flex-1 space-x-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`text-[16px] font-circular font-normal cursor-pointer ${
                activeSection === link.id
                  ? "text-universal font-semibold border-b-[3px] border-universal"
                  : "text-black"
              }`}
            >
              <a
                href={link.href}
              >
                {link.title}
              </a>
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
              className="w-8 h-8 text-black cursor-pointer"
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
              className="w-8 h-8 text-black cursor-pointer"
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
            } absolute top-[88px] right-5 bg-white shadow-lg p-6 rounded-xl`}
          >
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-[16px] font-circular text-black cursor-pointer"
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`${
                      activeSection === link.id
                        ? "text-universal font-semibold border-b-[2px] border-universal"
                        : "text-black"
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
    </nav>
  );
}
