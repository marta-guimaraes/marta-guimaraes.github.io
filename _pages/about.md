<!-- ---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
--- -->
---
permalink: /
title: "Home"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
## About Me

I work as an AI Researcher at [Neuraspace](https://www.neuraspace.com/), developing Machine Learning solutions for satellite collision avoidance and space debris mitigation. I am a PhD student in Computer Science at [NOVA School of Science and Technology](https://www.fct.unl.pt/en).
I received my BSc and MSc degrees in Aerospace Engineering from [Instituto Superior Técnico](https://tecnico.ulisboa.pt/en/).
I have a general interest in Machine Learning and Deep Learning, but I have been working mostly in Time Series Forecasting. What truly inspires me is the opportunity to apply this knowledge in the world of space science and exploration!

## News and Events

{% assign news_posts = site.news | sort: 'name' | reverse %}
{% for post in news_posts limit: 2 %}
### {{ post.title }}

{{ post.content | markdownify }}
{% endfor %}