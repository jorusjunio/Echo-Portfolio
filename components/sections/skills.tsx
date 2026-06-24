import { skillGroups } from "@/lib/site-data";
import { TiltCard } from "@/components/tactical/tilt-card";

/** Placeholder monogram from a skill name (swapped for a real SVG logo later). */
function initials(name: string) {
  const parts = name.replace(/[&/+]/g, " ").split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative flex min-h-[100svh] scroll-mt-24 flex-col justify-center overflow-hidden bg-background py-20 text-foreground"
    >
      {/* === Animated cyber backdrop === */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Drifting volt grid */}
        <div className="skills-grid absolute inset-0" />
        {/* Floating volt blooms */}
        <div className="skills-orb-a absolute left-[10%] top-[16%] h-72 w-72 rounded-full bg-accent/[0.09] blur-3xl" />
        <div className="skills-orb-b absolute bottom-[12%] right-[8%] h-80 w-80 rounded-full bg-accent/[0.06] blur-3xl" />
        {/* Scanning beam */}
        <div className="skills-scan absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        {/* Depth vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#0A0A0A_100%)]" />
      </div>

      <div className="container relative z-10">
        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            {"// 02_SKILLS"}
          </span>
          <h2 className="mt-2 font-valorant text-4xl leading-[0.9] tracking-tight md:text-6xl">
            THE <span className="text-accent">ARSENAL</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            A blend of software development, backend engineering, electronics,
            and creative production.
          </p>
        </div>

        {/* Skill category cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            const idx = String(i + 1).padStart(2, "0");
            return (
              <TiltCard
                key={group.title}
                className="h-full"
                glareClassName="clip-corner"
              >
                {/* Thin volt edge that follows the angled cut (inset-border trick) */}
                <div className="clip-corner h-full bg-gradient-to-br from-accent/40 via-accent/10 to-accent/25 p-px shadow-[0_20px_50px_-25px_rgba(0,0,0,0.85)] transition-all duration-300 group-hover:from-accent/90 group-hover:via-accent/30 group-hover:to-accent/60">
                  <div className="clip-corner relative flex h-full flex-col overflow-hidden bg-[#0b0b0b]/85 p-6 backdrop-blur-xl">
                    {/* Card header */}
                    <div className="flex items-center gap-4 [transform:translateZ(40px)]">
                      <span className="clip-notch flex h-12 w-12 shrink-0 items-center justify-center bg-gradient-to-br from-accent/25 to-accent/5 text-accent shadow-[0_0_18px_-4px_hsl(var(--accent)/0.5)]">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div className="min-w-0">
                        <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                          {`[ CAT_${idx} ]`}
                        </span>
                        <h3 className="truncate font-display text-xl tracking-wide md:text-2xl">
                          {group.title}
                        </h3>
                      </div>
                    </div>

                    {/* Skill logo tiles — placeholders until real SVG logos drop in */}
                    <div className="mt-6 grid grid-cols-3 gap-2.5 [transform:translateZ(24px)] sm:grid-cols-4">
                      {group.skills.map((skill) => (
                        <div
                          key={skill}
                          title={skill}
                          className="group/tile flex flex-col items-center gap-2 border border-white/10 bg-white/[0.02] p-2.5 transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/[0.06] hover:shadow-[0_8px_20px_-10px_hsl(var(--accent)/0.5)]"
                        >
                          {/* TODO: replace monogram with <img src="/logos/…svg" /> */}
                          <span className="clip-notch flex h-11 w-11 items-center justify-center bg-gradient-to-br from-white/12 to-white/[0.02] font-mono text-xs font-bold text-accent ring-1 ring-white/10 transition-transform duration-200 group-hover/tile:scale-110">
                            {initials(skill)}
                          </span>
                          <span className="w-full truncate text-center text-[10px] leading-tight text-muted-foreground transition-colors group-hover/tile:text-foreground">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
