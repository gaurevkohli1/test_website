"use client";

import { useEffect, useRef } from "react";

export interface ScrollVideoSectionProps {
  /** Short uppercase label shown above the title */
  accentText?: string;
  /** Main heading */
  title: string;
  /** Body copy under the heading */
  subtitle: string;
  /** Path to the video file, e.g. "/assets/videos/vital-whey.mp4" */
  videoSrc: string;
  /** Text alignment for the overlay content */
  align?: "left" | "center" | "right";
  /** Pixels of scroll locked to this section — longer = slower scrub */
  scrollDistance?: number;
  /** 1-indexed section number shown as a large watermark */
  index: number;
}

export function ScrollVideoSection({
  accentText,
  title,
  subtitle,
  videoSrc,
  align = "left",
  scrollDistance = 2200,
  index,
}: ScrollVideoSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);
  const textRef      = useRef<HTMLDivElement>(null);

  useEffect(() => {
    type STInstance = import("gsap/ScrollTrigger").ScrollTrigger;
    let stVideo: STInstance | undefined;
    let stText:  STInstance | undefined;

    const init = async () => {
      const { gsap }          = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const video     = videoRef.current;
      const container = containerRef.current;
      const textEl    = textRef.current;
      if (!video || !container) return;

      // ── Video scrub: pin + scrub currentTime across scrollDistance px ───
      const setupVideoTrigger = () => {
        stVideo = ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: `+=${scrollDistance}`,
          pin: true,
          scrub: 0.8,
          onUpdate: (self) => {
            const dur = video.duration;
            if (dur && isFinite(dur) && dur > 0) {
              video.currentTime = self.progress * dur;
            }
          },
        });
      };

      if (video.readyState >= 1) {
        // Metadata already loaded
        setupVideoTrigger();
      } else {
        video.addEventListener("loadedmetadata", setupVideoTrigger, { once: true });
      }

      // ── Text entrance (fires once on enter, independent of pin) ─────────
      if (textEl) {
        const children = Array.from(textEl.children);
        gsap.set(children, { opacity: 0, y: 36 });

        stText = ScrollTrigger.create({
          trigger: container,
          start: "top 75%",
          once: true,
          onEnter: () => {
            gsap.to(children, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.14,
              ease: "power3.out",
            });
          },
        });
      }
    };

    init();

    return () => {
      stVideo?.kill();
      stText?.kill();
    };
  }, [scrollDistance]);

  const alignClasses: Record<string, string> = {
    left:   "items-start text-left",
    center: "items-center text-center",
    right:  "items-end text-right",
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#050505]"
    >
      {/* ── Video background ────────────────────────────────────────────── */}
      {/* Replace videoSrc with actual file path once assets are added */}
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        poster="/assets/images/video-poster.jpg"
      />

      {/* ── Cinematic gradient overlays ──────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-t  from-[#050505] via-[#050505]/25 to-[#050505]/55 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r  from-[#050505]/80 via-transparent to-[#050505]/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b  from-[#050505]/55 to-transparent pointer-events-none" />

      {/* Blue accent glow at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(7,153,214,0.10) 0%, transparent 70%)",
        }}
      />

      {/* ── Large section watermark ──────────────────────────────────────── */}
      <span
        className="absolute top-6 right-8 select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)",
          fontSize: "clamp(4rem, 10vw, 8rem)",
          fontWeight: 900,
          lineHeight: 1,
          color: "rgba(255,255,255,0.05)",
        }}
        aria-hidden="true"
      >
        0{index}
      </span>

      {/* ── Text overlay ─────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 flex flex-col justify-end pb-20 px-8 md:px-20 ${alignClasses[align]}`}
      >
        <div ref={textRef} className="flex flex-col gap-4">
          {accentText && (
            <span className="ace-label">{accentText}</span>
          )}

          <h2
            style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
            className="text-4xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tight text-white max-w-4xl"
          >
            {title}
          </h2>

          <p className="text-[#d8d8d8]/65 text-sm md:text-base max-w-xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
