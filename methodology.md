---
layout: page
title: Methodology
permalink: /methodology/
---

## Social data (`data/instagram_followers.csv`)

- **Source:** Meta's official Instagram Business Discovery API. It reads public counts for Business and Creator accounts.
- **Accounts:** the official Instagram account of each app. We identified each one by its display name and size.
- **Cadence:** one reading per account per UTC day. If an account is read twice in a day, the later reading replaces the earlier one.
- **Limits:** the API reads only Business and Creator accounts. Several apps (for example GoodShort, FlexTV and PineDrama) have no public Business account that we could confirm, so they are not tracked. Follower counts measure audience size on one platform. They do not measure installs, revenue or viewing.

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
