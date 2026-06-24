"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Glitch intro/outro for a panel, tied to scroll visibility:
 *  - IN  (reaches the centre of the viewport): frame + contents reassemble in
 *    glitchy sliced bands, then lock into a solid, still "shown" state.
 *  - OUT (the settled panel leaves the centre): it glitch-shatters and vanishes.
 *  - Re-enter: it glitches back in.
 *
 * Flicker-proofing for sticky + smooth (Lenis) scroll:
 *  1. The visibility signal is DEBOUNCED, so momentum jitter at the trigger edge
 *     can't rapid-toggle the state.
 *  2. The intro can't be interrupted — the outro only fires once the panel is
 *     fully settled ("shown"), so the 1s intro always completes, then holds.
 * Static when prefers-reduced-motion is set.
 */
export function GlitchFrame({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const seen = useRef(false);
  const [state, setState] = useState<"pre" | "in" | "shown" | "out">("pre");

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    let debounce: ReturnType<typeof setTimeout>;
    const io = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        clearTimeout(debounce);
        debounce = setTimeout(() => {
          if (visible) {
            seen.current = true;
            // Start the intro only from a hidden state.
            setState((s) => (s === "pre" || s === "out" ? "in" : s));
          } else if (seen.current) {
            // Only a fully settled panel may glitch out — never interrupt the
            // intro mid-play.
            setState((s) => (s === "shown" ? "out" : s));
          }
        }, 150);
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );
    io.observe(el);
    return () => {
      clearTimeout(debounce);
      io.disconnect();
    };
  }, [reduce]);

  // Lock into the still, readable state ~1s after the intro starts (timer
  // fallback in case the animationend event is missed).
  useEffect(() => {
    if (state !== "in") return;
    const t = setTimeout(() => setState((s) => (s === "in" ? "shown" : s)), 1050);
    return () => clearTimeout(t);
  }, [state]);

  // When the intro glitch finishes, lock into the still, readable state.
  const onAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (e.animationName === "about-glitch-in") {
      setState((s) => (s === "in" ? "shown" : s));
    }
  };

  return (
    <div
      ref={ref}
      data-glitch={reduce ? "static" : state}
      onAnimationEnd={onAnimationEnd}
      className="glitch-frame relative"
    >
      {children}
    </div>
  );
}
