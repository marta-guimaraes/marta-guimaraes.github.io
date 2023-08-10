---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
I work as an AI Researcher at [Neuraspace](https://www.neuraspace.com/), developing Machine Learning solutions for satellite collision avoidance and space debris mitigation. I am a PhD student in Computer Science at [NOVA School of Science and Technology](https://www.fct.unl.pt/en).
I received my BSc and MSc degrees in Aerospace Engineering from [Instituto Superior Técnico](https://tecnico.ulisboa.pt/en/).
I have a general interest in Machine Learning and Deep Learning, but I have been working mostly in Time Series Forecasting. What truly inspires me is the opportunity to apply this knowledge in the world of space science and exploration!

___

# Recent News and Events

{% assign news_posts = site.news | sort: 'name' | reverse %}
{% assign num_columns = 2 %}
{% assign posts_per_column = news_posts.size | divided_by: num_columns | ceil %}
{% assign gallery_layout = 'news-gallery' %}

<!-- Link the new CSS file -->
<link rel="stylesheet" href="{{ '/assets/news-gallery.css' | prepend: base_path }}">

<div class="{{ gallery_layout }}">
  {% for post in news_posts %}
    <div class="news-item">
      <h3><a href="{{ post.full_post_url }}">{{ post.title }}</a></h3>
      <img src="{{ post.image_path | prepend: "/images/" | prepend: base_path }}" alt="{{ post.title }}" class="news-image">
      <br>
      <p>{{ post.description }}</p>
      <a href="{{ post.full_post_url }}">Read More</a>
    </div>

    {% if forloop.index0 == posts_per_column | minus: 1 %}
      {% capture column_break %}{% cycle '', '<div class="column-break"></div>' %}{% endcapture %}
      {{ column_break }}
    {% endif %}
  {% endfor %}
</div>