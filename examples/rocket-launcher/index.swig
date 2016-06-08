{% extends '../layout.swig' %}

{% block title %}Rocket Launcher{% endblock %}

{% block content %}
  <script src="/public/lib/meiosis.min.js"></script>
  <script src="/public/lib/meiosis-vanillajs.min.js"></script>
  <script src="/public/lib/meiosis-tracer.min.js"></script> <!-- development only -->
  <script src="/examples/rocket-launcher/js/actions.js"></script>
  <script src="/examples/rocket-launcher/js/model.js"></script>
  <script src="/examples/rocket-launcher/js/view.js"></script>
  <script src="/examples/rocket-launcher/js/state.js"></script>
  <script src="/examples/rocket-launcher/js/display.js"></script>
  <script src="/examples/rocket-launcher/js/receiveUpdate.js"></script>
  <script src="/examples/rocket-launcher/js/nextUpdate.js"></script>
  <script src="/examples/rocket-launcher/js/ready.js"></script>
  <script src="/examples/rocket-launcher/js/main.js"></script>
{% endblock %}
