---
layout: project
title: Telegram Journal Analytics
year: "2026"
category_label: "Data & Analytics"
github: https://github.com/Kimame04/telegram-journal-analytics
demo: https://kimame04.github.io/telegram-journal-analytics/
tags: ["Python", "Pandas", "Plotly", "Parquet"]
---

A personal analytics dashboard and companion bot for Telegram journal channels. It parses multi-year chat exports into Parquet for fast querying, visualizes writing habits and tagged topics over time, and relays new reflections to Discord.

Explore the live interactive demo: **[Interactive Dashboard & Demos](https://kimame04.github.io/telegram-journal-analytics/)**

## Problem & Motivation

Exporting a personal Telegram journal channel produces paginated HTML files (`messages.html`, `messages2.html`, etc.) that are awkward to search and slow to process repeatedly. Re-exporting the entire chat every time a new reflection is written is also impractical.

This tool solves both issues:
1. It parses past chat exports once and caches them in Parquet for fast reloads (~0.2s).
2. A lightweight companion bot listens for new posts in the channel and syncs them automatically, without manual exports.
3. New entries are mirrored to Discord in real time, with card colors reflecting the time of day they were written.

## How It Works

The system is split into modular components:

- **Parser & Parquet Cache (`src/parser.py`)**: Reads Telegram desktop HTML exports and stores messages in Apache Parquet (`.cache/parsed_messages.parquet`), cutting reload times from ~3s to ~0.2s. It automatically re-indexes if source export files change.
- **Companion Bot & Live Sync (`src/bot/`)**: A pure-Python Telegram Bot API client that responds to commands (`/otd`, `/stats`, `/random`) and appends live channel posts into a delta Parquet file.
- **Discord Relay (`src/bot/discord_relay.py`)**: Forwards channel posts to Discord using webhooks, formatting cards with colors based on reflection time (morning, afternoon, evening, night).
- **Topic Lifecycles (`src/lifecycle.py`)**: Finds bracketed tags (like `[reading]` or `[f1]`) and plots their volume over months and years using Plotly streamgraphs.
- **Circadian Habits (`src/circadian.py`)**: Analyzes message timestamps to show 24-hour writing distributions and weekly heatmaps.
- **Flashbacks & Annual Summaries (`src/otd.py`, `src/wrapped/`)**: Generates "On This Day" review cards across previous years and annual summary decks.

## Stack

- **Core:** Python 3.11, Pandas, Apache Parquet (PyArrow)
- **Visualization:** Plotly, Jinja2
- **Testing:** Python `unittest` suite (mocked HTTP transport for bot and webhook tests)
