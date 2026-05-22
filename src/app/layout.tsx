import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ACE VITALS — Fuel the Future of Performance",
  description:
    "Advanced sports nutrition engineered for strength, endurance, recovery, and daily performance. Vital Whey, Hydro Whey, NitroAce Pre Workout, Creatine, AceFuel BCAA.",
  keywords: ["supplements", "whey protein", "pre workout", "creatine", "bcaa", "sports nutrition"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
