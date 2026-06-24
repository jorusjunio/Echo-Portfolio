/**
 * Frosted-glass backdrop for the Projects section. Soft volt + white glow blobs
 * drift slowly behind a translucent glass film, fine grain and a diagonal sheen
 * — reads as light glowing through frosted glass. Pure CSS: the only motion is
 * GPU-composited transform drift (no per-frame gradient repaints, no pointer
 * tracking), so it's smooth and light. Edges feather back to pure #0A0A0A.
 */
export function ProjectsBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Soft drifting glow blobs (behind the glass) */}
      <div className="projects-blob-a absolute -left-[8%] top-[6%] h-[44vw] w-[44vw] rounded-full bg-accent/20 blur-[120px]" />
      <div className="projects-blob-b absolute -right-[6%] top-[34%] h-[40vw] w-[40vw] rounded-full bg-white/[0.07] blur-[130px]" />
      <div className="projects-blob-c absolute bottom-[-12%] left-[28%] h-[36vw] w-[36vw] rounded-full bg-accent/[0.14] blur-[110px]" />

      {/* Translucent glass film (the blobs are already soft-blurred, so no
          costly backdrop-filter is needed — keeps it smooth) */}
      <div className="absolute inset-0 bg-white/[0.025]" />

      {/* Glass texture + faint grid */}
      <div className="hero-noise absolute inset-0 opacity-[0.05]" />
      <div className="bg-tac-grid absolute inset-0 opacity-[0.06]" />

      {/* Diagonal glass sheen */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_34%,rgba(255,255,255,0.045)_50%,transparent_66%)]" />

      {/* Feather every edge back to pure #0A0A0A */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_85%_at_50%_45%,transparent_45%,#0A0A0A_100%)]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0A0A0A] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </div>
  );
}
