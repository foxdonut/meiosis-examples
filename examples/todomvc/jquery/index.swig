{% extends '../index-common.swig' %}

{% block title %}jQuery{% endblock %}
{% block variant %}jquery{% endblock %}
{% block ext %}js{% endblock %}

{% block content %}

{% include "./todoapp/view.swig" %}
{% include "./header/view.swig" %}
{% include "./todoEdit/view.swig" %}
{% include "./todoItem/view.swig" %}
{% include "./main/view.swig" %}
{% include "./footer/view.swig" %}
{% include "./info/view.swig" %}

<script src="/public/lib/meiosis-vanillajs.min.js"></script>
<script src="/public/lib/jquery-2.2.3.min.js"></script>
<script src="/public/lib/handlebars.min-v4.0.5.js"></script>
<script src="/examples/todomvc/common/todoEdit/postRender.js"></script>
<script src="/examples/todomvc/jquery/header/ready.js"></script>
<script src="/examples/todomvc/jquery/todoItem/ready.js"></script>
<script src="/examples/todomvc/jquery/todoEdit/ready.js"></script>
<script src="/examples/todomvc/jquery/main/ready.js"></script>
<script src="/examples/todomvc/jquery/footer/ready.js"></script>

{% endblock %}
