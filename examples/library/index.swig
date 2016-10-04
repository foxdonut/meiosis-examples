{% extends '../layout.swig' %}

{% block title %}Library{% endblock %}
{% block example %}library{% endblock %}

{% block content %}
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
  <style>body { font-family: "Roboto", sans-serif; }</style>
  <script src="https://unpkg.com/react@15.3.2/dist/react.js"></script>
  <script src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.js"></script>
  <script src="/examples/library/generated-app.js"></script>
{% endblock %}
