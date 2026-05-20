"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  description: string;
  image: string;
  href: string;
}

const services: Service[] = [
  {
    title: "Freight Forwarding",
    description:
      "We offer comprehensive sea, air, and land freight forwarding services with competitive rates and reliable transit times to destinations worldwide.",
    image: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0001.jpg",
    href: "/services/freight-forwarding",
  },
  {
    title: "Custom Clearance",
    description:
      "Our expert customs brokers handle all customs documentation and clearance procedures, ensuring smooth and compliant import and export operations.",
    image: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0002.jpg",
    href: "/services/custom-clearance",
  },
  {
    title: "Trucking",
    description:
      "Reliable trucking and transportation services across the region, with a dedicated fleet and experienced drivers to ensure timely deliveries.",
    image: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0003.jpg",
    href: "/services/trucking",
  },
  {
    title: "Project Cargo",
    description:
      "Specialized handling of oversized, heavy-lift, and high-value cargo with custom engineering solutions and expert project management.",
    image: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0004.jpg",
    href: "/services/project-cargo",
  },
  {
    title: "Warehousing",
    description:
      "State-of-the-art warehousing facilities with advanced inventory management systems, providing secure and efficient storage solutions.",
    image: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0005.jpg",
    href: "/services/warehousing",
  },
  {
    title: "Courier Services",
    description:
      "Fast and reliable door-to-door courier and express delivery services for time-sensitive documents and parcels domestically and internationally.",
    image: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0006.jpg",
    href: "/services/courier-services",
  },
  {
    title: "Supply Chain Management",
    description:
      "End-to-end supply chain optimization and management, leveraging technology and expertise to streamline your operations and reduce costs.",
    image: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0007.jpg",
    href: "/services/supply-chain",
  },
];

export function ServicesCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visible = 4;

  const canPrev = startIndex > 0;
  const canNext = startIndex + visible < services.length;

  const prev = () => {
    if (canPrev) setStartIndex((i) => i - 1);
  };
  const next = () => {
    if (canNext) setStartIndex((i) => i + 1);
  };

  const visibleServices = services.slice(startIndex, startIndex + visible);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#12137E] text-sm font-bold uppercase tracking-[4px] mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800"
              style={{ fontFamily: "Raleway, sans-serif" }}>
            Our Services
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-[#12137E]" />
          </div>
        </div>

        {/* Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {visibleServices.map((service) => (
              <div
                key={service.title}
                className="bg-white shadow-md group overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#12137E]/0 group-hover:bg-[#12137E]/20 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-3"
                      style={{ fontFamily: "Raleway, sans-serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
                    {service.description}
                  </p>
                  <a
                    href={service.href}
                    className="text-[13px] font-bold text-[#12137E] uppercase tracking-wide hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-3 mt-10">
            <button
              onClick={prev}
              disabled={!canPrev}
              className={cn(
                "w-10 h-10 flex items-center justify-center border transition-colors duration-200",
                canPrev
                  ? "border-[#12137E] text-[#12137E] hover:bg-[#12137E] hover:text-white"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              )}
              aria-label="Previous services"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              className={cn(
                "w-10 h-10 flex items-center justify-center border transition-colors duration-200",
                canNext
                  ? "border-[#12137E] text-[#12137E] hover:bg-[#12137E] hover:text-white"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              )}
              aria-label="Next services"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
