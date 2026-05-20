"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Company Profile", href: "/about/company-profile" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Our Team", href: "/about/our-team" },
      { label: "Achievements", href: "/about/achievements" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Freight Forwarding", href: "/services/freight-forwarding" },
      { label: "Custom Clearance", href: "/services/custom-clearance" },
      { label: "Trucking", href: "/services/trucking" },
      { label: "Project Cargo", href: "/services/project-cargo" },
      { label: "Warehousing", href: "/services/warehousing" },
      { label: "Courier Services", href: "/services/courier-services" },
      { label: "Supply Chain Management", href: "/services/supply-chain" },
    ],
  },
  {
    label: "Networks",
    href: "/networks",
  },
  {
    label: "E-Services",
    href: "/e-services",
    children: [
      { label: "Cargo Tracking", href: "/e-services/cargo-tracking" },
      { label: "MyRS Portal", href: "/e-services/myrs" },
      { label: "Online Quotation", href: "/e-services/quotation" },
    ],
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md" : "bg-white/95"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <Image
            src="https://www.rslog.com/wp-content/uploads/2024/04/COMPANY-WEBSITE-CROPPED_JPG.jpg"
            alt="RS Logistics Limited"
            width={180}
            height={50}
            className="h-[50px] w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-[14px] font-semibold text-gray-700 hover:text-[#12137E] transition-colors uppercase tracking-wide"
              >
                {item.label}
                {item.children && <ChevronDown size={14} />}
              </a>
              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-0 bg-[#12137E] min-w-[220px] shadow-lg z-50">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-5 py-3 text-[13px] text-white hover:bg-white/20 transition-colors border-b border-white/10 last:border-0"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="/e-services/cargo-tracking"
            className="px-5 py-2 text-[13px] font-semibold text-white bg-[#12137E] hover:bg-[#0e0f6a] transition-colors uppercase tracking-wide"
          >
            Cargo Tracking
          </a>
          <a
            href="/e-services/myrs"
            className="px-5 py-2 text-[13px] font-semibold text-[#12137E] border border-[#12137E] hover:bg-[#12137E] hover:text-white transition-colors uppercase tracking-wide"
          >
            MyRS
          </a>
          <a
            href="#"
            className="px-3 py-2 text-[13px] text-gray-600 hover:text-[#12137E] transition-colors"
          >
            EN
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === item.label ? null : item.label
                  )
                }
                className="w-full flex items-center justify-between px-5 py-3 text-[14px] font-semibold text-gray-700 hover:text-[#12137E] uppercase tracking-wide"
              >
                {item.label}
                {item.children && <ChevronDown size={14} />}
              </button>
              {item.children && activeDropdown === item.label && (
                <div className="bg-[#12137E]">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-8 py-3 text-[13px] text-white hover:bg-white/20 border-b border-white/10 last:border-0"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex gap-2 p-4 border-t border-gray-100">
            <a
              href="/e-services/cargo-tracking"
              className="flex-1 py-2 text-center text-[13px] font-semibold text-white bg-[#12137E] uppercase"
            >
              Cargo Tracking
            </a>
            <a
              href="/e-services/myrs"
              className="flex-1 py-2 text-center text-[13px] font-semibold text-[#12137E] border border-[#12137E] uppercase"
            >
              MyRS
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
