---
layout: page
title: Methodology
permalink: /methodology/
---

Research on this site is led by [Nelson Moses Lassiter]({{ '/about/' | relative_url }}), founder and CEO of Shortee.

## What is published, and what is not

- **Shortee Research publishes its own analysis.** Comparisons, calculations and conclusions are its own, and the arithmetic behind every derived number is shown.
- **Sources are cited, never redistributed.** Every figure names its publisher and links to where it was read, with the date it was read. Only the short passage a figure comes from is quoted.
- **No raw datasets are published** that belong to others: research reports, data providers, news feeds, or data obtained through a third-party platform's API (such as Meta, TikTok or YouTube). Those stay with their owners.

## Social media figures

When an article cites a follower count or similar figure from a social platform, it comes from one of two places, and the article says which:

- **The public profile, read by a person.** A person opens the account's public page, reads the number shown, and cites the handle and the date it was viewed. These figures are never collected with scripts, scrapers or the platform's API.
- **Someone else's publication**, such as a company announcement, a news report or a research report, cited like any other source.

A count shown on a profile is rounded by the platform (for example "1.2M"), so it is reported as shown and small differences are treated as noise.

## Market figures

- A figure is used only if it could be opened and read at its source. A number that is widely repeated but could not be read at its source is left out.
- **Sources are never stacked.** Sensor Tower reports app-store in-app purchase revenue. Omdia estimates total microdrama revenue, not only app-store purchases. These numbers are not comparable, so they are never added, subtracted or charted as one series.

## News

- Shortee Research follows microdrama coverage daily through a Google News search for "microdrama", "microdramas", "micro-drama", "short drama" and "vertical drama".
- When an article mentions a headline, it links to the original publisher. Articles that have not been read are never summarised.

## When "no data" is a broken tool

These failures each looked like a real result. They are recorded here so others do not repeat them.

| Tool | What went wrong | What to do instead |
|---|---|---|
| Meta Ad Library keyword search | Splits compound brand names. A search for "GoodShort" matched "good" and "short" and returned unrelated ads. Every compound app name in this category (ShortMax, NetShort, FreeReels…) is exposed. | Search the exact phrase, or resolve the advertiser's Page ID and filter on it. Note that the library covers EU/UK-served ads only and shows no spend. |
| cninfo announcement query | Returned 0 rows for valid listed tickers, which looked like missing data. | Use the exchange disclosure sites directly. |
| SEC EDGAR | Answers generic fetchers with 403. | Send a compliant User-Agent that names the requester. |
