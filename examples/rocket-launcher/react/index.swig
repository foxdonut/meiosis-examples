{% extends '../index-common.swig' %}
{% block variant %}React{% endblock %}
{% block subcontent %}
  <script src="/public/lib/react-15.1.0.js"></script>
  <script src="/public/lib/react-dom-15.1.0.js"></script>
  <script src="/public/lib/browser.min.js"></script>
  <script src="/public/lib/meiosis-react.min.js"></script>
  <script src="/examples/rocket-launcher/react/view.jsx" type="text/babel"></script>
  <script src="/examples/rocket-launcher/react/main.jsx" type="text/babel"></script>
{% endblock %}
