"use client";

import { motion } from "framer-motion";

interface Product {
  name: string;
  tagline: string;
  tags: string[];
  gradient: string;
  accentColor: string;
}

const products: Product[] = [
  {
    name: "Vital Whey Protein",
    tagline: "25g protein · Fast-absorbing · Muscle building",
    tags: ["Whey Concentrate", "5 Flavours", "Lean Muscle"],
    gradient: "from-[#0a1628] via-[#0d2040] to-[#071830]",
    accentColor: "#0799d6",
  },
  {
    name: "Hydro Whey Protein",
    tagline: "Hydrolyzed for maximum absorption · Zero compromise",
    tags: ["Hydrolyzed WPI", "Rapid Uptake", "Ultra-Pure"],
    gradient: "from-[#111] via-[#1a1a2e] to-[#0d0d20]",
    accentColor: "#4db8ff",
  },
  {
    name: "NitroAce Pre Workout",
    tagline: "Explosive energy · Laser focus · Unmatched pumps",
    tags: ["Caffeine 200mg", "Beta-Alanine", "L-Citrulline"],
    gradient: "from-[#150d05] via-[#1f1208] to-[#180e04]",
    accentColor: "#e07820",
  },
  {
    name: "Pure Creatine",
    tagline: "Strength · Power · Endurance · The gold standard",
    tags: ["Creatine Mono", "5g per Serve", "Clinically Dosed"],
    gradient: "from-[#0d0d1a] via-[#131325] to-[#0f0f1e]",
    accentColor: "#7b6ef6",
  },
  {
    name: "AceFuel BCAA + Glutamine",
    tagline: "Essential aminos for recovery · Train harder, recover faster",
    tags: ["2:1:1 BCAA", "Glutamine", "Electrolytes"],
    gradient: "from-[#051510] via-[#0a1f18] to-[#071a14]",
    accentColor: "#12d48a",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card glass-card rounded-lg overflow-hidden group cursor-pointer">

      {/* Product image area — replace inner div with <Image> when product images exist */}
      <div
        className={`relative h-56 md:h-64 bg-gradient-to-br ${product.gradient} overflow-hidden`}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at 50% 90%, ${product.accentColor}25 0%, transparent 65%)`,
          }}
        />

        {/* Placeholder icon — swap for <Image src="/assets/images/[product].png" fill alt="..." /> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-24 h-24 rounded-full border border-white/8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
            style={{ background: `${product.accentColor}18` }}
          >
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <rect
                x="12" y="8" width="16" height="26" rx="4"
                stroke={product.accentColor}
                strokeWidth="1.5"
                fill={`${product.accentColor}18`}
              />
              <rect x="15" y="6" width="10" height="4" rx="1" fill={product.accentColor} opacity="0.6" />
              <line x1="15" y1="18" x2="25" y2="18" stroke={product.accentColor} strokeWidth="1" opacity="0.4" />
              <line x1="15" y1="22" x2="22" y2="22" stroke={product.accentColor} strokeWidth="1" opacity="0.25" />
            </svg>
          </div>
        </div>

        {/* Top-right accent */}
        <div
          className="absolute top-0 right-0 w-24 h-24"
          style={{ background: `linear-gradient(135deg, ${product.accentColor}18, transparent 60%)` }}
        />
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3
          style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
          className="text-[1.6rem] font-black uppercase text-white mb-1.5 leading-tight tracking-tight group-hover:text-[#0799d6] transition-colors duration-300"
        >
          {product.name}
        </h3>
        <p className="text-[#d8d8d8]/45 text-xs mb-5 leading-relaxed">{product.tagline}</p>

        {/* Benefit tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-sm text-[10px] font-bold tracking-wider uppercase"
              style={{
                background: `${product.accentColor}12`,
                color: product.accentColor,
                border: `1px solid ${product.accentColor}28`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA button */}
        <button
          style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
          className="w-full py-3 text-sm font-bold tracking-widest uppercase rounded-sm border border-white/15 text-white hover:text-white transition-all duration-300"
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background      = product.accentColor;
            el.style.borderColor     = product.accentColor;
            el.style.boxShadow       = `0 0 28px ${product.accentColor}45`;
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background  = "";
            el.style.borderColor = "";
            el.style.boxShadow   = "";
          }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export function ProductGrid() {
  return (
    <section id="products" className="py-28 md:py-40 px-6 md:px-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="ace-label block mb-5">Product Range</span>
          <h2
            style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
            className="text-5xl md:text-7xl font-black uppercase text-white leading-none tracking-tight"
          >
            THE ACE VITALS{" "}
            <span className="text-[#0799d6]">STACK</span>
          </h2>
          <p className="mt-6 text-[#d8d8d8]/55 max-w-xl mx-auto text-sm leading-relaxed">
            Every product engineered with clinical doses, premium ingredients, and
            zero compromise on quality.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              variants={cardVariants}
              className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
