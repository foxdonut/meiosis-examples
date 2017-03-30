{% extends '../base-layout.swig' %}

{% block head %}    <link rel="stylesheet" href="/public/css/normalize.css">
    <link rel="stylesheet" href="/public/css/skeleton.css">
    <link rel="stylesheet" href="/public/css/style.css">
{% endblock %}

{% block title %}Counter - {% block variant %}{% endblock %}{% endblock %}
{% block example %}counter{% endblock %}

{% block content %}
  <script src="/public/lib/flyd.js"></script>
{% block subcontent %}{% endblock %}
{% endblock %}
