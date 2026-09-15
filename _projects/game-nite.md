---
layout: project
title: Game Nite
year: "2022"
category_label: "Web & Mobile"
github: https://github.com/Kimame04/game-nite
tags: ["Android", "Java", "Firebase", "Mobile"]
---

*Game Nite* is an Android application designed to facilitate social interaction and community building through local tabletop and casual gaming meetups.

## Demo Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/HXZs7OaLoEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Technical Highlights

- **Platform:** Native Android development in Java.
- **Backend &amp; Persistence:** Firebase Realtime Database for event listings, participant sign-ups, and notifications.
- **Asynchronous Data Handling:** Resolved null data race conditions during Firebase calls by introducing asynchronous background workers (`AsyncTask`).

## Development Reflections

- **Modular Design:** Early challenges with testing highlighted the danger of writing too much code before validating core features. Refactoring into discrete, modular components drastically cut debugging overhead.
- **Library Reuse:** Learning when to rely on existing Android SDK components and established libraries instead of re-implementing standard utilities from scratch.
- **Milestone Planning:** Setting a disciplined schedule and adhering to strict deadlines enabled completing core functionality ahead of schedule, leaving time for interface refinement.
