import { IMAGES } from "@/lib/data";

// ── Step icons ────────────────────────────────────────────────────────────────
function IconChartCombined() {
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
      className="lucide lucide-chart-no-axes-combined text-8xl"
    >
      <path d="M12 16v5" />
      <path d="M16 14v7" />
      <path d="M20 10v11" />
      <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
      <path d="M4 18v3" />
      <path d="M8 14v7" />
    </svg>
  );
}
function IconPresentation() {
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
      className="lucide lucide-presentation text-8xl"
    >
      <path d="M2 3h20" />
      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
      <path d="m7 21 5-5 5 5" />
    </svg>
  );
}
function IconMonitorPlay() {
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
      className="lucide lucide-monitor-play text-8xl"
    >
      <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
      <rect x="2" y="3" width="20" height="14" rx="2" />
    </svg>
  );
}

const steps = [
  {
    step: 1,
    icon: <IconChartCombined />,
    title: "Skill Gap Analysis",
    desc: "Assess team skill gaps and developmental needs.",
  },
  {
    step: 2,
    icon: <IconPresentation />,
    title: "Customized Training Plan",
    desc: "Create a tailored roadmap addressing organizational goals.",
  },
  {
    step: 3,
    icon: <IconMonitorPlay />,
    title: "Flexible Program Delivery",
    desc: "Deliver adaptable programs aligned with industry and organizational needs.",
  },
];

export function CatFramework() {
  return (
    <section
      id="cat"
      className="w-full mt-12 sm:mt-24 py-4 flex flex-col items-center second-bg-grad"
    >
      <div className="text-center mx-2">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          The <span className="text-universal">CAT Framework</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto">
          Our Proven Approach to{" "}
          <span className="text-universal">Learning Excellence</span>
        </p>
      </div>
      <div className="w-full flex justify-center mt-16">
        <img
          src={IMAGES.catV2}
          alt="Our Solutions"
          className="w-[90%] sm:w-[70%] h-auto rounded-lg"
        />
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="howItWorks" className="mt-12 sm:mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10 mx-2">
          <h2 className="text-2xl mx-1 md:text-4xl font-bold text-gray-900 leading-tight">
            How We <span className="text-universal">Deliver Results</span> That
            Matter?
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1">
            A Structured Three-Step Approach to{" "}
            <span className="text-universal">Skill Development</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 px-4">
          {steps.map(({ step, icon, title, desc }) => (
            <div
              key={step}
              className="relative bg-blue-50 border border-blue-300 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center max-w-[18rem] w-full"
            >
              {/* Side bars */}
              <div className="absolute left-[-4px] sm:left-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2 h-12 sm:h-36 bg-universal rounded-lg" />
              <div className="absolute right-[-4px] sm:right-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2 h-12 sm:h-36 bg-universal rounded-lg" />
              {/* Step number */}
              <div className="absolute left-[10px] top-6 -translate-y-1/2 w-6 h-6 border-blue-300 border-2 bg-white rounded-full font-circular flex justify-center items-center font-normal sm:font-bold text-center">
                <p>{step}</p>
              </div>
              {/* Icon circle */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-universal text-white rounded-full shadow-md">
                {icon}
              </div>
              <h3 className="text-md sm:text-lg font-normal sm:font-semibold text-gray-900 mt-4">
                {title}
              </h3>
              <p className="text-gray-600 hidden sm:block text-sm mt-2 max-w-[18rem]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
