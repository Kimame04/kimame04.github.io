---
layout: default
title: Articles & Research
permalink: /articles/
---

<div class="section-header" style="margin-bottom: 2rem;">
  <div>
    <h1 class="section-title" style="font-size: 1.85rem; margin-bottom: 0.35rem;">Articles &amp; Research</h1>
    <p style="color: var(--text-muted); font-size: 1rem;">
      Peer-reviewed publications, technical notes, and essays on aerodynamics, artificial intelligence, and policy.
    </p>
  </div>
</div>

<section class="section" style="margin-bottom: 3rem;">
  <div class="section-header">
    <h2 class="section-title" style="font-size: 1.25rem;">Peer-Reviewed Publications</h2>
  </div>

  {% for pub in site.data.publications %}
    <div class="publication-card">
      <div class="publication-venue">{{ pub.venue }} &bull; {{ pub.publisher }} ({{ pub.year }})</div>
      <h2 class="publication-title" style="font-size: 1.25rem;"><a href="{{ pub.url }}" target="_blank" rel="noopener noreferrer">{{ pub.title }}</a></h2>
      <div class="publication-authors">{{ pub.authors }}</div>
      <p class="publication-summary">{{ pub.summary }}</p>
      <div class="publication-links">
        <a href="{{ pub.url }}" target="_blank" rel="noopener noreferrer">SpringerLink &nearr;</a>
        <span class="badge">DOI: {{ pub.doi }}</span>
        <span class="badge">{{ pub.topic }}</span>
      </div>
    </div>
  {% endfor %}
</section>

<section class="section">
  <div class="section-header">
    <h2 class="section-title" style="font-size: 1.25rem;">Essays &amp; Notes</h2>
  </div>

  <div class="articles-list">
    {% for post in site.posts %}
      <article class="article-item">
        <div class="article-header">
          <h3 class="article-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <time class="article-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
        </div>
        {% if post.description %}
          <p class="article-excerpt">{{ post.description }}</p>
        {% elsif post.excerpt %}
          <p class="article-excerpt">{{ post.excerpt | strip_html | truncatewords: 32 }}</p>
        {% endif %}
        <div class="article-tags">
          {% if post.topic %}
            <span class="tag">{{ post.topic }}</span>
          {% endif %}
          {% assign words = post.content | number_of_words %}
          {% assign readtime = words | divided_by: 180 | plus: 1 %}
          <span class="tag">{{ readtime }} min read</span>
        </div>
      </article>
    {% endfor %}
  </div>
</section>
