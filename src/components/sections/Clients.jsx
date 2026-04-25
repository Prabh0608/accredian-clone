import { clients } from "@/lib/data";

export default function Clients() {
  return (
    <div id="clients" className="mt-8 sm:mt-28 xl:px-12 px-4 text-center">
      <div className="text-center mx-2">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Our Proven <span className="text-universal">Partnerships</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto">
          Successful Collaborations With the{" "}
          <span className="text-universal">Industry&apos;s Best</span>
        </p>
      </div>

      <div className="w-full flex justify-center items-center mt-2">
        {/* Desktop grid */}
        <ul className="hidden sm:grid grid-cols-3 md:grid-cols-6 xl:grid-cols-6 gap-6 md:gap-8 xl:gap-12">
          {clients.map((c) => (
            <li key={c.id} className="flex justify-center items-center sm:p-4">
              <img
                src={c.src}
                alt={c.alt}
                className={`object-contain ${
                  c.id === "client-3"
                    ? "w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40"
                    : c.id === "client-2"
                      ? "w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24"
                      : "w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Mobile marquee */}
        <div className="sm:hidden overflow-hidden relative w-full">
          <div className="flex mt-4 whitespace-nowrap animate-marquee">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="flex justify-center items-center px-8">
                <img
                  src={c.src}
                  alt={c.alt}
                  className="w-14 h-14 sm:w-20 sm:h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
