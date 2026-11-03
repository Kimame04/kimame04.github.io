---
layout: project
title: Task & Project Assistant (ip)
year: "2026"
category_label: "Software Engineering"
github: https://github.com/Kimame04/ip
tags: ["Java", "JavaFX", "Gradle", "JUnit 5"]
---

A desktop task management application developed as part of NUS CS2103 (Software Engineering). It combines a text-driven command interpreter with an interactive JavaFX GUI, designed to practice clean object-oriented architecture and defensive software engineering principles.

## Implementation Details

The application is structured into decoupled components:

- **Command Architecture:** Implements a command pattern where user input strings are parsed into distinct command objects (`AddCommand`, `DeleteCommand`, `FindCommand`, `MarkCommand`, etc.), which execute against an in-memory task model and return responses to the UI layer.
- **Data Persistence:** Dedicated storage module handling read/write operations with local flat files, including file corruption handling and serialization safeguards.
- **Defensive Design:** Systematic use of Java `assert` statements, rigorous input boundary checks, and custom domain-specific exception hierarchies.
- **Automated Verification:** Comprehensive JUnit 5 test suites covering parser behavior, model mutations, and storage integrity, automated via a GitHub Actions continuous integration pipeline.

## Stack &amp; Tools

- **Language:** Java 17
- **UI Framework:** JavaFX
- **Build Automation:** Gradle
- **Testing:** JUnit 5, CI with GitHub Actions
