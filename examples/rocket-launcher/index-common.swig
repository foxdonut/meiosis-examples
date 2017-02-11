{% extends '../layout.swig' %}

{% block title %}Rocket Launcher - {% block variant %}{% endblock %}{% endblock %}
{% block example %}rocket-launcher{% endblock %}

{% block content %}
  <script src="/public/lib/meiosis.min.js"></script>
  <script src="/public/lib/meiosis-tracer.min.js"></script> <!-- development only -->
  <script src="/examples/rocket-launcher/js/actions.js"></script>
  <script src="/examples/rocket-launcher/js/model.js"></script>
  <script src="/examples/rocket-launcher/js/state.js"></script>
  <script src="/examples/rocket-launcher/js/display.js"></script>
  <script src="/examples/rocket-launcher/js/nextAction.js"></script>
{% block subcontent %}{% endblock %}
<hr/>
<div>Rocket launcher example idea credit: <a href="http://www.ebpml.org/about">Jean-Jacques Dubray</a></div>
{% endblock %}
