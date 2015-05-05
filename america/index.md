---
layout: page_a
title: "america"
category: america
description: ""
cat: america
---
{% include JB/setup %}

{% for tag in site.tags %} 
	{% if tag[0] == 'america'%}

  <ul >
    {% assign pages_list = tag[1] %} 
    {% include JB/pages1_list %}
   
  </ul>
  {% endif %}
{% endfor %}
