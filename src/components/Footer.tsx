"use client";

import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#12137E] text-white">
      {/* Main footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo + About */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.rslog.com/wp-content/uploads/2024/04/RSlogo%EF%BC%88with-texts%EF%BC%89-ai.svg"
              alt="RS Logistics"
              className="h-16 w-auto mb-5 brightness-0 invert"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.style.display = "none";
                const parent = img.parentElement;
                if (parent) {
                  const div = document.createElement("div");
                  div.innerHTML =
                    '<span style="font-size:24px;font-weight:900;color:white;font-family:Raleway,sans-serif;letter-spacing:2px;">RS LOGISTICS</span>';
                  parent.insertBefore(div, img.nextSibling);
                }
              }}
            />
            <p className="text-white/70 text-sm leading-relaxed">
              RS Logistics Limited is a leading logistics provider offering
              comprehensive freight forwarding, customs clearance, and supply
              chain management solutions across the Asia-Pacific region.
            </p>
          </div>

          {/* Column 2: MyRS App */}
          <div>
            <h3
              className="text-lg font-bold mb-5 uppercase tracking-wider"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              MyRS App
            </h3>
            <p className="text-white/70 text-sm mb-5 leading-relaxed">
              Download the MyRS app to track your shipments, view documents, and
              manage your logistics on the go.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors px-4 py-3"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <div className="text-[10px] text-white/60">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors px-4 py-3"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/>
                </svg>
                <div>
                  <div className="text-[10px] text-white/60">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3: E-Services */}
          <div>
            <h3
              className="text-lg font-bold mb-5 uppercase tracking-wider"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              E-Services
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Cargo Tracking", href: "/e-services/cargo-tracking" },
                { label: "MyRS Portal", href: "/e-services/myrs" },
                { label: "Online Quotation", href: "/e-services/quotation" },
                { label: "e-Booking", href: "/e-services/booking" },
                { label: "Document Upload", href: "/e-services/documents" },
                { label: "Tariff Inquiry", href: "/e-services/tariff" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-white/40">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3
              className="text-lg font-bold mb-5 uppercase tracking-wider"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-white/60" />
                <span className="text-white/70 text-sm leading-relaxed">
                  Unit 1-3, 8/F, Metroplex, 223 Hing Fong Road,
                  Kwai Chung, New Territories, Hong Kong
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-white/60" />
                <a
                  href="tel:+85224289988"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  +852 2428 9988
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-white/60" />
                <a
                  href="mailto:info@rslog.com"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  info@rslog.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <ExternalLink size={16} className="shrink-0 text-white/60" />
                <a
                  href="https://www.linkedin.com/company/rs-logistics-limited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} RS Logistics Limited. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="/privacy" className="text-white/50 text-xs hover:text-white/80 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white/50 text-xs hover:text-white/80 transition-colors">
              Terms of Use
            </a>
            <a href="/sitemap" className="text-white/50 text-xs hover:text-white/80 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
