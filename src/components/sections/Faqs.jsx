"use client";

import { useState } from "react";
import { faqCategories, faqs } from "@/lib/data";

function Accordion({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-2 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
        aria-expanded={open}
      >
        <h1 className="text-base sm:text-lg font-semibold text-gray-900">
          {q}
        </h1>
        <svg
          viewBox="0 0 24 24"
          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="currentColor"
        >
          <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-4 text-gray-600 text-sm sm:text-base leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]);

  return (
    <div
      id="faqs"
      className="w-full flex justify-center mt-16 sm:mt-16 md:py-12 xl:px-12 px-4"
    >
      <div className="w-full max-w-[85rem]">
        <div className="w-full">
          <h2 className="text-2xl mx-1 md:text-4xl font-bold text-gray-900 leading-tight">
            Frequently Asked <span className="text-universal">Questions</span>
          </h2>
        </div>

        <div className="flex gap-4 mt-8 md:mt-12 md:flex-row flex-col">
          {/* Category tabs */}
          <div className="w-full md:flex-[0.3] relative">
            <div className="no-scrollbar md:max-w-sm md:px-4 py-2 flex flex-row md:flex-col items-center gap-4 md:gap-6 max-w-[90vw] overflow-x-auto">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full max-w-[280px] rounded-md px-4 py-4 text-center cursor-pointer transition-all ${
                    activeCategory === cat
                      ? "drop-shadow-lg md:drop-shadow-xl bg-white border"
                      : "border-2 border-neutral-300"
                  }`}
                >
                  <h1
                    className={`text-sm whitespace-nowrap lg:text-lg font-semibold ${
                      activeCategory === cat
                        ? "text-universal"
                        : "text-neutral-500"
                    }`}
                  >
                    {cat}
                  </h1>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ accordion */}
          <div className="w-full md:flex-[0.7] md:px-4 flex flex-col">
            {(faqs[activeCategory] || []).map((item) => (
              <Accordion key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>

        {/* Enquire Now CTA */}
        <div className="flex justify-center mt-6">
          <button className="px-6 py-3 bg-universal text-white font-semibold rounded-lg shadow-md transition duration-300">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}
