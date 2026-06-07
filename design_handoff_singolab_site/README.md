# Handoff: singolab.com — Unarine "Una" Singo personal site

## Overview
A single-page personal site for **Unarine "Una" Singo** — advisor, musician, and husband, re-skilling into AI and writing about it in public. Warm-minimal editorial aesthetic ("field notes from a lab") with one signature interaction: a generative **signal** in the hero — an audio waveform that animates and resolves into one of three line-drawings (a one-line portrait, the NYC skyline, or an oscilloscope/Lissajous figure), chosen at random each visit.

Sections: **Hero → Writing → Projects → Music → New York → Now → Footer**, plus a standalone **Résumé** page and a **404** page.

## About the Design Files
The files in `reference/` are **design references created in HTML/CSS/vanilla JS** — a working prototype showing the intended look, motion, and behavior. They are **not** meant to be shipped as-is. The task is to **recreate this design in the target stack** (below) using its idiomatic patterns.

- `reference/index.html` — the full homepage (all sections, inline `<style>`, inline `<script>`).
- `reference/resume.html` — the Résumé page.
- `reference/404.html` — the 404 page.
- `reference/signal.js` — the hero signal animation engine (canvas). **Port this logic closely; it's the centerpiece.**
- `reference/og-image.png` (1200×630), `apple-touch-icon.png` (180), `favicon-32.png` (64) — production assets, use directly.
- `reference/robots.txt`, `reference/sitemap.xml` — copy to the deployed root.

## Target Stack
- **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS**.
- **Static export**: `next.config.js` → `output: 'export'`. No server runtime.
- **Deploy: Cloudflare Pages** (static). Build command `next build`, output dir `out`.
- Recommended structure: one route `/` (home), one route `/resume`, a `not-found.tsx`. Build sections as components (`Hero`, `Writing`, `Projects`, `Music`, `NewYork`, `Now`, `Footer`, `Masthead`). The signal is a client component (`'use client'`) wrapping a `<canvas>`.

## Fidelity
**High-fidelity.** Recreate pixel-faithfully — exact colors, type, spacing, motion, and the signal behavior. Tokens and measurements are below; map them to `tailwind.config` theme extensions + CSS variables (the light/dark theming relies on CSS variables, so keep that approach rather than Tailwind's `dark:` variant — see Theming).

---

## Design Tokens

### Fonts (Google Fonts + Fontshare today — SELF-HOST for production)
- **Headlines / display:** `Newsreader` (serif). Weights 400–600, optical sizing on. Roman (no italic on the name).
- **Body / reading:** `Literata` (serif). Weights 400–600.
- **Labels / mono / "lab" tags:** `Spline Sans Mono`. Weights 400–500.
- The Résumé page uses the same trio.
- **Production note:** currently loaded from `fonts.googleapis.com`. Self-host via `next/font/local` (or `next/font/google`) to remove the render-blocking request and FOUT, and for privacy. Keep `display: swap`.

### Colors — Light (default / `:root`)
| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FAF7F2` | page background (warm cream) |
| `--paper-2` | `#F2ECE1` | alt section background, tiles |
| `--card` | `#FCFAF6` | cards |
| `--ink` | `#2A2622` | primary text |
| `--ink-2` | `#5A544C` | secondary text |
| `--ink-3` | `#948C81` | muted/labels |
| `--line` | `rgba(42,38,34,0.12)` | hairlines |
| `--line-2` | `rgba(42,38,34,0.18)` | borders |
| `--grid-line` | `rgba(42,38,34,0.05)` | hero grid texture |
| `--accent` | `#2F5BDB` | links, kickers (cobalt) |
| `--warm` | `#E8662F` | warm pop (status dots) |

### Colors — Dark (`html[data-theme="dark"]`)
| Token | Hex |
|---|---|
| `--paper` | `#15120E` |
| `--paper-2` | `#1C1812` |
| `--card` | `#1E1A14` |
| `--ink` | `#F1EBE0` |
| `--ink-2` | `#BEB4A5` |
| `--ink-3` | `#8A8073` |
| `--line` | `rgba(241,235,224,0.12)` |
| `--line-2` | `rgba(241,235,224,0.18)` |
| `--accent` | `#7AA0FF` |
| `--warm` | `#FF9460` |

### Signal gradient (the cyan→cobalt→orange "glow")
- **Dark theme stops:** `#42EAFF` → `#4272FF` → `#FF7E42` (bright, glowing).
- **Light theme stops ("blue flash"):** `#1EA8E6` → `#2F6BF6` → `#1E40FF` (electric blues — reads on cream).
- Applied as a horizontal linear gradient stroke across the canvas width.

### Type scale (clamp() — fluid)
- Hero `h1`: `clamp(58px, 10.5vw, 132px)`, weight 500, line-height 0.95, letter-spacing −0.02em.
- Standfirst: `clamp(20px, 2.6vw, 27px)`, Newsreader 400, line-height 1.38.
- Section title (`h2`): `clamp(30px, 4.4vw, 46px)`, weight 500, letter-spacing −0.018em.
- Footer headline: `clamp(34px, 6vw, 68px)`.
- Body: 18px / line-height 1.6 (Literata).
- Kickers/labels: Spline Sans Mono 12px, letter-spacing 0.14–0.24em, uppercase.
- Card titles: Newsreader ~22–24px.

### Spacing / radius / motion
- Content max-width: **1080px**; horizontal padding `clamp(22px, 5vw, 56px)`.
- Section vertical padding: `clamp(86px, 12vw, 144px)`.
- Section inner grid (`.seccol`): `220px 1fr`, gap `clamp(28px, 5vw, 64px)`; collapses to 1 column ≤760px.
- Card radius: 6px; tiles 6–8px; pills/buttons 100px (fully round).
- Masthead height: 64px, fixed, `backdrop-filter: blur(10px)`, border appears after 12px scroll.
- Reveal-on-scroll: elements start `opacity:0; translateY(18px)`, transition to visible over **0.8s** `cubic-bezier(.2,.7,.2,1)`; hero items stagger by `index*90ms`.
- All motion must be gated behind `@media (prefers-reduced-motion: reduce)` (disable reveals + the signal animation, show end-states).

---

## Screens / Sections

### Masthead (fixed top, all pages)
- Left: wordmark `singolab` (Newsreader 21px/500) + a cobalt period `.`.
- Right (desktop): nav links `Writing · Projects · Music · New York · Now · Résumé` (Spline Mono 12px, `--ink-2`, animated underline on hover), then a hamburger (hidden on desktop) and a circular **theme toggle** button (sun/moon SVG, 34px round).
- **Mobile (≤700px):** nav links hide; hamburger shows; tapping it slides down a full-width panel (`#navlinks.open`) with the links stacked, hairline dividers, `backdrop-filter` blur. Tapping a link closes it. `aria-expanded` toggles on the button.

### 1 — Hero (`#top`)
- Full viewport (`min-height: 100svh`). Layers: faint **engineering grid** background (`--grid-line`, 42px cells, radial mask fading top-right), the **signal `<canvas>`** (decorative, `aria-hidden`), then content.
- Content (left, vertically centered, max-width within 1080 wrap): mono kicker `Field Notes — Nº 01` (cobalt); `h1` **"Una Singo"** (Newsreader, roman); standfirst *"Advisor, musician and husband — upskilling in public, and sharing every step of it with the world."*; a **"Currently"** status line: a warm blinking dot + `Currently — teaching Otis to write the blues, in New York.` (the word "Otis" links to `#projects`).
- Bottom-left overlay: `the signal resolves into <b id="sigName">…</b>` (live caption naming the current drawing) + a `↻ redraw` button that re-runs the signal.

### 2 — Writing (`#writing`)
- Section kicker `01 — Latest writing`, sub-label *"From Learning AI Out Loud, my Substack."*
- Title: *"Notes from teaching myself, out loud."*
- A list of 3 posts (`.posts`, hairline-separated rows). Each row: `Nº 07` (mono) | title (Newsreader, turns cobalt on hover) + one-line dek | meta `Apr 2026 · 8 min` + `↗` arrow (translates on hover). Whole row links to Substack.
- Below: a "Read the whole archive on Substack" link row.
- **Post titles/dates are realistic PLACEHOLDERS** — see "Content to swap."

### 3 — Projects (`#projects`, alt background)
- Kicker `02 — Projects`, sub *"Small, useful things — built in the open."* Title *"Things I'm building to learn."*
- **Feature card** (2-col, `1.15fr 0.85fr`, collapses ≤720px): left = a status pill (`in progress`, warm outline) + mono label `A TOY LANGUAGE MODEL`, `h3` **Otis**, description, and tech **tags** (`Python`, `PyTorch`, `nanoGPT`, `Modal`, `Weights & Biases` — mono, bordered chips). Right = a "terminal" panel (`--paper-2` bg) showing a faux Otis blues-lyric sample in mono with a blinking cursor.
- Two smaller `.xcard`s below (2-col): **Signal** (status `shipped`) and **Fieldbook** (status `tinkering`), each with a title, description, and tags.

### 4 — Music (`#music`)
- Kicker `03 — Music`, sub *"Low end, on the weekends."* Title *"I play bass in Rx Sneakers."*
- Row (`300px 1fr`): an **album tile** = a small custom waveform/equalizer SVG (9 cobalt vertical bars of varying height) + `Rx Sneakers` / `Listen on Apple Music ↗`, linking to the Apple Music album. Beside it, a short serif note.

### 5 — New York (`#newyork`, alt background)
- Kicker `04 — New York`, sub *"A working field guide to my city."* Title *"My New York, in short."*
- Two columns (`.guide`, `1fr 1fr`, collapses ≤680px): **Eat & drink** and **Move & hear**. Each is a list; each row is a grid `64px 1fr` where col 1 = mono category label (cobalt, e.g. `Dinner`/`Jazz`), col 2 row 1 = place name (Newsreader, cobalt on hover), col 2 row 2 = neighborhood (mono, muted). Hairline between rows.
- Real entries (these are FINAL, real):
  - Eat & drink — **Piccola Cucina** · Upper West Side; **Black Seed** · Long Island City; **At home** · every morning (coffee).
  - Move & hear — **Django** · Tribeca (jazz); **Equinox** · Hudson Yards (swim); **The waterfront** · Williamsburg & LIC (run).
- Note line: *"The short list — ask me for the long one."*

### 6 — Now (`#now`)
- Kicker `05 — Now`, sub *"What I'm focused on this month."*
- A dated card: warm dot + `Updated May 2026 · New York`, then a short serif paragraph about building Otis. **Date/content to be kept current.**

### Signal divider (between Now and Footer)
- Full-width thin SVG: a flat hairline with a small oscilloscope "blip" in the center, stroked with the cyan→cobalt→orange gradient. Decorative (`aria-hidden`).

### Footer
- Headline *"Let's make something — say hello."* (the email links via `mailto:`). Sub line. Then a row of round pill links: **Email · LinkedIn · Substack · GitHub · Résumé · Rx Sneakers** (each with a `↗`). Hairline, then a colophon: *"Set in Newsreader & Literata · the signal drawn in Canvas"* and *"© 2026 Unarine Singo · Built in New York."*

### Résumé page (`/resume`)
- Standalone editorial CV in the same system. Topbar: `← singolab` back link + `Download PDF` (calls `window.print()`) + `Email`. Header with name + role summary. Two-column body: sticky left rail (Contact / Focus chips / Tools chips / Also) + main column (Summary, Experience, Education, Writing). **Experience entries are PLACEHOLDERS** (bracketed `[Firm]`, `20XX`); Education uses real facts (University of Cape Town; Mandela Rhodes Scholar). Has a "Draft — swap in your real details" note. Inherits theme from the same `localStorage` key.

### 404 page (`/not-found`)
- Centered: mono kicker `// signal lost — Nº 404`, giant `404`, line *"This page didn't resolve into anything."*, and a `← back to singolab` pill. Inherits theme.

---

## The Signal (port `signal.js` — this is the signature element)
A `<canvas>` filling the hero. On load it builds three geometries and **picks one at random, weighted toward portrait** (`['portrait','portrait','skyline','lissajous']`).

**Animation (per play):** total ≈ 2.8s + 0.5s hold.
1. **Draw phase (0–1200ms):** an audio-style flat waveform draws left→right (`easeOut`). The waveform is a sum of sines around vertical center.
2. **Morph phase (1200–2800ms, `easeInOut`):** each of the N=260 points lerps from its waveform position to the target shape's position — the line "becomes" the drawing.
3. Holds the final shape.

**Three targets:**
- `portrait` — a single continuous line (Catmull-Rom spline through ~14 keypoints) forming a minimal face/profile. *(Note: an earlier photo-traced version was explicitly rejected — keep the clean one-line vector.)*
- `skyline` — a recognizable NYC silhouette sampled as y=f(x) from a control-point array (One WTC + spire, Empire State mast, Chrysler crown, a thin supertall, water line).
- `lissajous` — parametric `x=sin(3t+π/2), y=sin(2t)` oscilloscope figure.

**Rendering:** stroke = the theme-aware signal gradient (see tokens); a glow pass (lower alpha + `shadowBlur`) under a crisp pass. `lineWidth` ~2.3.

**Theme-aware:** reads `document.documentElement[data-theme]` each frame; uses bright stops + stronger glow on dark, the "blue flash" stops + lighter glow on light. A `MutationObserver` on `data-theme` re-renders the final frame when the theme toggles.

**Reduced motion:** if `prefers-reduced-motion: reduce`, skip animation and render the final shape immediately.

**Public API used by the page:** `initSignal(canvasEl, { onName, portraitDark?, portraitLight?, cxFactor? })` returns `{ replay(), setMode(m), currentName() }`. `onName(label)` updates the hero caption. The `↻ redraw` button calls `replay()` (re-picks + replays). In React, wrap in a client component, init in `useEffect`, handle resize (the engine already debounces `window.resize`).

---

## Interactions & Behavior
- **Theme toggle:** button flips `data-theme` on `<html>`, persists to `localStorage['singolab-theme']`. On load, read saved value else fall back to `prefers-color-scheme`. **All pages share this key** (home, resume, 404).
- **Reveal-on-scroll:** `IntersectionObserver` adds `.in` to `.reveal` elements (threshold ~0.08, rootMargin bottom −8%); hero reveals immediately on load with stagger. Disable under reduced-motion.
- **Mobile menu:** hamburger toggles `.open` on the nav panel + `aria-expanded`; links close it.
- **Masthead:** gains a bottom border (`.scrolled`) after 12px scroll.
- **Smooth scroll** to anchors via CSS `scroll-behavior: smooth` (auto under reduced-motion).
- Hover/focus states throughout; **`:focus-visible` outline** (2px `--accent`, 3px offset) on all links/buttons — keep for accessibility.

## State Management
Minimal/local. In React: a `theme` state (synced to `localStorage` + `<html>` attribute, lifted so all components react), an `IntersectionObserver` for reveals (or a small `useReveal` hook), the mobile-menu `open` boolean, and the signal's internal animation state inside its client component. No data fetching required (all content is static/authored).

## Accessibility
- Decorative canvas, grid, divider, and icon SVGs are `aria-hidden="true"`.
- Maintain heading order (one `h1` per page, then `h2`/`h3`). Use `<header>`, `<main>`, `<nav>`, `<footer>` landmarks (already in the markup).
- Keep `:focus-visible` rings; ensure the mobile menu is keyboard-operable.
- Honor `prefers-reduced-motion` everywhere.
- Verify `--ink-3`-on-`--paper` meets WCAG AA for any text that must be readable (it's used for muted labels; bump if a contrast check flags it).

## Assets
- `og-image.png` (1200×630) — OG/Twitter share card. Referenced via `og:image` / `twitter:image`.
- `apple-touch-icon.png` (180), `favicon-32.png` (64), plus an inline SVG favicon (a waveform monogram on a dark rounded square — data-URI in `<head>`).
- All other graphics are inline SVG (album equalizer, signal divider, theme/menu icons) or canvas-drawn (the signal). No external image dependencies.

## Deployment notes (Cloudflare Pages)
- `next.config.js`: `{ output: 'export', images: { unoptimized: true } }` (static export, no Image Optimization server).
- Place `robots.txt`, `sitemap.xml`, `og-image.png`, and the favicons in `public/`.
- **Change the OG/canonical/JSON-LD URLs to absolute `https://singolab.com/...`** before launch — social scrapers and search need absolute paths (the prototype uses relative `og-image.png`).
- Keep the JSON-LD `Person` schema (in `<head>` of the prototype) — update if details change.

## Content to swap (authored placeholders the owner will provide)
- **Email:** `hello@singolab.com` is a placeholder (owner is creating a real one) — update all `mailto:` links.
- **Writing:** the 3 post titles/dates/links are realistic placeholders → swap for real Substack posts (publication: `https://usingo.substack.com`). The "Otis" article may not exist — treat Otis as a *project*, not an assumed post.
- **Résumé:** Experience entries are bracketed placeholders → real history. (Education facts are real.)
- **Now:** keep the dated paragraph current.
- Real/confirmed links: LinkedIn `https://www.linkedin.com/in/unarine-singo-884718203`, GitHub `https://github.com/Una95Singo`, Substack `https://usingo.substack.com`, Apple Music album `https://music.apple.com/us/album/sex-rap/1885221086`.

## Files in this bundle
- `reference/index.html` — full homepage prototype (source of truth for layout, copy, CSS).
- `reference/resume.html` — Résumé page.
- `reference/404.html` — 404 page.
- `reference/signal.js` — signal engine (port closely).
- `reference/og-image.png`, `apple-touch-icon.png`, `favicon-32.png` — ship as-is.
- `reference/robots.txt`, `reference/sitemap.xml` — deploy to root (update domain if needed).

## Screenshots (`screenshots/`)
Rendered reference images of the built design (visual target for the implementation):
- `01-section.png` / `02-section.png` — hero, **light** and **dark** themes (the hero signal is a live `<canvas>` and is faint/absent in static captures — see `reference/og-image.png` and the "The Signal" section for its intended look).
- `03`–`08-section.png` — Writing, Projects, Music, New York, Now + signal divider, Footer.
- `09-resume.png` — Résumé page (light).
- `10-notfound.png` — 404 page (dark).
- `reference/og-image.png` doubles as the canonical example of the signal's gradient line treatment.
