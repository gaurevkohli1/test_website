"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay blocked — video stays paused, still looks fine
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

      {/* ── Video Background ─────────────────────────────────────────────── */}
      {/* Replace hero-bg.mp4 with your actual hero video file */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        poster="/assets/images/hero-poster.jpg"
      >
        <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ── Gradient Overlays ─────────────────────────────────────────────  */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-transparent" />

      {/* Blue glow at bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(7,153,214,0.12) 0%, transparent 70%)" }}
      />

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-center md:text-left">

        <motion.p
          className="ace-label mb-6 text-[#0799d6]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Advanced Sports Nutrition
        </motion.p>

        <motion.h1
          style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
          className="text-6xl sm:text-7xl md:text-[7.5rem] font-black uppercase leading-[0.92] tracking-tight text-white mb-8 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          FUEL THE{" "}
          <span className="text-[#0799d6] relative inline-block">
            FUTURE
            <span
              className="absolute -inset-2 rounded-sm pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(7,153,214,0.15) 0%, transparent 70%)" }}
            />
          </span>{" "}
          OF PERFORMANCE
        </motion.h1>

        <motion.p
          className="text-[#d8d8d8]/75 text-base md:text-lg max-w-2xl leading-relaxed mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
        >
          Advanced sports nutrition engineered for strength, endurance, recovery,
          and daily performance.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
        >
          <a
            href="#products"
            style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
            className="px-8 py-4 bg-[#0799d6] text-white text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-[#0587be] transition-all duration-300 blue-glow-sm hover:blue-glow"
          >
            Explore Products
          </a>
          <a
            href="#products"
            style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
            className="px-8 py-4 border border-white/25 text-white text-sm font-bold tracking-widest uppercase rounded-sm hover:border-[#0799d6] hover:text-[#0799d6] transition-all duration-300"
          >
            Shop Now
          </a>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ─────────────────────────────────────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-pulse">
        <span className="ace-label text-white/40">Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="5.5" y="0.5" width="5" height="9" rx="2.5" stroke="rgba(255,255,255,0.3)" />
          <rect x="7.25" y="2.5" width="1.5" height="3" rx="0.75" fill="#0799d6" />
          <path d="M4 16 L8 20 L12 16" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
