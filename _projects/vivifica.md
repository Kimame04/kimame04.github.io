---
layout: project
title: Vivifica
year: "2022"
category_label: "Aviation & Systems"
github: https://github.com/Kimame04/vivifica
tags: ["Python", "Flask", "SQLite", "Jinja2", "Aviation"]
---

*Vivifica* (Latin for *revive*) is a web application built to centralize and track aircraft maintenance logs, part inspections, and airworthiness records.

## Demo Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/S-3ENW88PHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Technical Highlights &amp; Architecture

- **Backend:** Python web service using Flask and Jinja2 templating.
- **Relational Schema:** Normalized relational database modeling aircraft tail numbers, component lifespans, scheduled inspection intervals, and technician sign-offs.
- **Client Dynamics:** Vanilla JavaScript for DOM manipulation to add, update, and remove log items dynamically without redundant full-page reloads.

## Development Reflections

- **Schema Design:** Spending dedicated time upfront refining the Entity-Relationship (ER) model and schema parameters prevented substantial refactoring downstream during backend route development.
- **Templating:** Leveraging modular Jinja base layouts allowed clean separation between data delivery and presentation.
- **Database Centrality:** Serving as the structural backbone of the application, the database design directly dictated the scalability of inspection workflows.
