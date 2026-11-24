---
layout: project
title: "Telegram Opportunity Scout"
year: "2026"
category_label: "Software Engineering & AI"
github: https://github.com/Kimame04/telegram-opportunity-scout
tags: ["Python", "Telethon", "MTProto", "Gemini API", "LLM", "Automation"]
---

*Telegram Opportunity Scout* is a personal automation utility that monitors Telegram career broadcast channels, semantically scores postings against a candidate profile using Google Gemini, and delivers a daily morning digest directly to Telegram.

## Core Features

- **MTProto Channel Ingestion:** Reads public and invite-only broadcast announcements via Telethon without requiring channel admin rights.
- **LLM Semantic Evaluation:** Uses structured prompts (`gemini-3.5-flash-lite`) to score candidate fit against academic year, citizenship criteria, and domain interests.
- **Direct Telegram Dispatch:** Delivers scored opportunities as formatted HTML cards with application links, deadlines, and fit rationale.
- **Automated Scheduling:** Runs autonomously every morning via a macOS LaunchAgent (`launchd`).

## Architecture

- **`src/ingestion/`:** MTProto client session management, entity resolution, and message pagination.
- **`src/evaluation/`:** Structured LLM evaluation with JSON schema enforcement and score thresholding.
- **`src/dispatch/`:** HTML card compilation, message chunking, and direct delivery.

