{% extends '../base-layout.swig' %}

{% block head %}    <link rel="stylesheet" href="/public/css/pure-min.css">
    <link rel="stylesheet" href="/public/css/style.css">
{% endblock %}

{% block title %}Rocket Launcher - {% block variant %}{% endblock %}{% endblock %}
{% block example %}rocket-launcher{% endblock %}

{% block content %}
  <script src="/public/lib/flyd.js"></script>
  <script src="/examples/rocket-launcher/common/actions.js"></script>
  <script src="/examples/rocket-launcher/common/model.js"></script>
  <script src="/examples/rocket-launcher/common/state.js"></script>
  <script src="/examples/rocket-launcher/common/display.js"></script>
  <script src="/examples/rocket-launcher/common/nextAction.js"></script>
{% block subcontent %}{% endblock %}
<hr/>
<div>Rocket launcher example idea credit: <a href="http://www.ebpml.org/about">Jean-Jacques Dubray</a></div>
{% endblock %}
