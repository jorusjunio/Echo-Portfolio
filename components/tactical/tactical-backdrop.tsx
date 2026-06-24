/**
 * Minimalist cyberpunk / Valorant section backdrop. A faint volt grid, two soft
 * drifting glows (GPU-composited transforms — no repaints), a giant faint
 * section index, targeting-reticle corner brackets, and an edge vignette.
 * Purely decorative; sits behind section content.
 */
export function TacticalBackdrop({
  index,
  code,
}: {
  /** Big faint section number, e.g. "05". */
  index: string;
  /** Small mono tag, e.g. "CRED_VAULT". */
  code?: string;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Faint volt grid, faded toward the edges */}
      <div className="bg-tac-grid absolute inset-0 opacity-[0.07] [-webkit-mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_25%,transparent_82%)] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_25%,transparent_82%)]" />

      {/* Soft drifting volt glows */}
      <div className="projects-blob-a absolute -left-[8%] top-[6%] h-[36vw] w-[36vw] rounded-full bg-accent/[0.09] blur-[130px]" />
      <div className="projects-blob-c absolute -right-[10%] bottom-[4%] h-[32vw] w-[32vw] rounded-full bg-accent/[0.06] blur-[120px]" />

      {/* Giant faint section index */}
      <span className="absolute -right-[2vw] top-1/2 -translate-y-1/2 select-none font-valorant leading-none text-foreground/[0.028] text-[34vw]">
        {index}
      </span>

      {/* Targeting-reticle corner brackets */}
      <span className="absolute left-5 top-5 h-7 w-7 border-l border-t border-accent/30 md:left-8 md:top-8" />
      <span className="absolute right-5 top-5 h-7 w-7 border-r border-t border-accent/30 md:right-8 md:top-8" />
      <span className="absolute bottom-5 left-5 h-7 w-7 border-b border-l border-accent/30 md:bottom-8 md:left-8" />
      <span className="absolute bottom-5 right-5 h-7 w-7 border-b border-r border-accent/30 md:bottom-8 md:right-8" />

      {/* Mono code tag */}
      {code && (
        <span className="absolute left-1/2 top-6 -translate-x-1/2 select-none font-mono text-[0.6rem] uppercase tracking-[0.3em] text-accent/45 md:top-8">
          {`[ ${code} ]`}
        </span>
      )}

      {/* Edge vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_92%_88%_at_50%_50%,transparent_52%,#0A0A0A_100%)]" />
    </div>
  );
}
