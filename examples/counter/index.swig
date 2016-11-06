{% extends '../layout.swig' %}

{% block title %}Counter{% endblock %}
{% block example %}counter{% endblock %}

{% block content %}
  <script src="/public/lib/meiosis.min.js"></script>
  <script src="/public/lib/meiosis-vanillajs.min.js"></script>
  <script src="/public/lib/jquery-2.2.3.min.js"></script>

  <script src="/examples/counter/main-jquery.js"></script>

  <div id="reactApp"></div>

  <script src="/public/lib/react.js"></script>
  <script src="/public/lib/react-dom.js"></script>
  <script src="/public/lib/browser.min.js"></script>
  <script src="/public/lib/meiosis-react.min.js"></script>

  <script src="/examples/counter/view-react.jsx" type="text/babel"></script>
  <script src="/examples/counter/main-react.jsx" type="text/babel"></script>
{% endblock %}
