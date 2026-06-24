import { contact, profile } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <span className="font-display text-lg font-extrabold tracking-tight">
            {profile.name}
            <span className="text-accent">.</span>
          </span>
          <p className="text-sm text-muted-foreground">
            © {year} {profile.fullName}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {contact.socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
