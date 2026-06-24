"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/**
 * Momentum smooth-scrolling (Lenis). Skips entirely under prefers-reduced-motion.
 * Pauses while a project preview is open (project-preview-open/close events),
 * and glides to in-page anchors (hero scroll cue, nav links).
 */
export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.2,
    });

    const stopSmoothScroll = () => lenis.stop();
    const startSmoothScroll = () => lenis.start();
    let frameId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    // Smoothly dock in-page anchors in the dead-centre of the viewport
    // (block: 'center'), instead of an instant jump.
    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      const id = anchor?.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector<HTMLElement>(id);
      if (!target) return;
      e.preventDefault();
      // Centre the section: target's middle aligns with the viewport's middle.
      const offset = -(window.innerHeight - target.getBoundingClientRect().height) / 2;
      lenis.scrollTo(target, { offset });
    };

    window.addEventListener("project-preview-open", stopSmoothScroll);
    window.addEventListener("project-preview-close", startSmoothScroll);
    document.addEventListener("click", onAnchorClick);

    return () => {
      window.removeEventListener("project-preview-open", stopSmoothScroll);
      window.removeEventListener("project-preview-close", startSmoothScroll);
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
}
