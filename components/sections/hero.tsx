"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "@/lib/site-data";
import { ScrambleText } from "@/components/tactical/scramble-text";
import { Typewriter } from "@/components/tactical/typewriter";

// Flashlight reveal — massive feather, no solid core, alpha fading all the way
// to 0 at the full radius so there is no disc edge or circle outline.
const SPOTLIGHT =
  "radial-gradient(circle 360px at var(--mx, -9999px) var(--my, -9999px), rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.14) 45%, rgba(255,255,255,0) 100%)";

// Soft overhead light wash from the top — a wide ellipse whose core sits above
// the frame, so it fades down like mist with no visible circle or hard edge.
const OVERHEAD =
  "radial-gradient(ellipse 100% 88% at 50% -16%, #000 0%, rgba(0,0,0,0.4) 48%, transparent 86%)";

// Snappy, tactical entry — short, sharp, no float.
const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.2, 0.65, 0.3, 1] },
  },
};

export function Hero() {
  const reduce = useReducedMotion();
  const revealRef = useRef<HTMLDivElement>(null);

  // Cinematic dissolve: as you scroll, the hero content fades / drifts / scales
  // out while the About panel rises up over the pinned hero.
  const { scrollY } = useScroll();
  const contentOpacity = useTransform(scrollY, [0, 520], [1, 0]);
  const contentScale = useTransform(scrollY, [0, 520], [1, 0.94]);
  const contentY = useTransform(scrollY, [0, 520], [0, -50]);

  // Feed the cursor position to the reveal layer's mask (no React re-render).
  const moveSpotlight = (e: MouseEvent<HTMLElement>) => {
    const el = revealRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const hideSpotlight = () => {
    const el = revealRef.current;
    if (!el) return;
    el.style.setProperty("--mx", "-9999px");
    el.style.setProperty("--my", "-9999px");
  };

  return (
    <section
      id="top"
      onMouseMove={moveSpotlight}
      onMouseLeave={hideSpotlight}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-black text-foreground"
    >
      {/* Tactical grid (subtle, right-biased so the left stays pure black) */}
      <div className="pointer-events-none absolute inset-0 bg-tac-grid opacity-20" />

      {/* Colossal claw — extreme zoom into the pincers, anchored right. The
          base is buried in darkness; a cursor-led flashlight unveils the metal. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[62%] overflow-hidden md:block lg:w-[58%]"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 38%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 38%)",
        }}
      >
        {/* Base — barely visible, all but swallowed by the black */}
        <Image
          src="/robot-arm.png"
          alt=""
          fill
          priority
          sizes="60vw"
          style={{ objectPosition: "12% 52%" }}
          className="origin-left scale-[1.55] object-cover opacity-[0.03]"
        />
        {/* Overhead light wash — softly reveals the upper metal at all times */}
        <div
          className="absolute inset-0 opacity-[0.2] [filter:brightness(0.55)_contrast(1.05)]"
          style={{ maskImage: OVERHEAD, WebkitMaskImage: OVERHEAD }}
        >
          <Image
            src="/robot-arm.png"
            alt=""
            fill
            sizes="60vw"
            style={{ objectPosition: "12% 52%" }}
            className="origin-left scale-[1.55] object-cover"
          />
        </div>

        {/* Cursor flashlight — soft, feathered local reveal that melts into dark */}
        <div
          ref={revealRef}
          className="absolute inset-0 opacity-[0.6] [filter:brightness(0.7)_contrast(1.12)]"
          style={{ maskImage: SPOTLIGHT, WebkitMaskImage: SPOTLIGHT }}
        >
          <Image
            src="/robot-arm.png"
            alt=""
            fill
            sizes="60vw"
            style={{ objectPosition: "12% 52%" }}
            className="origin-left scale-[1.55] object-cover"
          />
        </div>
      </div>

      {/* Soft overhead light wash (top) — wide ellipse fading into total dark,
          like mist from above, no circle outline */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_95%_75%_at_50%_-8%,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.025)_45%,transparent_82%)]" />
      {/* Settle into darkness toward the bottom */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_68%,#000_100%)]" />
      {/* Left ~half locked to pure #000000 for text; clears early so it
          doesn't dim the robot / spotlight on the right */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#000_0%,#000_50%,transparent_72%)]" />
      {/* Seamless volt glow hugging the left edge */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_46%_90%_at_0%_50%,rgba(236,232,26,0.11),transparent_70%)]" />
      {/* Cinematic film grain over the whole backdrop (behind text/buttons) */}
      <div className="hero-noise pointer-events-none absolute inset-0 z-0 opacity-[0.09]" />
      {/* Settle the very bottom to clean pure #000 (covers grain + glow) so it
          meets the divider below seamlessly — no horizontal seam */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-b from-transparent to-black" />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial={reduce ? false : "hidden"}
        animate="visible"
        style={
          reduce
            ? undefined
            : { opacity: contentOpacity, scale: contentScale, y: contentY }
        }
        className="container relative z-10"
      >
        <motion.div
          variants={item}
          className="clip-notch mb-6 inline-flex items-center gap-2 border border-accent/50 bg-accent/5 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          <ScrambleText text="[ SOFTWARE // ELECTRONICS // CREATIVE ]" />
        </motion.div>

        <div className="flex items-stretch gap-4 md:gap-6">
          {/* Volt slash accent — stretches to exactly the title's height */}
          <motion.span
            variants={item}
            className="glow-volt hidden w-3 shrink-0 -skew-x-12 self-stretch bg-accent md:block"
          />
          <motion.h1
            variants={item}
            data-text={`${profile.name}.`}
            className="echo-title relative top-[0.087em] cursor-default font-valorant text-[27vw] leading-[0.82] md:text-[16.5rem]"
          >
            {profile.name}
            <span className="text-accent">.</span>
          </motion.h1>
        </div>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          <span className="text-accent">{"> "}</span>
          <Typewriter text={profile.tagline} />
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          {/* VIEW PROJECTS — volt → black invert slides in from the left */}
          <a
            href="#projects"
            className="clip-chip group relative inline-flex items-center gap-2 overflow-hidden bg-accent px-7 py-3 font-mono text-sm font-bold uppercase tracking-wider text-accent-foreground"
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-black transition-transform duration-300 ease-out group-hover:translate-x-0"
            />
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-accent">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
          </a>

          {/* CONTACT — volt fill slides in from the right */}
          <a
            href="#contact"
            className="clip-chip group relative inline-flex items-center gap-2 overflow-hidden border border-foreground px-7 py-3 font-mono text-sm font-bold uppercase tracking-wider text-foreground transition-colors duration-300 hover:border-accent"
          >
            <span
              aria-hidden
              className="absolute inset-0 translate-x-full bg-accent transition-transform duration-300 ease-out group-hover:translate-x-0"
            />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-accent-foreground">
              Contact
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
