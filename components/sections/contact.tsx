"use client";

import * as React from "react";
import {
  Loader2,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import { contact } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { TacticalBackdrop } from "@/components/tactical/tactical-backdrop";

type Status = "idle" | "submitting" | "success" | "error";

// Web3Forms access key — set NEXT_PUBLIC_WEB3FORMS_KEY in your env (see .env.local.example).
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

// Sharp, tactical field styling.
const fieldCls =
  "rounded-none border-foreground/20 bg-foreground/[0.03] focus-visible:ring-0 focus-visible:border-accent";

export function Contact() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", "New message from your portfolio site");
    data.append("from_name", "Echo Portfolio");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again or email me directly.");
    }
  }

  return (
    <section
      id="contact"
      className="relative flex min-h-[100svh] scroll-mt-24 flex-col justify-center overflow-hidden bg-background py-16 text-foreground"
    >
      <TacticalBackdrop index="06" code="COMMS_LINK" />

      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something"
          description="Have a project, a question, or want to hire me? Send a message and I’ll get back to you."
        />

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Socials */}
          <FadeIn direction="right" className="flex flex-col gap-3">
            {contact.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel="noopener noreferrer"
                  className="group clip-corner block bg-foreground/15 p-px transition-colors duration-300 hover:bg-accent/60"
                >
                  <span className="clip-corner flex items-center gap-4 bg-card p-4">
                    <span className="clip-notch flex h-11 w-11 shrink-0 items-center justify-center bg-foreground text-background transition-colors duration-300 group-hover:bg-accent group-hover:text-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        {social.label}
                      </div>
                      <div className="truncate text-sm font-semibold">
                        {social.display}
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </span>
                </a>
              );
            })}
          </FadeIn>

          {/* Form */}
          <FadeIn className="h-full">
            <div className="clip-corner h-full bg-foreground/15 p-px transition-colors duration-300 hover:bg-accent/40">
              <div className="clip-corner flex h-full flex-col bg-card p-6">
                {/* HUD header */}
                <div className="mb-5 flex items-center justify-between border-b border-foreground/10 pb-3">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {"// SEND_MESSAGE"}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    [ SECURE ]
                  </span>
                </div>

                {status === "success" ? (
                  <div className="flex flex-1 flex-col items-center justify-center gap-3 py-10 text-center">
                    <CheckCircle2 className="h-12 w-12 text-accent" />
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                      Message sent
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Thanks for reaching out — I’ll reply soon.
                    </p>
                    <Button
                      variant="outline"
                      className="rounded-none"
                      onClick={() => setStatus("idle")}
                    >
                      Send another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="flex flex-1 flex-col gap-4">
                    {/* Honeypot anti-spam field (Web3Forms convention) */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="Juan Dela Cruz"
                          className={fieldCls}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@email.com"
                          className={fieldCls}
                        />
                      </div>
                    </div>
                    <div className="flex-1 space-y-1.5">
                      <label
                        htmlFor="message"
                        className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell me about your project…"
                        className={`${fieldCls} min-h-[120px]`}
                      />
                    </div>

                    {!WEB3FORMS_KEY && (
                      <p className="flex items-start gap-2 border border-foreground/10 bg-foreground/[0.03] p-3 text-xs text-muted-foreground">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        Set{" "}
                        <code className="font-mono">
                          NEXT_PUBLIC_WEB3FORMS_KEY
                        </code>{" "}
                        to enable form delivery. Until then, use the contact
                        links.
                      </p>
                    )}

                    {status === "error" && (
                      <p className="flex items-center gap-2 text-sm text-red-500">
                        <AlertCircle className="h-4 w-4" /> {error}
                      </p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="clip-notch w-full rounded-none font-bold uppercase tracking-wider"
                      disabled={status === "submitting" || !WEB3FORMS_KEY}
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                        </>
                      ) : (
                        <>
                          Send Message <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
