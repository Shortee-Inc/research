# Shortee Research

Analysis of the microdrama industry, led by Nelson Moses Lassiter, founder and CEO of Shortee.
Published at https://research.myshortee.com/.

Method: `methodology.md` · corrections: `corrections.md` · author: `about.md` · citation: `CITATION.cff`.

## Publishing an article

1. Copy `_templates/article.md` to `_posts/YYYY-MM-DD-short-slug.md`.
2. Fill in the front matter (title, date, summary) and write the article in Markdown.
3. Put images in `assets/<short-slug>/`.
4. Run `node scripts/check-voice.mjs` (it must print `ok`).
5. Merge to `main` — the **Publish site** workflow checks, builds and deploys in a minute or two. If a
   check fails, nothing is published and the live site stays on its last good build.

## Publishing rules

Everything in this repository is public. The goal is to stay clearly within the law and every
source's terms.

- **Third person only — never "we", "our", "us", "I" or "my".** Write "Shortee", "Shortee
  Research" or the passive ("this article", "the figure was read"). `scripts/check-voice.mjs`
  enforces it on every public page, and the Publish site workflow refuses to deploy a page that
  fails it.
- **Publish Shortee Research's analysis; cite sources; never redistribute their data.** Name the
  publisher and link to where each figure was read, with the date read. Quote only the short passage a
  figure comes from.
- **No raw datasets that belong to others** — research reports, data providers, news feeds —
  as files, tables copied wholesale, or downloads.
- **Never publish data read through a third-party platform's API** (Meta/Instagram, TikTok,
  YouTube, X, app-store analytics, ad networks, …) in any form, not even as analysis.
- **Keep a firewall between internal platform data and public work.** Meta's terms count data
  "anonymized, aggregated, or derived" from API pulls as theirs, so internal API data may decide
  *what* is looked at, but no number in a public article may come from it — not copied, not
  rounded, not turned into a rank or a growth rate.
- **A public social figure needs a public route.** Either (a) a person reads it by hand on the
  public profile page — never a script, scraper or API — and it is cited as
  `@handle public Instagram profile, viewed D Month YYYY`; or (b) it comes from someone else's
  publication (a company announcement, press, a research report), cited like any source. Have
  counsel confirm (a) before the first article that uses it.
- Show the arithmetic behind any derived number, and label it as Shortee Research's.
- Articles are at least 1,300 words.
- No internal figures, credentials, or anything not cleared for publication.

© Shortee. All rights reserved.
