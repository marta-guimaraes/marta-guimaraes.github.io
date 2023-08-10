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

# Recent News and Events

<div class="gallery">
{% assign news_posts = site.posts | sort: 'name' | reverse %}
{% for post in news_posts limit: 2 %}
  <div class="{{ gallery_layout }}">
    <h3>{{ post.title }}</h3>
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.full_post_url }}">Read More</a>
  </div>
{% endfor %}
</div>