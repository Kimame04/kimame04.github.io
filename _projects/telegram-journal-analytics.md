---
layout: project
title: Telegram Journal Analytics
year: "2026"
category_label: "Data & Analytics"
github: https://github.com/Kimame04/telegram-journal-analytics
tags: ["Python", "Parquet", "Plotly", "Pandas", "Analytics"]
---

An analytics engine and longitudinal flashback tool built for personal Telegram journal channels. It transforms multi-file HTML chat exports into structured behavioral insights, interest lifecycles, and multi-year "On This Day" review cards.

## Motivation &amp; Problem Statement

Exporting a personal Telegram journal channel produces paginated HTML files (`messages.html`, `messages2.html`, etc.) that are awkward to search and lack longitudinal perspective. The objective was to build a private, local-first engine that could process years of entries, extract metadata (timestamps, text, word counts, media flags, and bracket tags), and generate meaningful retrospectives without external API dependencies.

## Technical Architecture

The project is structured into four decoupled modules:

1. **Parser &amp; Cache Engine (`src/parser.py`)**:
   - Parses paginated HTML files sequentially using regex and HTML tokenization.
   - Decoupled from channel folder naming conventions.
   - Serializes parsed messages to Apache Parquet (`.cache/parsed_messages.parquet`) for high-throughput reads, cutting repeat startup time from ~3.0s to ~0.2s.
   - Automatically invalidates the cache when underlying HTML files change or new exports are added.

2. **Flashback Engine (`src/otd.py`)**:
   - Queries entries sharing the same calendar month and day across multiple years.
   - Computes active time spans and prominent tags.
   - Outputs both a compact CLI feed and self-contained, responsive HTML memory cards for review.

3. **Tag &amp; Hobby Lifecycles (`src/lifecycle.py`)**:
   - Extracts bracket notation tags (e.g. `[f1]`, `[coding]`) to track topics over time.
   - Generates interactive Plotly streamgraphs tracking relative volume over months and years.
   - Classifies tags into behavioral patterns: *Evergreen Passions*, *Seasonal Bursts*, and *Emerging Eras*.

4. **Circadian &amp; Habit Profiling (`src/circadian.py`)**:
   - Calculates 24-hour message distributions and day-of-week heatmaps.
   - Visualizes longitudinal shifts in journaling hours to observe changes in daily routines across years.

## Stack &amp; Tools

- **Language:** Python 3
- **Storage &amp; Data:** Apache Parquet via PyArrow, Pandas
- **Visualization:** Plotly (interactive HTML streamgraphs and heatmaps), Matplotlib
- **Testing:** Pytest
