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
      <img src="/public/images/meiosis.png" style="margin-right: 8px" width="53px">
      <h2 style="display: inline">Meiosis TodoMVC - {% block title %}{% endblock %}</h2>
      <span style="margin-left: 16px;"><a href="/index.html">Back to list of examples</a></span>

      <div id="app"></div>
      <div id="tracer" style="position: fixed; top: 0px; right: 0px;"></div>
    </div>
  </body>

  <script src="/examples/todomvc/{% block variant %}{% endblock %}/generated-app.js"></script>
</html>
