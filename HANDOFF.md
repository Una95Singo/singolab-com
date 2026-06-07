# Handoff — singolab.com

Status as of this handoff. See `CLAUDE.md` for architecture; this file is the
prioritized next-steps list for whoever picks the work up.

## Current state

- The site is **built and working**: Next.js 15 + TypeScript + Tailwind,
  configured for **static export** (`output: 'export'` → `out/`).
- Branch: **`build/nextjs-site`** (2 commits, not yet merged to `main`, not pushed).
- Content is **real** (no placeholders left except the email — see below):
  - Writing: real *Learning AI Out Loud* posts (EP 1, EP 2, Introduction) link
    to Substack; **EP 3 is shown as an unpublished work-in-progress teaser**.
  - Résumé: privacy-conscious, LinkedIn-level — no phone, no personal email, no
    confidential client detail. Real roles/education.
- **Visual QA passed** (home light+dark, résumé, 404, signal canvas, theming) —
  zero console errors.

## Constraints (important)

- **This repo is public.** Do not commit secrets, the phone number, the personal
  email, or unpublished draft content. The EP 3 draft and the
  `bigram-commentator.html` demo are intentionally **not** in the repo.
- Cloudflare auth must be done by the owner locally (`npx wrangler login`) so
  credentials never enter the repo.
- Work on a branch; commit only when asked; no force-push to `main`.

## Next steps (prioritized)

1. **Merge `build/nextjs-site` → `main`** (or push + open a PR). `main` should be
   the source of truth Cloudflare builds from.

2. **Deploy to Cloudflare Pages** (domain `singolab.com` already purchased there).
   - Framework preset: Next.js (Static HTML Export). Build command: `next build`.
     Build output directory: `out`.
   - No server runtime / no env vars required.
   - `public/robots.txt`, `sitemap.xml`, `og-image.png`, favicons already in place.
   - Point the apex domain at the Pages project; verify HTTPS + the custom domain.

3. **Content to finalize** (owner provides the real values):
   - **Email:** `hello@singolab.com` is still a placeholder — swap in the real
     address in `lib/site.ts` (`EMAIL`) once it exists. Single source of truth.
   - **Publish EP 3:** when live, flip its row in `app/components/Writing.tsx`
     from the `wip` teaser to a real linked post, and host the interactive
     `bigram-commentator.html` demo (owner has the file) at e.g.
     `public/demos/bigram-commentator/index.html` →
     `singolab.com/demos/bigram-commentator` so the post can embed it.
   - **Verify SoundCloud URL** (`lib/site.ts` `LINKS.soundcloud`) — couldn't load
     the page to confirm during build.

## Build / run reference

```
npm install
npm run dev      # local dev at http://localhost:3000
npm run build    # static export to out/
```

Note: Node is via Homebrew; if `node`/`npm` aren't found, prefix with
`export PATH="/opt/homebrew/bin:$PATH"`.
