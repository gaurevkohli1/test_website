"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryItem {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
}

interface Tab {
  label: string;
  items: GalleryItem[];
}

const tabs: Tab[] = [
  {
    label: "20th Anniversary",
    items: [
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0001.jpg",
        alt: "20th Anniversary celebration",
        span: "wide",
      },
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0002.jpg",
        alt: "Anniversary event",
      },
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0003.jpg",
        alt: "Team gathering",
      },
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0004.jpg",
        alt: "Anniversary dinner",
      },
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0005.jpg",
        alt: "Award ceremony",
      },
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0006.jpg",
        alt: "Group photo",
      },
    ],
  },
  {
    label: "Leisure Activities",
    items: [
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0003.jpg",
        alt: "Team outing",
        span: "wide",
      },
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0004.jpg",
        alt: "Sports day",
      },
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0005.jpg",
        alt: "Hiking activity",
      },
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0006.jpg",
        alt: "Team building",
      },
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0007.jpg",
        alt: "Fun activities",
      },
    ],
  },
  {
    label: "Networking Events",
    items: [
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0005.jpg",
        alt: "Industry conference",
        span: "wide",
      },
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0006.jpg",
        alt: "Business networking",
      },
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0007.jpg",
        alt: "Trade show",
      },
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0001.jpg",
        alt: "Partnership event",
      },
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0002.jpg",
        alt: "Forum attendance",
      },
    ],
  },
  {
    label: "Offices Updates",
    items: [
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0007.jpg",
        alt: "New office opening",
        span: "wide",
      },
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0001.jpg",
        alt: "Office renovation",
      },
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0002.jpg",
        alt: "Workspace",
      },
      {
        src: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0003.jpg",
        alt: "Office environment",
      },
    ],
  },
];

export function LifeInRS() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#12137E] text-sm font-bold uppercase tracking-[4px] mb-3">
            Culture & People
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-800"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Life in RS
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-[#12137E]" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-0 mb-10 border-b border-gray-200">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={cn(
                "px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-200 border-b-2 -mb-px",
                i === activeTab
                  ? "text-[#12137E] border-[#12137E]"
                  : "text-gray-500 border-transparent hover:text-[#12137E]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {current.items.map((item, i) => (
            <div
              key={i}
              className={cn(
                "relative overflow-hidden group",
                item.span === "wide" ? "col-span-2 h-[280px]" : "h-[200px]"
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#12137E]/0 group-hover:bg-[#12137E]/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-10">
          <a
            href="/life-in-rs"
            className="inline-block px-10 py-3 bg-[#12137E] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#0e0f6a] transition-colors duration-200"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
