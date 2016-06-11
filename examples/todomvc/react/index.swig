{% extends '../index-common.swig' %}
{% block title %}React{% endblock %}
{% block content %}
<script src="/public/lib/react-15.0.2.min.js"></script>
<script src="/public/lib/react-dom-15.0.2.min.js"></script>
<script src="/public/lib/browser.min.js"></script>
<script src="/public/lib/classnames.min.js"></script>
<script src="/public/lib/meiosis-react.min.js"></script>
<script src="/examples/todomvc/common/events.js"></script>
<script type="text/babel" src="/examples/todomvc/react/todoItem/view.jsx"></script>
<script type="text/babel" src="/examples/todomvc/react/view.jsx"></script>
<script type="text/babel" src="/examples/todomvc/react/main.jsx"></script>
{% endblock %}
