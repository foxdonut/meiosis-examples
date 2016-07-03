<!DOCTYPE html>
<html>
  <head>
    <link rel="shortcut icon" size="16x16, 32x32, 48x48, 64x64, 128x128, 256x256" href="/favicon.ico">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="stylesheet" href="/examples/todomvc/css/index.css">

    <title>Meiosis Example - {% block title %}Title{% endblock %}</title>
  </head>
  <body class="container">
    <div>
      <img src="/public/images/meiosis.png" style="margin-right: 8px" width="53px">
      <h2 style="display: inline">Meiosis TodoMVC - {% block title %}Title{% endblock %}</h2>
      <span style="margin-left: 16px;"><a href="/index.html">Back to list of examples</a></span>

      <div id="app"></div>
      <div id="tracer" style="position: fixed; top: 0px; right: 0px;"></div>
    </div>
  </body>

  <script src="/public/lib/meiosis.min.js"></script>
  <script src="/public/lib/meiosis-tracer.min.js"></script> <!-- development only -->
  <script src="/public/lib/history.min.js"></script>
  <script src="/public/lib/classnames.min.js"></script>
  <script src="/public/lib/union-type.js"></script>

  <script src="/examples/todomvc/common/store.js"></script>

  {% block content %}Content{% endblock %}

  <script {% block type %}{% endblock %}src="/examples/todomvc/{% block variant %}{% endblock %}/header/view.{% block ext %}{% endblock %}"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/{% block variant %}{% endblock %}/todoEdit/view.{% block ext %}{% endblock %}"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/{% block variant %}{% endblock %}/todoItem/view.{% block ext %}{% endblock %}"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/{% block variant %}{% endblock %}/main/view.{% block ext %}{% endblock %}"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/{% block variant %}{% endblock %}/footer/view.{% block ext %}{% endblock %}"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/{% block variant %}{% endblock %}/todoapp/view.{% block ext %}{% endblock %}"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/{% block variant %}{% endblock %}/root/view.{% block ext %}{% endblock %}"></script>

  <script {% block type %}{% endblock %}src="/examples/todomvc/common/header/actionTypes.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/header/actions.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/header/receive.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/header/nextAction.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/header/component.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/footer/actionTypes.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/footer/actions.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/footer/receive.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/footer/ready.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/footer/component.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/todoItem/state.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/todoEdit/actionTypes.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/todoEdit/actions.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/todoEdit/display.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/todoEdit/receive.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/todoEdit/component.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/todoItem/actionTypes.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/todoItem/actions.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/todoItem/display.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/todoItem/receive.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/todoItem/component.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/main/actionTypes.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/main/actions.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/main/state.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/main/display.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/main/receive.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/main/component.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/todoapp/component.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/root/model.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/root/component.js"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/common/app.js"></script>

  <script {% block type %}{% endblock %}src="/examples/todomvc/{% block variant %}{% endblock %}/runapp.{% block ext %}{% endblock %}"></script>
  <script {% block type %}{% endblock %}src="/examples/todomvc/{% block variant %}{% endblock %}/app.{% block ext %}{% endblock %}"></script>
</html>
