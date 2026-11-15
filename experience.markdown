---
layout: default
title: Engineering Experience
permalink: /experience/
---

<div class="section-header" style="margin-bottom: 1.25rem;">
  <div>
    <h1 class="section-title" style="font-size: 1.85rem; margin-bottom: 0.35rem;">Engineering Experience</h1>
    <p style="color: var(--text-muted); font-size: 1rem;">
      Autonomous systems development, perception pipelines, and software engineering roles.
    </p>
  </div>
</div>

<div class="experience-list">
  {% for exp in site.data.experience %}
    <article class="experience-card">
      <div class="experience-header">
        <div>
          <h2 class="experience-role">{{ exp.role }}</h2>
          <div class="experience-org">
            <a href="{{ exp.org_url }}" target="_blank" rel="noopener noreferrer">{{ exp.organization }} &nearr;</a>
          </div>
        </div>
        <div class="experience-meta">
          <span class="experience-period">{{ exp.period }}</span>
          {% if exp.location %}
            <span class="experience-location">{{ exp.location }}</span>
          {% endif %}
        </div>
      </div>

      <p class="experience-summary">{{ exp.summary }}</p>

      {% if exp.achievements %}
        <div class="experience-achievements">
          {% for ach in exp.achievements %}
            <div class="achievement-pill">
              <span>🏆</span>
              <span>{{ ach }}</span>
            </div>
          {% endfor %}
        </div>
      {% endif %}

      {% if exp.highlights %}
        <ul class="experience-highlights">
          {% for hl in exp.highlights %}
            <li>{{ hl }}</li>
          {% endfor %}
        </ul>
      {% endif %}

      {% if exp.skills %}
        <div class="experience-skills">
          {% for sk in exp.skills %}
            <span class="tag">{{ sk }}</span>
          {% endfor %}
        </div>
      {% endif %}
    </article>
  {% endfor %}
</div>
