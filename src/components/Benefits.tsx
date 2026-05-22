"use client";

import { motion } from "framer-motion";

interface Benefit {
  label: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ProteinIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="13" stroke="#0799d6" strokeWidth="1.5" fill="none" />
      <path
        d="M10 22 C10 18 13 14 16 16 C19 18 22 14 22 10"
        stroke="#0799d6" strokeWidth="2" strokeLinecap="round" fill="none"
      />
      <circle cx="16" cy="16" r="2.5" fill="#0799d6" opacity="0.6" />
    </svg>
  );
}

function StrengthIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M4 16H7M25 16H28M7 16H10.5M21.5 16H25M10.5 10V22M21.5 10V22M10.5 16H21.5"
        stroke="#0799d6" strokeWidth="1.8" strokeLinecap="round"
      />
      <rect x="10" y="13" width="3" height="6" rx="1.5" fill="#0799d6" opacity="0.5" />
      <rect x="19" y="13" width="3" height="6" rx="1.5" fill="#0799d6" opacity="0.5" />
    </svg>
  );
}

function RecoveryIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 6 A10 10 0 1 1 6 16"
        stroke="#0799d6" strokeWidth="1.8" strokeLinecap="round" fill="none"
      />
      <path d="M6 10 L6 16 L12 16" stroke="#0799d6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 16 L16 14 L18 18 L20 13 L22 16" stroke="#0799d6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EnergyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M18 4 L10 18 H16 L14 28 L24 14 H18 L20 4Z"
        stroke="#0799d6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        fill="#0799d6" fillOpacity="0.2"
      />
    </svg>
  );
}

const benefits: Benefit[] = [
  {
    label: "Macros",
    title: "High Protein",
    description:
      "Clinically dosed macros in every serving. Maximum protein synthesis to build and preserve lean muscle tissue.",
    icon: <ProteinIcon />,
  },
  {
    label: "Performance",
    title: "Strength Support",
    description:
      "Formulated with proven compounds that enhance power output, muscular endurance, and peak athletic performance.",
    icon: <StrengthIcon />,
  },
  {
    label: "Repair",
    title: "Recovery Formula",
    description:
      "Advanced amino acid profiles and targeted nutrients that accelerate muscle repair after intense training sessions.",
    icon: <RecoveryIcon />,
  },
  {
    label: "Energy",
    title: "Performance Energy",
    description:
      "Sustained, clean energy without the crash. Engineered for athletes who demand more from every training session.",
    icon: <EnergyIcon />,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function Benefits() {
  return (
    <section id="benefits" className="py-28 md:py-40 px-6 md:px-10 relative overflow-hidden bg-[#050505]">

      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(7,153,214,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Horizontal rule top */}
      <div className="max-w-7xl mx-auto border-t border-white/8 mb-20" />

      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          className="mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="ace-label block mb-5">Why ACE VITALS</span>
          <h2
            style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
            className="text-5xl md:text-7xl font-black uppercase text-white leading-none tracking-tight"
          >
            BUILT ON{" "}
            <span className="text-[#0799d6]">SCIENCE.</span>
            <br />
            PROVEN BY{" "}
            <span className="text-[#0799d6]">RESULTS.</span>
          </h2>
        </motion.div>

        {/* Benefit cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group glass-card rounded-lg p-7 border border-white/6 hover:border-[#0799d6]/30 transition-all duration-500 hover:bg-white/5"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                style={{ background: "rgba(7, 153, 214, 0.1)", border: "1px solid rgba(7,153,214,0.2)" }}
              >
                {benefit.icon}
              </div>

              {/* Label */}
              <span className="ace-label block mb-3">{benefit.label}</span>

              {/* Title */}
              <h3
                style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
                className="text-2xl font-black uppercase text-white mb-4 leading-tight tracking-tight group-hover:text-[#0799d6] transition-colors duration-300"
              >
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-[#d8d8d8]/50 text-xs leading-relaxed">
                {benefit.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="mt-8 h-px w-0 group-hover:w-full transition-all duration-700 ease-out"
                style={{ background: "linear-gradient(to right, #0799d6, transparent)" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
