"use client";

import { useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%/<>*";

interface ScrambleTextProps {
  text: string;
  className?: string;
  /** Total scramble time in ms. */
  duration?: number;
}

/**
 * Rapid cyber-scramble that resolves left→right into the final text on mount.
 * Writes via the DOM (no per-frame React re-render). SSR renders the final
 * text, so it's correct without JS and for screen readers.
 */
export function ScrambleText({ text, className, duration = 900 }: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = text;
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const reveal = Math.floor(p * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const c = text[i];
        out += i < reveal || c === " " ? c : CHARS[(Math.random() * CHARS.length) | 0];
      }
      el.textContent = out;
      if (p < 1) raf = requestAnimationFrame(tick);
      else el.textContent = text;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, duration]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
