{% extends '../index-common.swig' %}
{% block title %}Mithril{% endblock %}
{% block variant %}mithril{% endblock %}
{% block content %}
<script src="/public/lib/mithril.min.js"></script>
<script src="/public/lib/meiosis-mithril.min.js"></script>
<script src="/examples/todomvc/mithril/header/view.js"></script>
<script src="/examples/todomvc/mithril/todoInput/view.js"></script>
<script src="/examples/todomvc/mithril/todoItem/view.js"></script>
<script src="/examples/todomvc/mithril/main/view.js"></script>
<script src="/examples/todomvc/mithril/footer/view.js"></script>
<script src="/examples/todomvc/mithril/todoapp/view.js"></script>
<script src="/examples/todomvc/mithril/root/view.js"></script>
{% endblock %}
