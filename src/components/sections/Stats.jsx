import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <div
      id="stats"
      className="tools w-full overflow-hidden flex flex-col items-center mt-8 sm:mt-28 px-4 capitalize"
    >
      {/* Heading */}
      <div className="text-center mb-6 mx-2">
        <h2 className="text-2xl mx-1 sm:text-4xl font-bold text-gray-900 leading-tight">
          Our<span className="text-universal"> Track Record</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1">
          The Numbers Behind <span className="text-universal">Our Success</span>
        </p>
      </div>

      <div className="w-full flex justify-center p-4 text-center">
        <div>
          {/* Desktop */}
          <div className="hidden sm:flex justify-start p-4 gap-10 rounded-xl">
            {stats.map((s, i) => (
              <div
                key={s.value}
                className={`flex flex-col justify-start gap-4 items-center pr-4 ${
                  i < stats.length - 1 ? "border-r-2" : "border-r-0"
                }`}
              >
                <div className="text-2xl text-universal font-semibold w-24 h-15 bg-blue-100 p-2 rounded-full">
                  <h2>{s.value}</h2>
                </div>
                <div>
                  <p className="max-w-[300px]">{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="sm:hidden grid grid-cols-1 p-4 gap-10 rounded-xl">
            {stats.map((s, i) => (
              <div
                key={s.value}
                className={`flex justify-start items-center text-left gap-4 pb-4 ${
                  i < stats.length - 1 ? "border-b-2" : "border-b-0"
                }`}
              >
                <div className="flex justify-center items-center text-universal text-center font-semibold w-full max-w-[70px] bg-blue-100 p-2 rounded-full">
                  <h2 className="text-md md:text-2xl">{s.value}</h2>
                </div>
                <div>
                  <p className="text-md md:text-2xl">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
