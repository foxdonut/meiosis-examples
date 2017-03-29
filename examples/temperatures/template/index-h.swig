{% extends '../../base-layout.swig' %}

{% block head %}    <link rel="stylesheet" href="/public/css/ace.min.css">
<style type="text/css">
body {
  margin: 0 auto;
  max-width: 1080px;
  padding: 8px;
}
</style>
{% endblock %}

{% block title %}Temperatures{% endblock %}
{% block example %}temperatures{% endblock %}

{% block content %}
  <script src="/examples/temperatures/build/generated-h-app.js"></script>
{% endblock %}
