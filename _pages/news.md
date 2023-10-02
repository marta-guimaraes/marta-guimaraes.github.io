---
layout: archive
title: "News and Events"
permalink: /news/
author_profile: true
---

{% assign site_news = site.news | sort: 'date' | reverse %}
{% for post in site_news %}
  {% include archive-single.html %}
{% endfor %}
