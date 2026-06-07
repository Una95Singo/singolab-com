# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is right now

A **design handoff**, not an implemented site. The repo currently contains only `design_handoff_singolab_site/` — a working HTML/CSS/vanilla-JS prototype plus a detailed spec. The job is to **recreate this design in the target stack** (below), porting the prototype's look, motion, and behavior pixel-faithfully. There is no `package.json`, build, or test setup yet — it gets created when implementation starts.

**`design_handoff_singolab_site/README.md` is the source of truth.** It contains the full design-token table (light/dark colors, fonts, type scale, spacing), per-section copy and layout specs, the signal animation contract, interaction behaviors, accessibility requirements, deployment notes, and the list of authored placeholders to swap. Read it before doing any implementation work — this file only summarizes the architecture.

## The site

Single-page personal site for Unarine "Una" Singo. Warm-minimal editorial aesthetic. Sections: **Hero → Writing → Projects → Music → New York → Now → Footer**, plus standalone `/resume` and a 404 page. The signature element is **the signal**: a hero `<canvas>` animation that draws an audio waveform left→right, then morphs each of ~260 points into one of three line-drawings (portrait / NYC skyline / Lissajous figure), picked at random and weighted toward portrait.

## Reference files (`design_handoff_singolab_site/reference/`)

- `index.html`, `resume.html`, `404.html` — full prototypes with inline `<style>` and `<script>`. Source of truth for layout, copy, and CSS.
- `signal.js` — the canvas animation engine. **Port this logic closely; it's the centerpiece.** Public API: `initSignal(canvas, { onName, portraitDark?, portraitLight?, cxFactor? })` → `{ replay(), setMode(m), currentName() }`. It reads `data-theme` each frame, debounces `window.resize`, and uses a `MutationObserver` on `data-theme` to re-render on theme change. In React, wrap in a `'use client'` component and init in `useEffect`.
- `og-image.png`, `apple-touch-icon.png`, `favicon-32.png` — production assets, ship as-is (→ `public/`).
- `robots.txt`, `sitemap.xml` — deploy to root (→ `public/`); update domain to absolute `https://singolab.com/...`.

## Target stack (per the handoff)

- **Next.js 15 (App Router) + TypeScript + Tailwind CSS.**
- **Static export**: `next.config.js` → `{ output: 'export', images: { unoptimized: true } }`. No server runtime.
- **Deploy: Cloudflare Pages.** Build `next build`, output dir `out`.
- Routes: `/` (home), `/resume`, `not-found.tsx`. Build sections as components (`Hero`, `Writing`, `Projects`, `Music`, `NewYork`, `Now`, `Footer`, `Masthead`); the signal is a client component wrapping `<canvas>`.

## Architecture notes that span files

- **Theming uses CSS variables, not Tailwind's `dark:` variant.** A theme toggle flips `data-theme` on `<html>` and persists to `localStorage['singolab-theme']`; on load, read saved value else fall back to `prefers-color-scheme`. All three pages (home, resume, 404) share this one key, and `signal.js` reads `data-theme` live — so keep the CSS-variable approach rather than converting to Tailwind dark-mode classes. Map tokens to `tailwind.config` theme extensions + CSS variables.
- **All motion is gated behind `prefers-reduced-motion: reduce`** (disable reveals and the signal animation, render end-states immediately). Honor this everywhere.
- **Fonts** (Newsreader / Literata / Spline Sans Mono) load from Google/Fontshare in the prototype — self-host via `next/font` for production, keep `display: swap`.
- Decorative canvas, grid, divider, and icon SVGs are `aria-hidden`; maintain one `h1` per page and the landmark structure.

## Before launch (authored placeholders to swap)

The prototype contains realistic placeholders — see the README's "Content to swap" section for the full list: real Substack post titles/dates, résumé experience entries, the `hello@singolab.com` email, the "Now" date, and switching OG/canonical/JSON-LD URLs from relative to absolute.
