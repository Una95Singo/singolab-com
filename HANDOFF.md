# Handoff — singolab.com

Status and open items. See `CLAUDE.md` for architecture.

## Current state

The site is **live at [singolab.com](https://singolab.com)**, served by
Cloudflare Pages from `main` (Next.js 15 static export, `output: 'export'` →
`out/`). Pushing to `main` deploys.

The companion project **Robot to Red Light** is live at
[drive.singolab.com](https://drive.singolab.com) as its *own* Cloudflare Pages
project, built from
[Una95Singo/robot-to-red-light](https://github.com/Una95Singo/robot-to-red-light).
The two deploy independently; this repo only links to it, via `LINKS.studyGuide`
and `LINKS.studyGuideRepo` in `lib/site.ts`.

The Projects section holds two entries — the *Learning AI Out Loud* series (in
progress) and the study guide (shipped). The two placeholder cards that used to
sit below them, "Signal" and "The demos", have been removed.

The Writing section lists all seven Substack posts, newest first.

## Open items

1. **Email.** `lib/site.ts` `EMAIL` is still the `hello@singolab.com`
   placeholder. It is the single source of truth and flows into the footer, the
   résumé and the JSON-LD, so swapping it is a one-line change once a real
   address exists.

2. **The "Now" section is stale.** `Now.tsx` reads *Updated Jun 2026* and talks
   about finishing the next episode — but EP 3 published on 9 Jun 2026, and
   three more posts have gone up since. It needs the owner's own words, not a
   guess, and then the date bumped to match.

3. **The résumé may be behind.** The 1 Aug 2026 post announces a promotion to
   Principal at BCG. Worth checking `app/resume/page.tsx` reflects that.

## Keeping the writing list current

`Writing.tsx` hand-maintains a copy of the Substack archive. Take titles, dates
and URLs from the source rather than memory:

```
curl -s "https://usingo.substack.com/api/v1/archive?sort=new&limit=30" \
  | python3 -c "import json,sys; [print(p['post_date'][:10], '|', p['title'], '|', p['canonical_url']) for p in json.load(sys.stdin)]"
```

`Post.wip` renders a row as an unlinked "Draft" teaser — used when a post is
written but not yet published.

## Constraints

- **This repo is public.** No secrets, no phone number, no personal email, no
  unpublished draft content.
- Cloudflare auth is the owner's to do locally, so credentials never enter the
  repo.
- Work on a branch; commit only when asked; no force-push to `main`.

## Build / run reference

```
npm install
npm run dev      # local dev at http://localhost:3000
npm run build    # static export to out/
```

Node is via Homebrew; if `node`/`npm` aren't found, prefix with
`export PATH="/opt/homebrew/bin:$PATH"`.
