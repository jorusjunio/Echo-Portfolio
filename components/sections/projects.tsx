import { Check, FolderGit2 } from "lucide-react";
import { projects } from "@/lib/site-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { ProjectsBackdrop } from "@/components/tactical/projects-backdrop";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative flex min-h-[100svh] scroll-mt-24 flex-col justify-center overflow-hidden bg-background py-16 text-foreground"
    >
      {/* Interactive volt "light blinds" backdrop */}
      <ProjectsBackdrop />

      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Real systems I've designed and built end-to-end."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 0.08} className="reveal-card p-px">
            <Card className="glass group h-full overflow-hidden transition-shadow hover:shadow-[0_0_24px_hsl(var(--accent)/0.2)]">
              {/* Placeholder visual — swap with a real screenshot in /public. */}
              <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b bg-gradient-to-br from-muted to-accent/10">
                <FolderGit2 className="h-16 w-16 text-accent/40 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute bottom-3 right-4 text-xs font-medium text-muted-foreground">
                  Preview coming soon
                </span>
              </div>

              <CardContent className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="accent">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-foreground/90"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
