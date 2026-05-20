"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide {
  bg: string;
  heading: string;
  subheading: string;
  text: string;
}

const slides: Slide[] = [
  {
    bg: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0001.jpg",
    heading: "RS LOGISTICS",
    subheading: "Your Trusted Logistics Partner",
    text: "We provide comprehensive logistics solutions tailored to your business needs, delivering excellence across the Asia-Pacific region.",
  },
  {
    bg: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0002.jpg",
    heading: "RS LOGISTICS",
    subheading: "Global Network, Local Expertise",
    text: "With an extensive network spanning over 20 countries, we connect businesses to markets worldwide with precision and reliability.",
  },
  {
    bg: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0003.jpg",
    heading: "RS LOGISTICS",
    subheading: "End-to-End Supply Chain Solutions",
    text: "From freight forwarding to custom clearance and warehousing, we manage every step of your supply chain with expertise.",
  },
  {
    bg: "https://www.rslog.com/wp-content/uploads/2024/05/slider-img-0004.jpg",
    heading: "RS LOGISTICS",
    subheading: "Excellence in Every Shipment",
    text: "Our dedicated team ensures your cargo arrives safely, on time, and with full transparency throughout the journey.",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent((index + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden mt-[70px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#12137E]/70" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full">
              <div
                className={cn(
                  "max-w-[650px] transition-all duration-700 delay-200",
                  index === current
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                )}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight"
                    style={{ fontFamily: "Raleway, sans-serif" }}>
                  <span className="text-white/60">R</span>
                  <span className="text-white">S</span>{" "}
                  <span className="text-white">LOGISTICS</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-bold text-white/90 mb-4 uppercase tracking-widest">
                  {slide.subheading}
                </h2>
                <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed max-w-[520px]">
                  {slide.text}
                </p>
                <a
                  href="/about"
                  className="inline-block px-8 py-3 border-2 border-white text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#12137E] transition-all duration-300"
                >
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrow Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-[#12137E] text-white transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-[#12137E] text-white transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              i === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
