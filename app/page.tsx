import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { TacticalDivider } from "@/components/sections/tactical-divider";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Sticky hero — stays pinned & full-screen; the content below rises up
            and over it for a cinematic transition (no empty gap, and About is
            never visible while you're on the hero). */}
        <div className="sticky top-0 z-0 h-[100svh] overflow-hidden">
          <Hero />
        </div>

        {/* Everything below scrolls up over the pinned hero */}
        <div className="relative z-10">
          {/* Sharp diagonal slash: hero blends down into white About */}
          <TacticalDivider from="#0A0A0A" to="#FFFFFF" fadeTop />
          <About />
          {/* Slash back: white About cuts into the dark sections below */}
          <TacticalDivider from="#FFFFFF" to="#0A0A0A" />
          <Skills />
          <Projects />
          {/* Slash into the white Services island, then back to dark */}
          <TacticalDivider from="#0A0A0A" to="#FFFFFF" />
          <Services />
          <TacticalDivider from="#FFFFFF" to="#0A0A0A" />
          <Certifications />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
