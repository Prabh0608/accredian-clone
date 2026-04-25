import { IMAGES } from "@/lib/data";

export default function Hero() {
  return (
    <div
      id="home"
      className="flex justify-center items-center my-4 mt-20 sm:mt-32 xl:px-12 sm:px-4 mb-10 md:mb-0"
    >
      <div className="rounded-lg md:rounded-3xl bg-blue-50 flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-4 md:gap-8 lg:gap-12 shadow-card overflow-visible w-full">
        {/* Left: text */}
        <div className="sm:w-1/2 w-full sm:ml-7 flex flex-col justify-between gap-4 sm:gap-4 md:gap-8 lg:gap-10 md:ps-2 lg:ps-8">
          <h1 className="text-center sm:text-left cursor-context-menu text-2xl sm:text-4xl lg:text-6xl xxl:text-7xl 2xl:text-[5.2vw] 3xl:text-[5.0rem] font-bold max-w-full sm:max-w-[350px] lg:max-w-[700px] pt-2 capitalize px-8 sm:px-0 font-circular">
            Next-Gen <span className="text-universal">Expertise</span> for Your
            <span className="text-universal"> Enterprise</span>
          </h1>

          <p className="font-medium md:font-normal text-sm sm:text-lg lg:text-2xl text-paleBlack max-w-full p-2 sm:p-0 w-full sm:max-w-[350px] text-center sm:text-start font-circular">
            Cultivate high-performance teams through expert learning.
          </p>

          <ul className="grid grid-cols-2 mx-auto sm:flex sm:mx-0 sm:justify-start sm:flex-wrap gap-4">
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
            <button className="w-[80%] sm:w-[170px] p-[7px] text-md font-normal text-white bg-universal rounded-lg shadow-md">
              <p className="text-sm md:text-xl">Enquire Now</p>
            </button>
          </div>
        </div>

        {/* Right: hero image */}
        <div className="flex w-full sm:w-1/2 sm:justify-end sm:items-end justify-center">
          <img
            src={IMAGES.hero}
            alt="headerImage"
            className="sm:w-full sm:h-full h-[80%] w-[80%]"
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
