import { Header }             from "@/components/Header";
import { HeroSection }         from "@/components/HeroSection";
import { ScrollVideoSection }  from "@/components/ScrollVideoSection";
import { ProductGrid }         from "@/components/ProductGrid";
import { Benefits }            from "@/components/Benefits";

// ─── Video Section Data ───────────────────────────────────────────────────────
// Replace videoSrc paths with actual files placed in /public/assets/videos/
const videoSections = [
  {
    accentText:  "Brand Story",
    title:       "ENGINEERED FOR CHAMPIONS",
    subtitle:
      "Where cutting-edge science meets the raw power of athletic performance. ACE VITALS is born from champions.",
    videoSrc:    "/assets/videos/brand-intro.mp4",
    align:       "center" as const,
  },
  {
    accentText:  "Protein Series",
    title:       "VITAL WHEY PROTEIN",
    subtitle:
      "25g of premium whey protein per serving. Fast-absorbing, muscle-building, and crafted for peak results.",
    videoSrc:    "/assets/videos/vital-whey.mp4",
    align:       "left" as const,
  },
  {
    accentText:  "Premium Hydrolyzed",
    title:       "HYDRO WHEY PROTEIN",
    subtitle:
      "Hydrolyzed for maximum absorption. Rapid uptake, ultra-pure formula. Zero compromise.",
    videoSrc:    "/assets/videos/hydro-whey.mp4",
    align:       "right" as const,
  },
  {
    accentText:  "Pre-Workout",
    title:       "NITROACETM PRE WORKOUT",
    subtitle:
      "Explosive energy. Laser focus. Unmatched pumps. Engineered for athletes who refuse limits.",
    videoSrc:    "/assets/videos/pre-workout.mp4",
    align:       "left" as const,
  },
  {
    accentText:  "Strength Formula",
    title:       "PURE CREATINE",
    subtitle:
      "Strength. Power. Endurance. The gold standard in performance supplementation — clinically dosed.",
    videoSrc:    "/assets/videos/creatine.mp4",
    align:       "center" as const,
  },
  {
    accentText:  "Recovery Stack",
    title:       "ACEFUEL BCAA + GLUTAMINE",
    subtitle:
      "Essential amino acids for accelerated recovery. Train harder. Recover faster. Repeat.",
    videoSrc:    "/assets/videos/acefuel.mp4",
    align:       "right" as const,
  },
  {
    accentText:  "ACE VITALS",
    title:       "THE FUTURE IS NOW",
    subtitle:
      "Premium sports nutrition for the next generation of athletes. No shortcuts. No compromises.",
    videoSrc:    "/assets/videos/final-reveal.mp4",
    align:       "center" as const,
  },
] as const;

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="bg-[#050505] overflow-x-hidden">

      {/* Fixed navigation */}
      <Header />

      {/* Hero */}
      <HeroSection />

      {/* ── Cinematic scroll video sections ─────────────────────────────── */}
      {videoSections.map((section, i) => (
        <ScrollVideoSection
          key={section.title}
          {...section}
          index={i + 1}
          scrollDistance={2200}
        />
      ))}

      {/* ── Product showcase ─────────────────────────────────────────────── */}
      <ProductGrid />

      {/* ── Brand benefits ───────────────────────────────────────────────── */}
      <Benefits />

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <FinalCTA />
    </main>
  );
}

// ─── Final CTA ───────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="relative py-40 md:py-56 px-6 md:px-10 overflow-hidden bg-[#050505]">

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(7,153,214,0.1) 0%, transparent 60%)",
        }}
      />

      {/* Horizontal rule */}
      <div className="max-w-7xl mx-auto border-t border-white/8 mb-24" />

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* Logo mark */}
        <div className="flex justify-center mb-10">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
            <polygon
              points="26,4 48,47 4,47"
              fill="none"
              stroke="#0799d6"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <polygon
              points="26,14 40,44 12,44"
              fill="#0799d6"
              opacity="0.25"
            />
          </svg>
        </div>

        <span className="ace-label block mb-8 text-[#0799d6]">ACE VITALS</span>

        <h2
          style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
          className="text-5xl sm:text-7xl md:text-[7rem] font-black uppercase leading-[0.9] tracking-tight text-white mb-8"
        >
          YOUR NEXT LEVEL
          <br />
          <span className="text-[#0799d6]">STARTS NOW.</span>
        </h2>

        <p className="text-[#d8d8d8]/55 max-w-lg mx-auto text-sm leading-relaxed mb-14">
          Join thousands of athletes who trust ACE VITALS to fuel their training,
          accelerate recovery, and push past every limit.
        </p>

        <div className="flex flex-wrap gap-5 justify-center">
          <a
            href="#products"
            style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
            className="px-10 py-4 bg-[#0799d6] text-white text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-[#0587be] transition-all duration-300 blue-glow-sm hover:blue-glow"
          >
            Shop Products
          </a>
          <a
            href="#"
            style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
            className="px-10 py-4 border border-white/20 hover:border-[#0799d6] text-white hover:text-[#0799d6] text-sm font-bold tracking-widest uppercase rounded-sm transition-all duration-300"
          >
            Become a Distributor
          </a>
        </div>
      </div>

      {/* Footer strip */}
      <div className="max-w-7xl mx-auto mt-28 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 30 30" fill="none" aria-hidden="true">
            <polygon points="15,2 28,27 2,27" fill="none" stroke="#0799d6" strokeWidth="2" strokeLinejoin="round" />
            <polygon points="15,9 23,25 7,25" fill="#0799d6" opacity="0.35" />
          </svg>
          <span
            style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
            className="text-base font-black tracking-widest text-white uppercase"
          >
            ACE<span className="text-[#0799d6]">VITALS</span>
          </span>
        </div>
        <p className="text-[#d8d8d8]/30 text-xs tracking-wider">
          © {new Date().getFullYear()} ACE VITALS. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#d8d8d8]/30 hover:text-[#0799d6] text-xs tracking-wider transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
