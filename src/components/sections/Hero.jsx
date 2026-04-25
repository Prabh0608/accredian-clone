"use client";

import { motion } from "framer-motion";
import { IMAGES } from "@/lib/data";
import { useEnquiryModal } from "@/components/common/EnquiryModal";

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const { openModal } = useEnquiryModal();

  return (
    <motion.div
      id="home"
      className="my-4 mt-20 mb-10 flex items-center justify-center sm:mt-32 md:mb-0 sm:px-4 xl:px-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="flex flex-col-reverse items-center justify-center gap-4 overflow-visible rounded-lg bg-blue-50 shadow-card transition-colors dark:bg-slate-900 sm:flex-row sm:justify-between sm:gap-4 md:gap-8 md:rounded-3xl lg:gap-12">
        <motion.div
          variants={sectionVariants}
          className="flex w-full flex-col justify-between gap-4 sm:ml-7 sm:w-1/2 sm:gap-4 md:gap-8 md:ps-2 lg:gap-10 lg:ps-8 laptop:w-[52%] laptop:gap-6 laptop:py-10"
        >
          <motion.h1
            variants={itemVariants}
            className="cursor-context-menu px-8 pt-2 text-center font-circular text-2xl font-bold capitalize text-slate-900 dark:text-white sm:max-w-[350px] sm:px-0 sm:text-left sm:text-4xl lg:max-w-[700px] lg:text-6xl xxl:text-6xl 2xl:text-[5.2vw] 3xl:text-[5rem]"
          >
            <span className="block sm:whitespace-nowrap">
              Next-Gen <span className="text-universal">Expertise</span>
            </span>
            <span className="block sm:whitespace-nowrap">
              For Your <span className="text-universal">Enterprise</span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="w-full max-w-full p-2 text-center font-circular text-sm font-bold text-paleBlack dark:text-slate-300 sm:max-w-[350px] sm:p-0 sm:text-start sm:text-lg md:font-normal lg:text-xl"
          >
            Cultivate high-performance teams through expert learning.
          </motion.p>

          <motion.ul
            variants={sectionVariants}
            className="mx-auto grid grid-cols-2 gap-4 text-slate-800 dark:text-slate-100 sm:mx-0 sm:flex sm:flex-wrap sm:justify-start laptop:gap-x-5 laptop:gap-y-3 laptop:text-[0.97rem]"
          >
            {["Tailored Solutions", "Industry Insights", "Expert Guidance"].map(
              (item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  className="mb-2 flex items-center gap-2"
                >
                  <CircleCheck />
                  {item}
                </motion.li>
              ),
            )}
            <motion.li
              variants={itemVariants}
              className="mb-2 flex items-center gap-2 sm:hidden"
            >
              <CircleCheck />
              Measurable Impact
            </motion.li>
          </motion.ul>

          <motion.div
            variants={itemVariants}
            className="mb-6 flex justify-center sm:mb-0 sm:justify-start"
          >
            <motion.button
              type="button"
              onClick={openModal}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-[80%] rounded-lg bg-universal p-[7px] text-md font-normal text-white shadow-md transition hover:brightness-110 sm:w-[170px] laptop:w-[190px] laptop:py-[10px]"
            >
              <p className="text-sm md:text-xl">Enquire Now</p>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex w-full justify-center sm:w-1/2 sm:items-end sm:justify-end laptop:w-[48%] laptop:self-stretch"
        >
          <img
            src={IMAGES.hero}
            alt="headerImage"
            className="h-[80%] w-[80%] max-w-[650px] object-contain sm:h-full sm:w-full laptop:max-w-[560px] laptop:self-end"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function CircleCheck() {
  return (
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
      className="h-6 w-6 text-green-600"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
