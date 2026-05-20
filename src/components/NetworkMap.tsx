"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Hotspot {
  label: string;
  country: string;
  top: string;
  left: string;
}

const hotspots: Hotspot[] = [
  { label: "HKG", country: "Hong Kong", top: "42%", left: "72%" },
  { label: "GZH", country: "Guangzhou", top: "38%", left: "70%" },
  { label: "SZH", country: "Shenzhen", top: "41%", left: "71%" },
  { label: "SHA", country: "Shanghai", top: "34%", left: "74%" },
  { label: "PEK", country: "Beijing", top: "27%", left: "72%" },
  { label: "TPE", country: "Taipei", top: "43%", left: "77%" },
  { label: "ICN", country: "Seoul", top: "29%", left: "78%" },
  { label: "TYO", country: "Tokyo", top: "31%", left: "83%" },
  { label: "OSA", country: "Osaka", top: "33%", left: "82%" },
  { label: "BKK", country: "Bangkok", top: "52%", left: "62%" },
  { label: "SGN", country: "Ho Chi Minh", top: "53%", left: "66%" },
  { label: "SIN", country: "Singapore", top: "60%", left: "65%" },
  { label: "KUL", country: "Kuala Lumpur", top: "58%", left: "63%" },
  { label: "CGK", country: "Jakarta", top: "65%", left: "67%" },
  { label: "MNL", country: "Manila", top: "52%", left: "75%" },
  { label: "RGN", country: "Yangon", top: "48%", left: "58%" },
  { label: "DAC", country: "Dhaka", top: "43%", left: "53%" },
  { label: "BOM", country: "Mumbai", top: "47%", left: "46%" },
  { label: "DEL", country: "Delhi", top: "38%", left: "47%" },
  { label: "CMB", country: "Colombo", top: "56%", left: "50%" },
  { label: "DXB", country: "Dubai", top: "40%", left: "34%" },
  { label: "SYD", country: "Sydney", top: "80%", left: "83%" },
];

export function NetworkMap() {
  const [activeSpot, setActiveSpot] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#12137E]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-white/60 text-sm font-bold uppercase tracking-[4px] mb-3">
            Worldwide Reach
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Our Global Network
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-white/40" />
          </div>
        </div>

        {/* Map Container */}
        <div className="relative w-full max-w-[1000px] mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.rslog.com/wp-content/uploads/2024/06/new-map-img-01.png"
            alt="RS Logistics Global Network Map"
            className="w-full h-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).style.opacity = "0.3";
            }}
          />

          {/* Hotspots */}
          {hotspots.map((spot) => (
            <button
              key={spot.label}
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
              style={{ top: spot.top, left: spot.left }}
              onMouseEnter={() => setActiveSpot(spot.label)}
              onMouseLeave={() => setActiveSpot(null)}
              aria-label={spot.country}
            >
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-full bg-white/30 animate-ping scale-150" />
              {/* Dot */}
              <span
                className={cn(
                  "relative block w-3 h-3 rounded-full border-2 border-white transition-all duration-200",
                  activeSpot === spot.label
                    ? "bg-white scale-125"
                    : "bg-[#12137E]"
                )}
              />
              {/* Tooltip */}
              {activeSpot === spot.label && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white text-[#12137E] text-xs font-bold px-2 py-1 whitespace-nowrap shadow-lg">
                  {spot.country}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Countries List */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {hotspots.map((spot) => (
            <div
              key={spot.label}
              className="flex items-center gap-2 text-white/80 text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-white/60 shrink-0" />
              {spot.country}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
