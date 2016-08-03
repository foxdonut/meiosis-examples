{% extends '../layout.swig' %}

{% block title %}RequireJS{% endblock %}
{% block example %}requirejs{% endblock %}

{% block content %}
  <script data-main="/examples/requirejs/js/main" src="/public/lib/require.js"></script>
{% endblock %}
