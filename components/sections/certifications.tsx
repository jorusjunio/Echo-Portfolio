"use client";

import Image from "next/image";
import { Award, Check, Maximize2, BriefcaseBusiness } from "lucide-react";
import { certification } from "@/lib/site-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="container flex min-h-[100svh] scroll-mt-24 flex-col justify-center overflow-hidden py-16"
    >
      <SectionHeading
        eyebrow="Experience & Certifications"
        title="Credentials that back the work"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
        {/* Certificate viewer */}
        <FadeIn direction="right">
          <Card className="h-full overflow-hidden">
            <Dialog>
              <DialogTrigger asChild>
                <button className="group relative block w-full overflow-hidden border-b">
                  <Image
                    src={certification.image}
                    alt={`${certification.title} certificate from TESDA`}
                    width={1000}
                    height={700}
                    className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
                    <span className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground opacity-0 transition-opacity group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4" /> View certificate
                    </span>
                  </span>
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

            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Award className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">
                    {certification.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
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
            </CardContent>
          </Card>
        </FadeIn>

        {/* Competencies + experience */}
        <div className="space-y-6">
          <FadeIn>
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="font-display text-lg font-bold">
                  Core competencies proven
                </h3>
                <ul className="mt-4 space-y-3">
                  {certification.competencies.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-muted-foreground">{c}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Card>
              <CardContent className="p-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold">
                  <BriefcaseBusiness className="h-5 w-5 text-accent" />
                  Experience
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {certification.experience.map((e) => (
                    <Badge key={e} variant="outline">
                      {e}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
