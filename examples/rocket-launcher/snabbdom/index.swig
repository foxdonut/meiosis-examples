{% extends '../index-common.swig' %}
{% block variant %}Snabbdom{% endblock %}
{% block subcontent %}
  <script src="/public/lib/meiosis-snabbdom.min.js"></script>
  <script src="/examples/rocket-launcher/snabbdom/view.js"></script>
  <script src="/examples/rocket-launcher/snabbdom/main.js"></script>
{% endblock %}
