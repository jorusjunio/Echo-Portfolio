import Image from "next/image";
import { about, profile, skillGroups } from "@/lib/site-data";
import { HudFrame } from "@/components/tactical/hud-frame";
import { GlitchFrame } from "@/components/tactical/glitch-frame";

export function About() {
  return (
    <section
      id="about"
      className="section-light relative -mt-px flex min-h-[100svh] scroll-mt-24 flex-col justify-center bg-background py-20 text-foreground"
    >
      {/* Subtle circuit-track background — faded at the top & bottom edges so the
          grid melts into the dividers (no hard horizontal seam line) */}
      <div className="bg-circuit pointer-events-none absolute inset-0 [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,#000_15%,#000_85%,transparent_100%)] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_15%,#000_85%,transparent_100%)]" />

      <div className="container relative">
        <GlitchFrame>
          <HudFrame stripes={false}>
            {/* Section header */}
            <div className="flex items-end justify-between border-b border-foreground/80 pb-3">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/60">
                  {"// 01_ABOUT"}
                </span>
                <h2 className="mt-1 font-valorant text-4xl leading-[0.85] tracking-tight md:text-6xl">
                  ABOUT <span className="text-accent">/</span> ECHO
                </h2>
              </div>
              <span className="hidden font-mono text-xs text-foreground/50 md:block">
                [ PROFILE_DATA ]
              </span>
            </div>

            <div className="mt-5 grid items-start gap-4 lg:grid-cols-[26rem_1fr] lg:gap-6">
              {/* Agent card — asymmetric ticket frame */}
              <div className="mx-auto w-full max-w-[26rem] lg:mx-0">
                {/* Thin volt ring that follows the ticket shape */}
                <div className="clip-ticket bg-accent/40 p-px">
                  <div className="group clip-ticket relative aspect-[4/5] overflow-hidden bg-black">
                    <Image
                      src="/formal-pic.png"
                      alt={`Portrait of ${profile.fullName}`}
                      fill
                      sizes="(min-width: 1024px) 24vw, 80vw"
                      className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    />

                    {/* Brief digital scanline glitch on hover */}
                    <div
                      aria-hidden
                      className="scanlines pointer-events-none absolute inset-0 z-10 opacity-0 mix-blend-screen group-hover:animate-[scan-glitch_0.5s_steps(3,end)]"
                    />
                    {/* Right-edge darken for the vertical label */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black/85 to-transparent"
                    />

                    {/* Vertical agent label along the bottom-right inside edge */}
                    <span className="absolute bottom-4 right-1.5 z-20 rotate-180 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 [writing-mode:vertical-rl]">
                      ECHO // AGENT_01
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-2xl font-semibold leading-snug md:text-3xl">
                  {about.paragraphs[0]}
                </p>
                <div className="mt-4 max-h-[42vh] space-y-3 overflow-y-auto pr-2 text-base leading-[1.55] text-foreground/70">
                  {about.paragraphs.slice(1).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Focus Areas — full width across both columns, below the grid */}
            <div className="mt-6">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/60">
                {"// FOCUS_AREAS"}
              </span>
              <ul className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {skillGroups.map((g) => (
                  <li
                    key={g.title}
                    className="clip-notch flex items-center justify-center border border-foreground/80 px-3 py-2 text-center font-mono text-[11px] font-bold uppercase leading-tight tracking-wider"
                  >
                    {g.title}
                  </li>
                ))}
              </ul>
            </div>
          </HudFrame>
        </GlitchFrame>
      </div>
    </section>
  );
}
