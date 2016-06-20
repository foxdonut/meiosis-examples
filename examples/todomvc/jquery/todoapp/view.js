/*global $, Handlebars */
(function(ref) {
  ref.todoapp = ref.todoapp || {};

  var todoappTemplate = Handlebars.compile($("#todoapp").html());

  ref.todoapp.view = function(header, main, footer) {
    return todoappTemplate({
      header: header,
      main: main,
      footer: footer
    });
  };
})(window);
