{% extends '../layout.swig' %}

{% block title %}Counter{% endblock %}
{% block example %}counter{% endblock %}

{% block content %}
  <script src="/public/lib/meiosis.min.js"></script>
  <script src="/public/lib/meiosis-vanillajs.min.js"></script>
  <script src="/public/lib/jquery-2.2.3.min.js"></script>

  <script src="/examples/counter/main-jquery.js"></script>

  <div id="reactApp"></div>
  <div id="riotApp"></div>
  <div id="vueApp"></div>

  <script src="/public/lib/react-15.1.0.js"></script>
  <script src="/public/lib/react-dom-15.1.0.js"></script>
  <script src="/public/lib/browser.min.js"></script>
  <script src="/public/lib/meiosis-react.min.js"></script>

  <script src="/examples/counter/view-react.jsx" type="text/babel"></script>
  <script src="/examples/counter/main-react.jsx" type="text/babel"></script>

  <script src="/public/lib/riot.min.js"></script>
  <script src="/public/lib/meiosis-riot.min.js"></script>
  <script src="/examples/counter/view-riot.js"></script>
  <script src="/examples/counter/main-riot.js"></script>

  <script src="/public/lib/vue.js"></script>
  <script src="/public/lib/meiosis-vue.min.js"></script>
  <script src="/examples/counter/view-vue.js"></script>
  <script src="/examples/counter/main-vue.js"></script>
{% endblock %}
