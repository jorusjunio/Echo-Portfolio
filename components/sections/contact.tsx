"use client";

import * as React from "react";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { contact } from "@/lib/site-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";

type Status = "idle" | "submitting" | "success" | "error";

// Web3Forms access key — set NEXT_PUBLIC_WEB3FORMS_KEY in your env (see .env.local.example).
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

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
      className="container flex min-h-[100svh] scroll-mt-24 flex-col justify-center overflow-hidden py-16"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something"
        description="Have a project, a question, or want to hire me? Send a message and I’ll get back to you."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
        {/* Socials */}
        <FadeIn direction="right" className="space-y-4">
          {contact.socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border bg-card p-4 transition-colors hover:border-accent/60"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-semibold">{social.label}</div>
                  <div className="truncate text-sm text-muted-foreground">
                    {social.display}
                  </div>
                </div>
              </a>
            );
          })}
        </FadeIn>

        {/* Form */}
        <FadeIn>
          <Card>
            <CardContent className="p-6">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                  <CheckCircle2 className="h-12 w-12 text-accent" />
                  <h3 className="font-display text-xl font-bold">
                    Message sent!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Thanks for reaching out — I’ll reply soon.
                  </p>
                  <Button variant="outline" onClick={() => setStatus("idle")}>
                    Send another
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
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
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" name="name" required placeholder="Juan Dela Cruz" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell me about your project…"
                    />
                  </div>

                  {!WEB3FORMS_KEY && (
                    <p className="flex items-start gap-2 rounded-xl bg-muted p-3 text-xs text-muted-foreground">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      Set <code className="font-mono">NEXT_PUBLIC_WEB3FORMS_KEY</code> to
                      enable form delivery. Until then, use the contact links.
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
                    className="w-full"
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
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
