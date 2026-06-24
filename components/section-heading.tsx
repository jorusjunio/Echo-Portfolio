import { FadeIn } from "@/components/motion/fade-in";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/** Consistent section header: yellow eyebrow + display title + optional lead. */
export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <FadeIn className="mx-auto max-w-2xl text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-valorant text-3xl tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-muted-foreground">{description}</p>
      )}
    </FadeIn>
  );
}
