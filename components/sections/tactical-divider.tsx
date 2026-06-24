import { cn } from "@/lib/utils";

interface TacticalDividerProps {
  /** Colour of the section above (the top wedge). */
  from: string;
  /** Colour of the section below. */
  to: string;
  className?: string;
  /** Fade the top wedge from transparent, so it blends smoothly into whatever
      sits behind it (e.g. the sticky hero) instead of a hard black band. */
  fadeTop?: boolean;
}

/**
 * Sharp diagonal hard-edge slash between two sections (the signature Valorant
 * cut). Fully SVG so transparent areas reveal the content behind — when
 * `fadeTop` is set, the top wedge dissolves into transparency for a seamless
 * blend with the hero underneath. The slash itself is a crisp core line wrapped
 * in a soft volt halo for a smooth, premium edge.
 */
export function TacticalDivider({
  from,
  to,
  className,
  fadeTop = false,
}: TacticalDividerProps) {
  const gid = `divtop-${from.replace("#", "")}`;
  return (
    <div aria-hidden className={cn("relative w-full", className)}>
      <svg
        viewBox="0 0 100 9"
        preserveAspectRatio="none"
        shapeRendering="geometricPrecision"
        className="block h-[8vw] w-full"
      >
        {fadeTop && (
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={from} stopOpacity="0" />
              <stop offset="78%" stopColor={from} stopOpacity="1" />
            </linearGradient>
          </defs>
        )}
        {/* Bottom (section below) — full height so the top wedge overlaps it with
            zero gap along the diagonal (no thin jagged seam between fills) */}
        {!fadeTop && <polygon points="0,0 100,0 100,9 0,9" fill={to} />}
        {fadeTop && <polygon points="0,7 100,4 100,9 0,9" fill={to} />}
        {/* Top wedge — the section above (overlaps the diagonal by a hair) */}
        <polygon
          points="0,0 100,0 100,4.08 0,7.08"
          fill={fadeTop ? `url(#${gid})` : from}
        />
        {/* Volt slash — soft halo + crisp core for a smooth, glowing edge */}
        <line x1="0" y1="7" x2="100" y2="4" stroke="#ECE81A" strokeWidth="1.4" strokeOpacity="0.13" />
        <line x1="0" y1="7" x2="100" y2="4" stroke="#ECE81A" strokeWidth="0.7" strokeOpacity="0.32" />
        <line x1="0" y1="7" x2="100" y2="4" stroke="#ECE81A" strokeWidth="0.3" />
      </svg>
    </div>
  );
}
