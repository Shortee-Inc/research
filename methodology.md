---
layout: page
title: Methodology
permalink: /methodology/
---

Research on this site is led by [Nelson Moses Lassiter]({{ '/about/' | relative_url }}), founder and CEO of Shortee.

## What we publish, and what we do not

- **We publish our own analysis.** Comparisons, calculations and conclusions are ours, and we show the arithmetic behind every number we derive.
- **We cite our sources; we do not redistribute them.** Every figure names its publisher and links to where we read it, with the date we read it. We quote only the short passage a figure comes from.
- **We do not publish raw datasets** that belong to others: research reports, data providers, news feeds, or data obtained through a third-party platform's API (such as Meta, TikTok or YouTube). Those stay with their owners.

## Social media figures

When an article cites a follower count or similar figure from a social platform, it comes from one of two places, and we say which:

- **The public profile, read by a person.** We open the account's public page, read the number shown, and cite the handle and the date we viewed it. We do not collect these figures with scripts, scrapers or the platform's API.
- **Someone else's publication**, such as a company announcement, a news report or a research report, cited like any other source.

A count shown on a profile is rounded by the platform (for example "1.2M"), so we report it as shown and treat small differences as noise.

## Market figures

- We use a figure only if we could open and read it at its source. A number that is widely repeated but that we could not read at its source is left out.
- **We never stack sources.** Sensor Tower reports app-store in-app purchase revenue. Omdia estimates total microdrama revenue, not only app-store purchases. These numbers are not comparable, so we never add, subtract or chart them as one series.

## News

- We follow microdrama coverage daily through a Google News search for "microdrama", "microdramas", "micro-drama", "short drama" and "vertical drama".
- When an article mentions a headline, it links to the original publisher. We do not summarise articles we have not read.

## When "no data" is a broken tool

These failures each looked like a real result. We record them so others do not repeat them.

| Tool | What went wrong | What to do instead |
|---|---|---|
| Meta Ad Library keyword search | Splits compound brand names. A search for "GoodShort" matched "good" and "short" and returned unrelated ads. Every compound app name in this category (ShortMax, NetShort, FreeReels…) is exposed. | Search the exact phrase, or resolve the advertiser's Page ID and filter on it. Note that the library covers EU/UK-served ads only and shows no spend. |
| cninfo announcement query | Returned 0 rows for valid listed tickers, which looked like missing data. | Use the exchange disclosure sites directly. |
| SEC EDGAR | Answers generic fetchers with 403. | Send a compliant User-Agent that names the requester. |
