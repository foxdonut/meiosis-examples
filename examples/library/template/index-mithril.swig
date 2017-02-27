{% extends '../../layout.swig' %}

{% block title %}Library{% endblock %}
{% block example %}library{% endblock %}

{% block top %}
  Mithril + Bootstrap version |
  <a href="/examples/library/index-react.html">React + Material UI version</a>
{% endblock %}

{% block content %}
  <script src="/examples/library/build/generated-mithril-app.js"></script>
{% endblock %}
