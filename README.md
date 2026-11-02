# Shortee Research

Public articles and research from Shortee, published at
https://research.myshortee.com/.

## Open data

`data/` holds the datasets behind the [Microdrama Index](https://myshortee.com/research): quoted market figures and a news wire. `.github/workflows/sync.yml` copies them from the live page every day at 09:30 UTC and commits only when something changed, so the git history is the dataset history. Method: `methodology.md`; corrections: `corrections.md`; citation: `CITATION.cff`.

## Publishing an article

1. Copy `_templates/article.md` to `_posts/YYYY-MM-DD-short-slug.md`.
2. Fill in the front matter (title, date, summary) and write the article in Markdown.
3. Put images in `assets/<short-slug>/`.
4. Merge to `main` — GitHub Pages rebuilds the site in a minute or two.

## Publishing rules

Everything in this repository is public.

- **Never publish data read through a third-party platform's API** (Meta/Instagram, TikTok,
  YouTube, X, app-store analytics, ad networks, …) — not as a file, a table, a chart or a
  number in an article. Those terms restrict redistribution, and we do not cross that line.
- Every figure must come from a published source we can quote and link to, with the date we read it.
- Articles are at least 1,300 words.
- No internal figures, credentials, or anything not cleared for publication.

© Shortee. All rights reserved.
