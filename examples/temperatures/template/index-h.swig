{% extends '../../base-layout.swig' %}

{% block head %}    <link rel="stylesheet" href="/public/css/normalize.css">
    <link rel="stylesheet" href="/public/css/milligram.min.css">
    <link rel="stylesheet" href="/public/css/style.css">
{% endblock %}

{% block title %}Temperatures{% endblock %}
{% block example %}temperatures{% endblock %}

{% block content %}
  <script src="/examples/temperatures/build/generated-h-app.js"></script>
{% endblock %}
