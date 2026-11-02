---
layout: page
title: Methodology
permalink: /methodology/
---

## What we do not publish

We do not republish data obtained through a third-party platform's API, such as Meta, TikTok or YouTube, or any data whose terms do not allow redistribution. Every figure here comes from a source we can quote and link to.

## Market figures (`data/market_figures.json`)

- Each entry carries the **verbatim sentence** from its source, the source URL, the publication date and the date we checked it.
- **We never stack sources.** Sensor Tower reports app-store in-app purchase revenue. Firms such as Omdia report total revenue, including ads and subscriptions sold outside app stores. These numbers are not comparable, so we never add, subtract or chart them as one series.
- A figure we could not open and read at its source is left out, even when it is widely repeated.

## News (`data/news.json`)

- Source: a Google News search for "microdrama", "microdramas", "micro-drama", "short drama" and "vertical drama" over the past 30 days.
- We publish the headline, publisher, date and link only. We do not summarise or rewrite them.
- When the same story appears from several publishers, the page shows it once. Piracy-mirror listings are removed.

## When "no data" is a broken tool

These failures each looked like a real result. We record them so others do not repeat them.

| Tool | What went wrong | What to do instead |
|---|---|---|
| Meta Ad Library keyword search | Splits compound brand names. A search for "GoodShort" matched "good" and "short" and returned unrelated ads. Every compound app name in this category (ShortMax, NetShort, FreeReels…) is exposed. | Search the exact phrase, or resolve the advertiser's Page ID and filter on it. Note that the library covers EU/UK-served ads only and shows no spend. |
| cninfo announcement query | Returned 0 rows for valid listed tickers, which looked like missing data. | Use the exchange disclosure sites directly. |
| SEC EDGAR | Answers generic fetchers with 403. | Send a compliant User-Agent that names the requester. |
