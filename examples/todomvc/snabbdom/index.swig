{% extends '../index-common.swig' %}
{% block title %}Snabbdom{% endblock %}
{% block content %}
<script src="/public/lib/meiosis-snabbdom.min.js"></script>
<script src="/examples/todomvc/snabbdom/header/view.js"></script>
<script src="/examples/todomvc/snabbdom/todoItem/view.js"></script>
<script src="/examples/todomvc/snabbdom/main/view.js"></script>
<script src="/examples/todomvc/snabbdom/footer/view.js"></script>
<script src="/examples/todomvc/snabbdom/todoapp/view.js"></script>
<script src="/examples/todomvc/snabbdom/root/view.js"></script>
<script src="/examples/todomvc/snabbdom/app.js"></script>
{% endblock %}
