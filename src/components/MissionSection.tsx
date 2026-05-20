export function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        {/* Quote icon */}
        <div className="flex justify-center mb-6">
          <svg
            width="60"
            height="44"
            viewBox="0 0 60 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-20"
          >
            <path
              d="M0 44V26.4C0 18.9333 1.73333 12.8 5.2 8C8.8 3.06667 14.2667 0.133333 21.6 0V8.8C18.5333 9.46667 16.1333 10.9333 14.4 13.2C12.8 15.4667 12 18.2667 12 21.6H21.6V44H0ZM38.4 44V26.4C38.4 18.9333 40.1333 12.8 43.6 8C47.2 3.06667 52.6667 0.133333 60 0V8.8C56.9333 9.46667 54.5333 10.9333 52.8 13.2C51.2 15.4667 50.4 18.2667 50.4 21.6H60V44H38.4Z"
              fill="#12137E"
            />
          </svg>
        </div>

        {/* Label */}
        <p className="text-[#12137E] text-sm font-bold uppercase tracking-[4px] mb-5">
          Our Mission
        </p>

        {/* Tagline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light italic text-gray-700 leading-relaxed max-w-[780px] mx-auto">
          To provide{" "}
          <span className="font-semibold not-italic text-[#12137E]">
            innovative and reliable
          </span>{" "}
          logistics solutions that empower our clients&apos; businesses to thrive in
          the global marketplace, while fostering{" "}
          <span className="font-semibold not-italic text-[#12137E]">
            sustainable growth
          </span>{" "}
          and excellence in every shipment.
        </h2>

        {/* Divider */}
        <div className="mt-10 flex justify-center">
          <div className="w-16 h-1 bg-[#12137E]" />
        </div>
      </div>
    </section>
  );
}
