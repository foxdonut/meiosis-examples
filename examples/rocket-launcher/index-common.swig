{% extends '../layout.swig' %}

{% block title %}Rocket Launcher - {% block variant %}{% endblock %}{% endblock %}

{% block content %}
  <script src="/public/lib/meiosis.min.js"></script>
  <script src="/public/lib/meiosis-tracer.min.js"></script> <!-- development only -->
  <script src="/examples/rocket-launcher/js/actions.js"></script>
  <script src="/examples/rocket-launcher/js/model.js"></script>
  <script src="/examples/rocket-launcher/js/state.js"></script>
  <script src="/examples/rocket-launcher/js/display.js"></script>
  <script src="/examples/rocket-launcher/js/receive.js"></script>
  <script src="/examples/rocket-launcher/js/nextAction.js"></script>
{% block subcontent %}{% endblock %}
{% endblock %}
