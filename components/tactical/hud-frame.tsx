import * as React from "react";
import { cn } from "@/lib/utils";

interface HudFrameProps {
  children: React.ReactNode;
  /** Padding/extra classes for the inner content area. */
  className?: string;
  /** Top-left HUD data label. */
  label?: string;
  /** Top-right HUD code readout. */
  code?: string;
  /** Show the hazard-stripe block in the bottom-right corner. */
  stripes?: boolean;
}

/**
 * Cybernetic HUD / Valorant circuit panel. Angled (45°) corners with a thin
 * volt circuit edge, corner "pathway" lines ending in termination rings, a
 * faint circuit-track background, hazard stripes in the bottom-right, and tiny
 * monospace data labels along the top edge. Reusable around any section/card.
 */
export function HudFrame({
  children,
  className,
  label = "// DATA_STREAM_CONNECTED",
  code = "[ SYS_LOC: 0x82 ]",
  stripes = true,
}: HudFrameProps) {
  return (
    <div className="relative">
      {/* Top-edge HUD data labels */}
      <div className="mb-2 flex items-center justify-between px-1 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-foreground/60">
        <span>{label}</span>
        <span className="text-accent">{code}</span>
      </div>

      {/* Ultra-thin volt circuit edge following the angled cut */}
      <div className="clip-hud bg-accent/80 p-px">
        <div className="clip-hud relative overflow-hidden bg-muted">
          {/* Faint circuit-track background */}
          <div aria-hidden className="bg-circuit pointer-events-none absolute inset-0" />

          {/* Circuit pathways + termination rings (square corners: TR + BL) */}
          <span
            aria-hidden
            className="pointer-events-none absolute right-5 top-5 z-10 flex items-center gap-1.5"
          >
            <span className="h-px w-10 bg-accent" />
            <span className="h-1.5 w-1.5 rounded-full border border-accent" />
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-5 left-5 z-10 flex items-center gap-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full border border-accent" />
            <span className="h-px w-10 bg-accent" />
          </span>

          {/* Hazard stripes — bottom-right corner */}
          {stripes && (
            <div
              aria-hidden
              className="stripes-hazard pointer-events-none absolute bottom-0 right-0 z-10 h-20 w-20 [clip-path:polygon(100%_0,100%_100%,0_100%)]"
            />
          )}

          {/* Content */}
          <div className={cn("relative z-20 p-6 md:p-8", className)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
