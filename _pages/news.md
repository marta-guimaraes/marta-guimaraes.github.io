---
layout: archive
title: "News and Events"
permalink: /news/
author_profile: true
---

{% assign news_posts = site.news | sort: 'date' | reverse %}
{% assign num_columns = 2 %}
{% assign posts_per_column = news_posts.size | divided_by: num_columns | ceil %}
{% assign gallery_layout = 'news-gallery' %}

<!-- Link the new CSS file -->
<link rel="stylesheet" href="{{ '/assets/news-gallery.css' | prepend: base_path }}">

<div class="{{ gallery_layout }}">
  {% for post in talk_posts %}
    <div class="news-item">
      <h3><a href="{{ post.full_post_url }}">{{ post.title }}</a></h3>
      <img src="{{ post.image_path | prepend: "/images/" | prepend: base_path }}" alt="{{ post.title }}" class="news-image">
      <br>
      <p><strong>Venue:</strong> {{ post.venue }}</p> <!-- Add venue -->
      <p><strong>Location:</strong> {{ post.location }}</p> <!-- Add location -->
      <a href="{{ post.full_post_url }}">Read More</a>
    </div>

    {% if forloop.index0 == posts_per_column | minus: 1 %}
      {% capture column_break %}{% cycle '', '<div class="column-break"></div>' %}{% endcapture %}
      {{ column_break }}
    {% endif %}
  {% endfor %}
</div>