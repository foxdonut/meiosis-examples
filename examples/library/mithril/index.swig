{% extends '../../layout.swig' %}

{% block title %}Library{% endblock %}
{% block example %}library{% endblock %}

{% block top %}
  Mithril + Bootstrap version |
  <a href="/examples/library/react">React + Material UI version</a>
{% endblock %}

{% block content %}
  <script src="/examples/library/mithril/generated-app.js"></script>
{% endblock %}
