# Theme & Design Tokens

The site's color system. **Source of truth = CSS variables in
[`app/globals.css`](app/globals.css)** (the `:root` and `.dark` blocks). Tailwind
maps those variables to utility classes in
[`tailwind.config.ts`](tailwind.config.ts) — so changing a value in `globals.css`
updates the whole site (light + dark) at once. Never hardcode hex in components;
use the semantic classes below.

## Brand palette

| Swatch | Hex | Role |
| ------ | --- | ---- |
| ⬛ | `#05060A` | Darkest — dark-mode background, light-mode text |
| 🟦 | `#141826` | Navy — dark-mode cards, light-mode solid buttons (`primary`) |
| ⬜ | `#2B2F3A` | Slate — dark-mode muted surfaces, borders, secondary text |
| 🟨 | `#FFB703` | **Brand amber** — accent (CTAs, highlights, focus rings), both modes |
| ⬜ | `#F1F5F9` | Off-white — light-mode background, dark-mode text |

## Token mapping (hex → variable → Tailwind class)

Values in `globals.css` are stored as **HSL channels** (Tailwind wraps them in
`hsl(var(--token))`). Hex equivalents shown for reference.

| Variable | Light | Dark | Use via class |
| -------- | ----- | ---- | ------------- |
| `--background` | `#F1F5F9` | `#05060A` | `bg-background` |
| `--foreground` | `#05060A` | `#F1F5F9` | `text-foreground` |
| `--card` | `#FFFFFF` | `#141826` | `bg-card` |
| `--card-foreground` | `#05060A` | `#F1F5F9` | `text-card-foreground` |
| `--primary` | `#141826` | `#F1F5F9` | `bg-primary` / `<Button variant="primary">` |
| `--primary-foreground` | `#F1F5F9` | `#05060A` | `text-primary-foreground` |
| `--accent` | `#FFB703` | `#FFB703` | `bg-accent`, `text-accent`, `border-accent` |
| `--accent-foreground` | `#05060A` | `#05060A` | `text-accent-foreground` (text on amber) |
| `--muted` | `#FFFFFF` (lifts off the `#F1F5F9` page) | `#2B2F3A` | `bg-muted`, `bg-muted/40` |
| `--muted-foreground` | `#2B2F3A` | lightened `#2B2F3A` | `text-muted-foreground` |
| `--border` / `--input` | faint hairline (`#F1F5F9`↔`#FFFFFF`) | `#2B2F3A` | `border`, `border-border` |
| `--ring` | `#FFB703` | `#FFB703` | focus ring color |
| `--radius` | `1rem` | — | drives `rounded-lg/md/sm` + card radii |

## Where things live

| File | What it controls |
| ---- | ---------------- |
| [`app/globals.css`](app/globals.css) | **All color tokens** (`:root` = light, `.dark` = dark), the `bg-grid` hero backdrop, reduced-motion rules |
| [`tailwind.config.ts`](tailwind.config.ts) | Maps tokens → Tailwind colors; radii scale; `font-display`/`font-sans`; `float` animation |
| [`components/ui/button.tsx`](components/ui/button.tsx) | Button variants (`default`=amber, `primary`=solid, `outline`, `ghost`, `link`) |
| [`components/ui/badge.tsx`](components/ui/badge.tsx) | Badge variants (`accent`=amber, `outline`, `default`) |
| [`components/theme-toggle.tsx`](components/theme-toggle.tsx) | Light/dark toggle (persisted by `next-themes`) |
| [`app/icon.svg`](app/icon.svg) | Favicon — uses `#05060A` + `#FFB703` |
| [`public/profile.svg`](public/profile.svg) | Profile photo placeholder — same palette |

## Typography

- **Headings:** Space Grotesk → `font-display` (loaded in [`app/layout.tsx`](app/layout.tsx))
- **Body:** Inter → `font-sans` (default)

## How to tweak the theme

1. Edit the HSL value in [`app/globals.css`](app/globals.css) (light in `:root`,
   dark in `.dark`). To convert a hex to the `H S% L%` format, use any
   "hex to HSL" converter and drop the commas (e.g. `#FFB703` → `43 100% 51%`).
2. Save — `npm run dev` hot-reloads. No component edits needed.
3. To change the amber brand color everywhere, update **`--accent`** (and
   `--ring`) in both blocks, plus the two SVGs above if you want them to match.
