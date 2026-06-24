# ECHO — Portfolio

A high-contrast, **Valorant / near-future techwear** themed portfolio for **Echo John Calderon** — Software Developer, Electronics Enthusiast & Creative Content Creator.

A single-page, fully static experience with cinematic scroll transitions, a strict **black / volt-yellow / white** design system, and tactical HUD-style UI.

> **Live:** _add your deploy URL here_

---

## ✨ Highlights

- **Cinematic sticky hero** — a pinned, full-screen intro with a cursor-led flashlight reveal over an industrial robotic claw, glitch title, and scramble/typewriter terminal text.
- **Glitch-reassemble About panel** — the agent card + HUD frame digitally reconstruct in sliced bands on entry, then lock solid; glitch-shatter on exit.
- **Interactive Skills** — 3D tilt cards (macOS-style sheen) over an animated volt grid, drifting blooms, and a scanning beam.
- **Frosted-glass Projects** — soft drifting volt glow blobs behind a glassy film.
- **White tactical Services** — dramatic cyberpunk cards with angled cuts, index watermarks, and volt hover-flips.
- **Signature transitions** — sharp diagonal `TacticalDivider` slashes between dark sections and white "islands."
- **Polished motion** — Lenis smooth scroll, floating glass capsule navbar, scroll-progress bar, global scroll-reveal — all honoring `prefers-reduced-motion`.
- **Static export** — ships as plain HTML/CSS/JS; deploy anywhere.

---

## 🧱 Tech Stack

| Concern | Choice |
| --- | --- |
| Framework | [Next.js 14](https://nextjs.org/) (App Router, **static export**) |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + CSS-variable design tokens |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Smooth scroll | [Lenis](https://lenis.darkroom.engineering/) |
| UI primitives | Radix UI (Dialog, Slot) + shadcn-style components |
| Icons | [lucide-react](https://lucide.dev/) |
| Contact form | [Web3Forms](https://web3forms.com/) (no backend, no database) |
| Hosting | Vercel (or any static host) |

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Add your Web3Forms key
cp .env.local.example .env.local   # then paste your key

# 3. Run the dev server
npm run dev                         # → http://localhost:3000
```

> Requires **Node.js 18+**.

### Build & preview the static site

```bash
npm run build      # outputs static files to ./out
npm run preview    # serves ./out locally to verify the export
```

---

## 📁 Project Structure

```
app/
  layout.tsx        # Root layout, fonts, global providers
  page.tsx          # Section composition + section transitions
  globals.css       # Design tokens, utilities, keyframes
  fonts/            # Local display font (Valorant.ttf)
components/
  sections/         # Hero, About, Skills, Projects, Services, Certifications, Contact, Footer
  tactical/         # HUD frame, glitch frame, tilt card, backdrops, terminal text
  motion/           # Scroll-reveal helpers
  ui/               # shadcn-style primitives (button, card, dialog, …)
lib/
  site-data.ts      # Single source of truth for all copy/content
  utils.ts          # cn() helper
public/             # Images (robot-arm, formal-pic, certificate)
```

---

## ✏️ Editing Content

All site copy (hero, about, skills, projects, services, certification, contact, links) lives in **[`lib/site-data.ts`](lib/site-data.ts)** — edit there, no JSX changes needed. To swap images, replace the files in **`public/`** (keep the filenames, or update the references).

---

## 🌐 Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — Next.js is auto-detected.
3. Add the environment variable `NEXT_PUBLIC_WEB3FORMS_KEY` in **Project Settings → Environment Variables**.
4. Deploy. SSL + CDN are automatic.

The static `./out` output also works on **Netlify** (publish dir: `out`), **GitHub Pages**, or any static CDN.

---

## ✅ To finalize before launch

- [ ] Web3Forms access key (in `.env.local` and on the host) — free key at [web3forms.com](https://web3forms.com)
- [ ] Real project screenshot(s) → set `image` in `lib/site-data.ts`
- [ ] Optional: resume PDF for the "Hire Me" button
- [ ] Optional: PDF version of the certificate

---

## 📝 Notes

- The display font (`app/fonts/Valorant.ttf`) is a fan-made typeface inspired by VALORANT; verify its license before any commercial use. The "VALORANT" name/aesthetic are trademarks of Riot Games, used here for stylistic inspiration only.

---

## 📄 License

© Echo John Calderon. All rights reserved. _(Adjust to your preferred license.)_
