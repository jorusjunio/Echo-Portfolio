import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import SmoothScroll from "@/components/smooth-scroll";
import { ScrollProgress } from "@/components/scroll-progress";
import { RevealObserver } from "@/components/reveal-observer";
import { profile } from "@/lib/site-data";
import "./globals.css";

// Body copy — clean, readable.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// Tall, compact all-caps display for tactical titles.
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

// Monospace for metadata, version tags, and tactical readouts.
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Stylized display face for the hero ECHO title (uploaded Valorant font).
const valorant = localFont({
  src: "./fonts/Valorant.ttf",
  variable: "--font-valorant",
  display: "swap",
});

const siteTitle = `${profile.fullName} — ${profile.headline}`;

export const metadata: Metadata = {
  title: `${profile.fullName} | Portfolio`,
  description: profile.intro,
  keywords: [
    "Echo John Calderon",
    "embedded systems",
    "software developer",
    "mechatronics",
    "electronics",
    "PLC",
    "video editing",
    "graphic design",
    "portfolio",
  ],
  authors: [{ name: profile.fullName }],
  openGraph: {
    title: siteTitle,
    description: profile.intro,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: profile.intro,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jakarta.variable} ${bebas.variable} ${jetbrains.variable} ${valorant.variable} font-sans`}
      >
        <SmoothScroll />
        <ScrollProgress />
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
