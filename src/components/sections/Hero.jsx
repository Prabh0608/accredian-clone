"use client";

import { IMAGES } from "@/lib/data";
import { useEnquiryModal } from "@/components/common/EnquiryModal";

export default function Hero() {
  const { openModal } = useEnquiryModal();

  return (
    <div
      id="home"
      className="flex justify-center items-center my-4 mt-20 sm:mt-32 xl:px-12 sm:px-4 mb-10 md:mb-0"
    >
      <div className="flex flex-col-reverse items-center justify-center gap-4 overflow-visible rounded-lg bg-blue-50 shadow-card transition-colors dark:bg-slate-900 sm:flex-row sm:justify-between sm:gap-4 md:gap-8 md:rounded-3xl lg:gap-12">
        <div className="w-full sm:w-1/2 laptop:w-[52%] sm:ml-7 flex flex-col justify-between gap-4 sm:gap-4 md:gap-8 laptop:gap-6 lg:gap-10 md:ps-2 lg:ps-8 laptop:py-10">
          <h1 className="cursor-context-menu px-8 pt-2 text-center font-circular text-2xl font-bold capitalize text-slate-900 dark:text-white sm:max-w-[350px] sm:px-0 sm:text-left sm:text-4xl lg:max-w-[700px] lg:text-6xl xxl:text-6xl 2xl:text-[5.2vw] 3xl:text-[5rem]">
            <span className="sm:whitespace-nowrap block">
              Next-Gen <span className="text-universal">Expertise</span>
            </span>
            <span className="block sm:whitespace-nowrap">
              For Your <span className="text-universal">Enterprise</span>
            </span>
          </h1>

          <p className="w-full max-w-full p-2 text-center font-circular text-sm font-bold text-paleBlack dark:text-slate-300 sm:max-w-[350px] sm:p-0 sm:text-start sm:text-lg md:font-normal lg:text-xl">
            Cultivate high-performance teams through expert learning.
          </p>

          <ul className="mx-auto grid grid-cols-2 gap-4 text-slate-800 dark:text-slate-100 sm:mx-0 sm:flex sm:flex-wrap sm:justify-start laptop:gap-x-5 laptop:gap-y-3 laptop:text-[0.97rem]">
            {["Tailored Solutions", "Industry Insights", "Expert Guidance"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2 mb-2">
                  <CircleCheck />
                  {item}
                </li>
              ),
            )}
            {/* "Measurable Impact" — visible only on mobile */}
            <li className="flex items-center gap-2 mb-2 sm:hidden">
              <CircleCheck />
              Measurable Impact
            </li>
          </ul>

          <div className="flex mb-6 sm:mb-0 justify-center sm:justify-start">
            <button
              type="button"
              onClick={openModal}
              className="w-[80%] rounded-lg bg-universal p-[7px] text-md font-normal text-white shadow-md transition hover:brightness-110 sm:w-[170px] laptop:w-[190px] laptop:py-[10px]"
            >
              <p className="text-sm md:text-xl">Enquire Now</p>
            </button>
          </div>
        </div>

        <div className="flex w-full sm:w-1/2 laptop:w-[48%] sm:justify-end sm:items-end justify-center laptop:self-stretch">
          <img
            src={IMAGES.hero}
            alt="headerImage"
            className="sm:w-full sm:h-full h-[80%] w-[80%] max-w-[650px] laptop:max-w-[560px] object-contain laptop:self-end"
          />
        </div>
      </div>
    </div>
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
      className="w-6 h-6 text-green-600"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
