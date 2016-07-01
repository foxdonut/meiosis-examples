{% extends '../index-common.swig' %}

{% block title %}VanillaJS{% endblock %}
{% block variant %}vanillajs{% endblock %}
{% block ext %}js{% endblock %}

{% block content %}

<script src="/public/lib/meiosis-vanillajs.min.js"></script>
<script src="/examples/todomvc/common/todoEdit/postRender.js"></script>
<script src="/examples/todomvc/vanillajs/header/ready.js"></script>
<script src="/examples/todomvc/vanillajs/todoItem/ready.js"></script>
<script src="/examples/todomvc/vanillajs/todoEdit/ready.js"></script>
<script src="/examples/todomvc/vanillajs/main/ready.js"></script>
<script src="/examples/todomvc/vanillajs/footer/ready.js"></script>

{% endblock %}
