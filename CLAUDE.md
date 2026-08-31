# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is right now

An **implemented, working site** — Next.js 15 (App Router) + TypeScript + Tailwind, configured for **static export** (`output: 'export'` → `out/`). It was ported pixel-faithfully from the original design prototype, which still lives in `design_handoff_singolab_site/` as reference.

- **`HANDOFF.md`** (repo root) is the live status + prioritized next-steps / deploy checklist. Read it first to see what's left to do.
- **`design_handoff_singolab_site/README.md`** is the **design source of truth**: full design-token table (light/dark colors, fonts, type scale, spacing), per-section copy/layout specs, the signal animation contract, interaction and accessibility requirements. Consult it when changing look, motion, or copy.

## The site

Single-page personal site for Unarine "Una" Singo. Warm-minimal editorial aesthetic. Sections: **Hero → Writing → Projects → Music → New York → Now → Footer**, plus standalone `/resume` and a 404 page. The signature element is **the signal**: a hero `<canvas>` animation that draws an audio waveform left→right, then morphs each of ~260 points into one of three line-drawings (portrait / NYC skyline / Lissajous figure), picked at random and weighted toward portrait.

## Project structure

```
app/
  layout.tsx          # fonts (next/font), metadata, JSON-LD, no-flash theme script
  page.tsx            # home — composes the section components
  resume/page.tsx     # /resume route (full CV)
  not-found.tsx       # 404 page
  globals.css         # all design tokens + dark mode + component styles + responsive
  components/         # Masthead, Hero, HeroSignal, SignalDivider, Reveal,
                      # Writing, Projects, Music, NewYork, Now, Footer
lib/
  signal.ts           # the canvas animation engine (TypeScript port of signal.js)
  site.ts             # EMAIL + LINKS constants (single source of truth)
public/               # og-image.png, favicons, robots.txt, sitemap.xml (absolute URLs)
design_handoff_singolab_site/   # original prototype + design spec (reference only)
```

### Companion repo

**Robot to Red Light** (`../robot-to-red-light`,
[github.com/Una95Singo/robot-to-red-light](https://github.com/Una95Singo/robot-to-red-light))
is a separate project: a NY permit-test study guide, Vite + React + TS, deployed
as its **own Cloudflare Pages project** at `drive.singolab.com`. This repo only
links to it — from the Projects section, via `LINKS.studyGuide` in `lib/site.ts`.
The two deploy independently; nothing is shared but the domain and the link.

Routes: `/` (home), `/resume`, `not-found`. The signal is a `'use client'` component (`HeroSignal.tsx`) wrapping `<canvas>`; `Masthead.tsx` and `Reveal.tsx` are also client components.

## Commands

```
npm install
npm run dev      # local dev at http://localhost:3000
npm run build    # static export → out/
npm run lint
```

Node is via Homebrew; if `node`/`npm` aren't found, prefix with `export PATH="/opt/homebrew/bin:$PATH"`.

## Deploy

**Cloudflare Pages** (domain `singolab.com` already purchased there). Framework preset *Next.js (Static HTML Export)*, build command `next build`, build output directory `out`. No server runtime, no env vars. See `HANDOFF.md` for the full step-by-step.

## Architecture notes that span files

- **The signal** (`lib/signal.ts`). Public API: `initSignal(canvas, { onName, portraitDark?, portraitLight?, cxFactor? })` → `{ replay(), setMode(m), currentName(), destroy() }`. It reads `data-theme` each frame, debounces `window.resize`, and uses a `MutationObserver` on `data-theme` to re-render on theme change. Initialized in `HeroSignal.tsx`'s `useEffect` with `destroy()` cleanup. It's the centerpiece — change it carefully and re-test both themes.
- **Theming uses CSS variables, not Tailwind's `dark:` variant.** The theme toggle (`Masthead.tsx`) flips `data-theme` on `<html>` and persists to `localStorage['singolab-theme']`; a no-flash script in `layout.tsx` sets it before paint, reading the saved value else falling back to `prefers-color-scheme`. All three pages share this one key, and `signal.ts` reads `data-theme` live — keep the CSS-variable approach rather than converting to Tailwind dark-mode classes. Tokens are mapped in `tailwind.config.ts` via `var()`.
- **All motion is gated behind `prefers-reduced-motion: reduce`** (reveals disabled, signal renders its end-state immediately). Honor this everywhere.
- **Fonts** (Newsreader / Literata / Spline Sans Mono) are self-hosted via `next/font` with `display: swap` — no external font requests at runtime.
- Decorative canvas, grid, divider, and icon SVGs are `aria-hidden`; maintain one `h1` per page and the landmark structure.

## Content still to finalize (see HANDOFF.md)

- **Email:** `lib/site.ts` `EMAIL` is still the `hello@singolab.com` placeholder — swap in the real address once it exists (single source of truth; flows into footer, résumé, and JSON-LD).
- **"Now" section** (`Now.tsx`) still says *Updated Jun 2026* and describes finishing EP 3, which published on 9 Jun 2026. Both the date and the paragraph need the owner's words.
- **Writing list** (`Writing.tsx`) is a hand-maintained copy of the Substack archive. When a post goes up, add a row — titles, dates and links should be taken from `usingo.substack.com/api/v1/archive?sort=new`, not written from memory.

## This repo is public

Do not commit secrets, the phone number, the personal email, or unpublished draft content. Work on a branch; commit only when asked.
