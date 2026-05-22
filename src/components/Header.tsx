"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Benefits", href: "#benefits" },
  { label: "About", href: "#brand" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          {/* Replace with Image src="/assets/images/ace-vitals-logo.png" when logo file is ready */}
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
            <polygon points="15,2 28,27 2,27" fill="none" stroke="#0799d6" strokeWidth="2" strokeLinejoin="round" />
            <polygon points="15,9 23,25 7,25" fill="#0799d6" opacity="0.35" />
          </svg>
          <span
            style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
            className="text-2xl font-black tracking-widest text-white uppercase leading-none"
          >
            ACE<span className="text-[#0799d6]">VITALS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="ace-label text-[#d8d8d8] hover:text-[#0799d6] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#products"
          style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
          className="hidden md:inline-flex items-center px-6 py-2.5 border border-white/20 hover:border-[#0799d6] text-white hover:text-[#0799d6] text-sm font-bold tracking-widest uppercase rounded-sm transition-all duration-300"
        >
          Shop Now
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-px w-6 bg-white transition-all duration-300 ${
                i === 0 && menuOpen ? "rotate-45 translate-y-[7px]" :
                i === 1 && menuOpen ? "opacity-0" :
                i === 2 && menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-72 border-b border-white/10" : "max-h-0"
        } bg-[#050505]/95 backdrop-blur-xl`}
      >
        <div className="px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="ace-label text-[#d8d8d8] hover:text-[#0799d6] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#products"
            style={{ fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)" }}
            className="text-center text-sm font-bold tracking-widest uppercase text-[#0799d6] border border-[#0799d6]/50 px-5 py-3 rounded-sm"
            onClick={() => setMenuOpen(false)}
          >
            Shop Now
          </a>
        </div>
      </div>
    </header>
  );
}
