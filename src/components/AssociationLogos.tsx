"use client";

interface AssociationLogo {
  name: string;
  src: string;
}

const logos: AssociationLogo[] = [
  {
    name: "FIATA",
    src: "https://www.rslog.com/wp-content/uploads/2024/04/FIATA.png",
  },
  {
    name: "IATA",
    src: "https://www.rslog.com/wp-content/uploads/2024/04/IATA.png",
  },
  {
    name: "AFFA",
    src: "https://www.rslog.com/wp-content/uploads/2024/04/AFFA.png",
  },
  {
    name: "HKFFEC",
    src: "https://www.rslog.com/wp-content/uploads/2024/04/HKFFEC.png",
  },
  {
    name: "HAFFA",
    src: "https://www.rslog.com/wp-content/uploads/2024/04/HAFFA.png",
  },
  {
    name: "FCASB",
    src: "https://www.rslog.com/wp-content/uploads/2024/04/FCASB.png",
  },
  {
    name: "TAPA",
    src: "https://www.rslog.com/wp-content/uploads/2024/04/TAPA.png",
  },
  {
    name: "CLA",
    src: "https://www.rslog.com/wp-content/uploads/2024/04/CLA.png",
  },
  {
    name: "WCA",
    src: "https://www.rslog.com/wp-content/uploads/2024/04/WCA.png",
  },
];

export function AssociationLogos() {
  // Duplicate for seamless infinite scroll
  const doubledLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 mb-10 text-center">
        <p className="text-[#12137E] text-sm font-bold uppercase tracking-[4px] mb-3">
          We Are Proud Members Of
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-800"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          Member of Association
        </h2>
        <div className="mt-4 flex justify-center">
          <div className="w-16 h-1 bg-[#12137E]" />
        </div>
      </div>

      {/* Scrolling strip */}
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll-logos gap-0">
          {doubledLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 w-[160px] mx-6 flex items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.name}
                className="h-[60px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    const span = document.createElement("span");
                    span.textContent = logo.name;
                    span.className =
                      "text-[#12137E] font-bold text-sm tracking-wide";
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
