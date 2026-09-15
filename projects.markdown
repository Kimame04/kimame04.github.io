---
layout: default
title: Coding Projects
permalink: /projects/
---

<div class="section-header" style="margin-bottom: 1.25rem;">
  <div>
    <h1 class="section-title" style="font-size: 1.85rem; margin-bottom: 0.35rem;">Coding Projects</h1>
    <p style="color: var(--text-muted); font-size: 1rem;">
      Software tools, data pipelines, systems, and engineering experiments.
    </p>
  </div>
</div>

<div class="filter-bar">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="recent">Recent (2024–2026)</button>
  <button class="filter-btn" data-filter="data-analytics">Data &amp; Analytics</button>
  <button class="filter-btn" data-filter="software-eng">Software Engineering</button>
  <button class="filter-btn" data-filter="systems-aviation">Aviation &amp; Systems</button>
  <button class="filter-btn" data-filter="web-mobile">Web &amp; Mobile</button>
</div>

<div class="projects-grid">
  {% for project in site.data.projects %}
    {% include project-card.html project=project %}
  {% endfor %}
</div>
