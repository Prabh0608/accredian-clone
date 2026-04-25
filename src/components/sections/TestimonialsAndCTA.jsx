"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";

// ── Testimonials ──────────────────────────────────────────────────────────────
export function Testimonials() {
  const [isMobile, setIsMobile] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesPerView = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, testimonials.length - slidesPerView);

  useEffect(() => {
    setActive((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  return (
    <div
      id="testimonials"
      className="testimonials w-full mt-16 sm:mt-20 flex flex-col items-center"
    >
      <div className="text-center mb-10 mx-2">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Testimonials from <span className="text-universal">Our Partners</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          What <span className="text-universal">Our Clients</span> Are Saying
        </p>
      </div>

      <div className="w-full px-4">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: "10px",
                transform: `translateX(-${active * (100 / slidesPerView)}%)`,
              }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.alt}
                  className="flex h-auto flex-shrink-0"
                  style={{
                    width: isMobile
                      ? "100%"
                      : "calc((100% - 10px) / 2)",
                  }}
                >
                  <div className="bg-white border border-gray-300 rounded-xl p-6 flex flex-row items-center w-full min-h-[250px] flex-grow">
                    <div className="w-full flex flex-col justify-start items-start pl-6 h-full">
                      <div className="h-16 mb-4 flex items-center gap-4">
                        <img
                          loading="lazy"
                          className="h-14 w-14 object-contain"
                          src={t.logo}
                          alt={t.alt}
                        />
                      </div>
                      <p className="text-neutral-600 text-base font-light">
                        {t.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === active ? "bg-universal" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Support / CTA Section ─────────────────────────────────────────────────────
export function SupportCTA() {
  return (
    <div
      id="supportSection"
      className="cta flex justify-center w-full mt-16 sm:mt-24 xl:px-12 px-4"
    >
      <div className="cta-grad border border-universal w-full max-w-[85rem] py-8 md:py-16 md:px-12 px-6 bg-universal rounded-xl flex items-center md:justify-between md:flex-row flex-col gap-6">
        <div className="flex gap-8 md:flex-row flex-col md:items-start items-center">
          {/* Headphone icon */}
          <div className="w-20 h-20 flex-shrink-0 bg-slate-200/35 rounded-xl p-1">
            <div className="w-full h-full bg-white rounded-xl p-2">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-full h-full text-universal"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 8C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8H21ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z" />
              </svg>
            </div>
          </div>

          <div className="md:text-start text-center">
            <h1 className="text-xl md:text-3xl font-semibold text-white font-circular">
              Want to Learn More About Our Training Solutions?
            </h1>
            <h4 className="text-base hidden sm:block md:text-lg mt-2 max-w-xl font-medium text-neutral-100 font-circular">
              Get Expert Guidance for Your Team&apos;s Success!
            </h4>
          </div>
        </div>

        <button className="cta-button w-full max-w-[200px] py-2 sm:px-4 sm:py-3 mt-4 rounded-lg text-blue-500 bg-white text-xl font-semibold flex items-center justify-center gap-1 font-circular">
          Contact Us
          <svg
            fill="currentColor"
            viewBox="0 0 512 512"
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
