"use client";

import Image from "next/image";
import { Award, Maximize2, BriefcaseBusiness } from "lucide-react";
import { certification } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { TacticalBackdrop } from "@/components/tactical/tactical-backdrop";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative flex min-h-[100svh] scroll-mt-24 flex-col justify-center overflow-hidden bg-background py-16 text-foreground"
    >
      <TacticalBackdrop index="05" code="CRED_VAULT" />

      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Experience & Certifications"
          title="Credentials that back the work"
        />

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Certificate viewer */}
          <FadeIn direction="right" className="h-full">
            <div className="clip-corner h-full bg-foreground/20 p-px transition-colors duration-300 hover:bg-accent/60">
              <div className="clip-corner flex h-full flex-col overflow-hidden bg-card">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="group relative block w-full overflow-hidden border-b border-foreground/10 bg-black/40">
                      <Image
                        src={certification.image}
                        alt={`${certification.title} certificate from TESDA`}
                        width={1000}
                        height={700}
                        className="mx-auto max-h-[42vh] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      {/* Scan overlay + view chip */}
                      <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/50">
                        <span className="clip-notch flex items-center gap-2 bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <Maximize2 className="h-4 w-4" /> Inspect
                        </span>
                      </span>
                      {/* Corner tick */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-accent/60"
                      />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogTitle className="sr-only">
                      {certification.title} — TESDA Certificate
                    </DialogTitle>
                    <Image
                      src={certification.image}
                      alt={`${certification.title} certificate from TESDA`}
                      width={1400}
                      height={980}
                      className="h-auto w-full rounded-2xl object-contain"
                    />
                  </DialogContent>
                </Dialog>

                <div className="flex items-start gap-3 p-5">
                  <span className="clip-notch flex h-11 w-11 shrink-0 items-center justify-center bg-accent/15 text-accent">
                    <Award className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold tracking-wide">
                      {certification.title}
                    </h3>
                    <p className="truncate text-sm text-muted-foreground">
                      {certification.issuer}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="accent">
                        Issued {certification.issued}
                      </Badge>
                      <Badge variant="outline">
                        Valid until {certification.validUntil}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Competencies + experience */}
          <div className="flex flex-col gap-5">
            <FadeIn className="flex-1">
              <div className="clip-corner h-full bg-foreground/20 p-px transition-colors duration-300 hover:bg-accent/60">
                <div className="clip-corner flex h-full flex-col bg-card p-5">
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {"// CORE_COMPETENCIES"}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {certification.competencies.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 -skew-x-12 bg-accent"
                        />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="clip-corner bg-foreground/20 p-px transition-colors duration-300 hover:bg-accent/60">
                <div className="clip-corner bg-card p-5">
                  <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    <BriefcaseBusiness className="h-4 w-4" />
                    {"// FIELD_EXPERIENCE"}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {certification.experience.map((e) => (
                      <span
                        key={e}
                        className="clip-notch border border-foreground/20 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-foreground/70"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
