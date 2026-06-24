"use client";

import { useEffect, useRef } from "react";

/**
 * Micro-thin glowing volt progress bar fixed at the top of the viewport that
 * fills horizontally with the page's scroll percentage. Uses a transform
 * (scaleX) updated on scroll — no React re-render, GPU-composited.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5">
      <div
        ref={ref}
        className="h-full origin-left scale-x-0 bg-accent shadow-[0_0_8px_hsl(var(--accent))]"
      />
    </div>
  );
}
