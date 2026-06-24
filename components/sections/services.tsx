import { services } from "@/lib/site-data";
import { TiltCard } from "@/components/tactical/tilt-card";

export function Services() {
  return (
    <section
      id="services"
      className="section-light relative flex min-h-[100svh] scroll-mt-24 flex-col justify-center overflow-hidden bg-background py-20 text-foreground"
    >
      {/* Faint circuit grid, faded into the dividers at the edges */}
      <div className="bg-circuit pointer-events-none absolute inset-0 [-webkit-mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)] [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)]" />
      {/* Dramatic oversized watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-display text-[28vw] leading-none tracking-tighter text-foreground/[0.035] md:text-[20vw]"
      >
        OPS
      </span>

      <div className="container relative z-10">
        {/* Heading */}
        <div className="mb-12 flex items-end gap-4">
          <span
            aria-hidden
            className="hidden h-16 w-1.5 shrink-0 -skew-x-12 bg-accent md:block"
          />
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              {"// 04_SERVICES"}
            </span>
            <h2 className="mt-2 font-valorant text-5xl leading-[0.9] tracking-tight md:text-7xl">
              CREATIVE <span className="text-accent">OPS</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-foreground/60 md:text-base">
              Creative production services for students, creators, and small
              businesses.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <TiltCard
                key={service.title}
                className="h-full"
                intensity={6}
                glareClassName="clip-corner"
              >
                {/* Black hairline edge following the cut → volt on hover */}
                <div className="clip-corner h-full bg-foreground/80 p-px shadow-[0_18px_40px_-26px_rgba(0,0,0,0.55)] transition-colors duration-300 group-hover:bg-accent">
                  <div className="clip-corner relative flex h-full flex-col overflow-hidden bg-background p-5">
                    {/* Big index watermark */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-1 -top-4 select-none font-display text-7xl leading-none text-foreground/[0.06] transition-colors duration-300 group-hover:text-accent/25"
                    >
                      0{i + 1}
                    </span>

                    {/* Icon tile — black, flips to volt on hover */}
                    <span className="clip-notch flex h-12 w-12 items-center justify-center bg-foreground text-background transition-colors duration-300 [transform:translateZ(35px)] group-hover:bg-accent group-hover:text-foreground">
                      <Icon className="h-6 w-6" />
                    </span>

                    <h3 className="mt-4 font-display text-xl tracking-wide [transform:translateZ(20px)]">
                      {service.title}
                    </h3>
                    <span aria-hidden className="mt-3 h-px w-full bg-foreground/10" />

                    <ul className="mt-3 space-y-1.5">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 font-mono text-[11px] uppercase leading-snug tracking-wide text-foreground/65"
                        >
                          <span
                            aria-hidden
                            className="mt-[5px] h-1.5 w-1.5 shrink-0 -skew-x-12 bg-accent"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
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
