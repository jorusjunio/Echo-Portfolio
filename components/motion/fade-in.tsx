import * as React from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in seconds (maps to CSS transition/animation delay). */
  delay?: number;
  direction?: Direction;
}

const dirStyle: Record<Direction, React.CSSProperties> = {
  up: { ["--ry" as string]: "25px" },
  down: { ["--ry" as string]: "-25px" },
  left: { ["--rx" as string]: "25px" },
  right: { ["--rx" as string]: "-25px" },
  none: {},
};

/**
 * Scroll-reveal wrapper. Hidden by default; the global RevealObserver adds
 * `.is-visible` when it enters the viewport and CSS handles the tactical
 * fade/slide + boot flicker. `delay` staggers via CSS. Pure CSS/observer —
 * no per-instance JS — so it can be a server component.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  return (
    <div
      data-reveal
      style={{ ...dirStyle[direction], ["--reveal-delay" as string]: `${delay}s` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}
