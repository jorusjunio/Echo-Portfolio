"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  text: string;
  className?: string;
  /** Per-character delay in ms. */
  speed?: number;
  /** Delay before typing starts, in ms. */
  startDelay?: number;
}

/**
 * Retro-terminal type-out with a blinking block cursor that fades out a moment
 * after the line finishes.
 */
export function Typewriter({
  text,
  className,
  speed = 22,
  startDelay = 450,
}: TypewriterProps) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(text);
      setDone(true);
      return;
    }
    let i = 0;
    let typer: ReturnType<typeof setTimeout>;
    const starter = setTimeout(function type() {
      i += 1;
      setShown(text.slice(0, i));
      if (i < text.length) typer = setTimeout(type, speed);
      else setDone(true);
    }, startDelay);
    return () => {
      clearTimeout(starter);
      clearTimeout(typer);
    };
  }, [text, speed, startDelay]);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setHideCursor(true), 1400);
    return () => clearTimeout(t);
  }, [done]);

  return (
    <span className={className}>
      {shown}
      <span
        aria-hidden
        className={cn(
          "ml-1 inline-block h-[1em] w-[0.5em] translate-y-[0.12em] bg-accent align-baseline transition-opacity duration-500",
          hideCursor
            ? "opacity-0"
            : "animate-[terminal-blink_1s_steps(1,end)_infinite]"
        )}
      />
    </span>
  );
}
