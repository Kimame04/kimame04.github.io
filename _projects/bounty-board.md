---
layout: project
title: "BountyBoard: Learning Full-Stack Web Dev with Go & React"
year: "2026"
category_label: "Software Engineering"
github: https://github.com/Kimame04/bounty-board
tags: ["Go", "React", "TypeScript", "SQLite", "Material UI"]
---

A fantasy-themed community Q&A forum built from scratch to teach myself the core fundamentals of modern full-stack web development: Go backends, relational databases, REST APIs, and React with TypeScript.

Discussions are structured like adventurer guild quests: users post bounties (questions) and submit dispatches (solutions). When a quest is solved, the party shares the XP rewards!

## Learning Goals & Focus

Rather than building a standard, dry forum clone, I wanted a fun domain to practice foundational web concepts:
1. **Idiomatic Go Backend:** Building clean HTTP servers using Go's standard library conventions with `chi` for routing and middleware.
2. **Relational Database Principles:** Designing tables, foreign key cascades, and ACID transactions in SQLite to prevent race conditions during reward payouts.
3. **Frontend Foundations:** Structuring state and UI with React 18, TypeScript, and Material UI without relying on heavy external dependencies.
4. **Algorithmic Sprites:** Creating an in-browser procedural 8-bit SVG avatar generator driven by a hash of the username, evolving gear as user level increases.
5. **Single-Binary Packaging:** Learning Go's `embed.FS` to bundle the compiled React assets directly into the Go executable, producing an 11 MB standalone binary that runs anywhere without Node.js.

## Key Mechanics

* **Stack Exchange Party XP:** When the quest author crowns an accepted solution, an atomic database transaction awards +50 XP to the solver, +15 XP to participating commenters, and +10 XP to the author.
* **When2meet-Style Auth:** Lightweight username-only authentication with automatic registration for friction-free local experimentation.
* **Embedded SPA Fallback:** Custom Go HTTP handler serving embedded static assets with automatic fallback to `index.html` for client-side routing.
