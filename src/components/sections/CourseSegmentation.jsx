"use client";

import { useState } from "react";
import { courseSlides, whoJoin, IMAGES } from "@/lib/data";

// ── Who Should Join Icons ────────────────────────────────────────────────────
const WhoIcons = {
  "monitor-check": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-monitor-check w-10 h-10 sm:w-14 sm:h-14 mb-2"
    >
      <path d="m9 10 2 2 4-4" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </svg>
  ),
  "monitor-x": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-monitor-x w-10 h-10 sm:w-14 sm:h-14 mb-2"
    >
      <path d="m14.5 12.5-5-5" />
      <path d="m9.5 12.5 5-5" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </svg>
  ),
  "graduation-cap": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-graduation-cap w-10 h-10 sm:w-14 sm:h-14 mb-2"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  ),
  briefcase: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-briefcase w-10 h-10 sm:w-14 sm:h-14 mb-2"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  ),
};

// ── Course Segmentation (Swiper-like manual carousel) ─────────────────────────
export function CourseSegmentation() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((p) => (p === 0 ? courseSlides.length - 1 : p - 1));
  const next = () =>
    setActive((p) => (p === courseSlides.length - 1 ? 0 : p + 1));

  return (
    <section className="mt-12 sm:mt-28 md:mx-16 mb-10 bg-white text-center font-circular">
      <div className="text-center mb-10 mx-2">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          Tailored <span className="text-universal">Course Segmentation</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1">
          Explore <span className="text-universal">Custom-fit Courses</span>{" "}
          Designed to Address Every Professional Focus
        </p>
      </div>

      <div className="relative px-6">
        {/* Cards container */}
        <div className="flex gap-6 overflow-hidden">
          {/* Show 2 cards on desktop, 1 on mobile */}
          {courseSlides.map((slide, idx) => {
            const isVisible =
              idx === active || idx === (active + 1) % courseSlides.length;

            return (
              <div
                key={slide.label}
                className={`transition-all duration-300 flex-shrink-0 ${
                  isVisible ? "block" : "hidden sm:block"
                } bg-white rounded-lg w-full sm:max-w-[600px] shadow-lg border border-gray-300`}
              >
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h4 className="text-2xl font-semibold text-universal p-6">
                  {slide.label}
                </h4>
              </div>
            );
          })}
        </div>

        {/* Prev / Next */}
        <button
          onClick={prev}
          disabled={active === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 text-universal disabled:opacity-30"
          aria-label="Previous"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={next}
          disabled={active === courseSlides.length - 1}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 text-universal disabled:opacity-30"
          aria-label="Next"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {courseSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === active ? "bg-universal" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Who Should Join ───────────────────────────────────────────────────────────
export function WhoShouldJoin() {
  return (
    <div className="mt-12 sm:mt-28 xl:px-6 px-4 lg:mx-10 bg-universal sm:rounded-lg flex flex-col md:flex-row">
      {/* Left */}
      <div className="md:w-1/2 pt-12 md:pl-6 text-white flex flex-col justify-between">
        <div>
          <h4 className="text-lg sm:text-xl font-medium">Who Should Join?</h4>
          <h1 className="text-2xl md:text-[40px] leading-[39px] capitalize mt-2 font-semibold">
            Strategic Skill Enhancement
          </h1>
        </div>
        <div className="w-[300px] justify-center hidden md:block">
          <img src={IMAGES.imageHuman} alt="Human Illustration" />
        </div>
      </div>

      {/* Right grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 py-12 text-white gap-10">
        {whoJoin.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 sm:gap-2 flex-row sm:flex-col"
          >
            {WhoIcons[item.icon]}
            <div>
              <h2 className="text-[16px] sm:text-[22px] font-semibold">
                {item.title}
              </h2>
              <p className="text-sm sm:text-md text-gray-200">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
