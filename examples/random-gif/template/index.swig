{% extends '../../base-layout.swig' %}

{% block head %}    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/public/css/tachyons.min.css">
{% endblock %}

{% block startwrap %}
<div class="mw8 pt2 center">
{% endblock %}

{% block endwrap %}
</div>
{% endblock %}

{% block title %}Random Gif{% endblock %}
{% block example %}random-gif{% endblock %}

{% block content %}
  <script src="/examples/random-gif/build/generated-app.js"></script>
{% endblock %}
