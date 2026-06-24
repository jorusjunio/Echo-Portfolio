"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, profile } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [show, setShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    // Reveal the dock once the hero is mostly scrolled past.
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-1/2 top-6 z-50 max-w-[92vw] -translate-x-1/2 transition-all duration-700 ease-apple",
        show
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none -translate-y-[220%] scale-95 opacity-0"
      )}
    >
      {/* Floating cyber-glass capsule dock */}
      <nav className="flex items-center gap-1 rounded-full border border-accent/20 bg-[rgba(10,10,10,0.45)] px-2.5 py-2 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7),0_0_20px_hsl(var(--accent)/0.05)] backdrop-blur-[16px]">
        {/* Logo */}
        <a
          href="#top"
          aria-label={profile.name}
          className="shrink-0 px-3 font-display text-xl font-extrabold tracking-tight text-foreground"
        >
          {profile.name.charAt(0)}
          <span className="text-accent">.</span>
        </a>

        {/* Divider */}
        <span aria-hidden className="mx-1 hidden h-5 w-px bg-accent/20 md:block" />

        {/* Desktop links — pill highlight fades in behind the text on hover */}
        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-accent/10 hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me */}
        <Button
          asChild
          size="sm"
          className="ml-1 hidden shrink-0 rounded-full sm:inline-flex"
        >
          <a href="#contact">Hire Me</a>
        </Button>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="shrink-0 rounded-full text-foreground hover:bg-accent/10 hover:text-accent md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile menu — floating glass card below the dock */}
      {open && (
        <div className="absolute left-1/2 top-full mt-3 w-[min(86vw,18rem)] -translate-x-1/2 rounded-2xl border border-accent/20 bg-[rgba(10,10,10,0.7)] p-2 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7),0_0_20px_hsl(var(--accent)/0.05)] backdrop-blur-[16px] md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <Button asChild className="w-full rounded-xl">
                <a href="#contact" onClick={() => setOpen(false)}>
                  Hire Me
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
