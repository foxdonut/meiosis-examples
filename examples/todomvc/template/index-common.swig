<!DOCTYPE html>
<html>
  <head>
    <link rel="shortcut icon" size="16x16, 32x32, 48x48, 64x64, 128x128, 256x256" href="/favicon.ico">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="stylesheet" href="/examples/todomvc/css/index.css">

    <title>Meiosis Example - {% block title %}{% endblock %}</title>
  </head>
  <body class="container">
    <div>
      <a href="http://meiosis.js.org"><img src="/public/images/meiosis.png" style="margin-right: 8px" width="53px"></a>
      <h2 style="display: inline">Meiosis TodoMVC - {% block title %}{% endblock %}</h2>
      <div><a href="/index.html">Back to list of examples</a></div>
      <div><a href="https://github.com/foxdonut/meiosis-examples/tree/master/examples/todomvc" target="_blank">Source code</a></div>
      <hr>
      <div>
        <strong>{% block variant %}{% endblock %} version | </strong>
        <a href="index-{% block otherVariant %}{% endblock %}.html">{% block otherVariant %}{% endblock %} version</a>
      </div>

      <div id="app"></div>
      <div id="tracer" style="position: fixed; top: 0px; right: 0px;"></div>
    </div>

    <hr/><div>Todo MVC example idea credit: <a href="http://todomvc.com">todomvc.com</a></div>
  </body>

  <script src="/examples/todomvc/build/generated-{% block variant %}{% endblock %}-app.js"></script>

</html>
