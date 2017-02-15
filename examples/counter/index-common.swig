{% extends '../layout.swig' %}

{% block title %}Counter - {% block variant %}{% endblock %}{% endblock %}
{% block example %}counter{% endblock %}

{% block content %}
  <script src="/public/lib/flyd.js"></script>
  <script src="/public/lib/meiosis.min.js"></script>
{% block subcontent %}{% endblock %}
{% endblock %}
