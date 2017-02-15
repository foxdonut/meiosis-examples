{% extends '../index-common.swig' %}
{% block variant %}React{% endblock %}
{% block subcontent %}
  <script src="/public/lib/react.js"></script>
  <script src="/public/lib/react-dom.js"></script>
  <script src="/public/lib/browser.min.js"></script>

  <script src="/examples/counter/react/view.jsx" type="text/babel"></script>
  <script src="/examples/counter/react/main.jsx" type="text/babel"></script>

  <a href="/examples/counter/jquery/index.html">jQuery version</a>
{% endblock %}
