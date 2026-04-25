"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";
import { useEnquiryModal } from "@/components/common/EnquiryModal";

const sectionVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

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
    <motion.div
      id="testimonials"
      className="testimonials mt-16 flex w-full flex-col items-center sm:mt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={itemVariants} className="mx-2 mb-10 text-center">
        <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-4xl">
          Testimonials from <span className="text-universal">Our Partners</span>
        </h2>
        <p className="mt-3 text-sm text-gray-700 sm:text-lg">
          What <span className="text-universal">Our Clients</span> Are Saying
        </p>
      </motion.div>

      <div className="w-full px-4">
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              variants={sectionVariants}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: "10px",
                transform: `translateX(-${active * (100 / slidesPerView)}%)`,
              }}
            >
              {testimonials.map((t) => (
                <motion.div
                  key={t.alt}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="flex h-auto flex-shrink-0"
                  style={{
                    width: isMobile ? "100%" : "calc((100% - 10px) / 2)",
                  }}
                >
                  <div className="flex min-h-[250px] w-full flex-grow flex-row items-center rounded-xl border border-gray-300 bg-white p-6 transition-shadow duration-300 hover:shadow-xl">
                    <div className="flex h-full w-full flex-col items-start justify-start pl-6">
                      <div className="mb-4 flex h-16 items-center gap-4">
                        <img
                          loading="lazy"
                          className="h-14 w-14 object-contain"
                          src={t.logo}
                          alt={t.alt}
                        />
                      </div>
                      <p className="text-base font-light text-neutral-600">
                        {t.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === active ? "bg-universal" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function SupportCTA() {
  const { openModal } = useEnquiryModal();

  return (
    <motion.div
      id="supportSection"
      className="cta mt-16 flex w-full justify-center px-4 sm:mt-24 xl:px-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        variants={sectionVariants}
        className="cta-grad flex w-full max-w-[85rem] flex-col items-center gap-7 rounded-2xl border border-universal bg-universal px-6 py-9 shadow-[0_20px_55px_rgba(29,78,216,0.22)] md:flex-row md:items-center md:justify-between md:px-12 md:py-14"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-8 md:flex-row md:items-start"
        >
          <motion.div
            whileHover={{ rotate: -4, scale: 1.03 }}
            className="h-20 w-20 flex-shrink-0 rounded-xl bg-slate-200/35 p-1"
          >
            <div className="h-full w-full rounded-xl bg-white p-2">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-full w-full text-universal"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 8C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8H21ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z" />
              </svg>
            </div>
          </motion.div>

          <div className="text-center md:text-start">
            <h1 className="font-circular text-xl font-semibold text-white md:text-[2rem]">
              Want to Learn More About Our Training Solutions?
            </h1>
            <h4 className="mt-2 hidden max-w-xl font-circular text-base font-medium text-neutral-100 sm:block md:text-lg">
              Get Expert Guidance for Your Team&apos;s Success!
            </h4>
          </div>
        </motion.div>

        <motion.button
          variants={itemVariants}
          type="button"
          onClick={openModal}
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="cta-button mt-2 flex w-full max-w-[250px] items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-circular text-xl font-semibold text-blue-600 shadow-[0_14px_34px_rgba(255,255,255,0.22)] transition hover:bg-slate-50 md:mt-0 md:self-center"
        >
          Contact Us
          <svg
            fill="currentColor"
            viewBox="0 0 512 512"
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
          </svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
