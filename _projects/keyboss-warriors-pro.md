---
layout: project
title: KeyBossWarriorsPro
year: "2026"
category_label: "Software Engineering"
github: https://github.com/AY2627S1-CS2103T-F11-1/tp
tags: ["Java", "JavaFX", "Gradle", "JUnit 5"]
---

A desktop contact management application designed for artisan mechanical keyboard shop managers to track suppliers, employees, and service providers. Developed as a team project for NUS CS2103T (Software Engineering).

## Overview

The application caters to keyboard shop operations where users need fast, keyboard-driven navigation (CLI) alongside immediate visual status tracking (JavaFX GUI).

## Key Features &amp; Contributions

- **Business Role Classification:** Added contact categorization (`Employee`, `Supplier`, `Service Provider`) rendered as dynamic, color-coded badges on contact cards with custom styling.
- **Multi-Field Identity &amp; Duplicate Detection:** Overhauled uniqueness checking beyond basic name-matching to enforce phone number and email address uniqueness, providing granular collision reporting across fields.
- **Defensive Design &amp; Input Validation:** Built prefix validation to reject invalid CLI parameters, added null checks for JSON tag deserialization, and prevented redundant state commits during undo/redo operations.
- **UI Theming:** Harmonized the dark mode theme, typography, and contrast across all windows.
- **Project Infrastructure:** Managed repository milestones, issue tracking, and automated CI pipelines for headless test execution.

## Stack &amp; Tools

- **Language:** Java 17
- **UI Framework:** JavaFX
- **Build &amp; CI:** Gradle, GitHub Actions
- **Testing:** JUnit 5
