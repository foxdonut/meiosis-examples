/*global $, Handlebars */
(function(ref) {
  ref.main = ref.main || {};

  var mainTemplate = Handlebars.compile($("#main").html());

  ref.main.view = function(renderedTodos) {
    return mainTemplate({renderedTodos: renderedTodos.join("")});
  };
})(window);
