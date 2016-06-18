/*global window */
(function(ref) {
  ref.main = ref.main || {};

  ref.main.view = function(renderedTodos) {
    return "<section class='main'>" +
      "<input class='toggle-all' type='checkbox'>" +
      "<label for='toggle-all'>Mark all as complete</label>" +
      "<ul class='todo-list'>" +
      renderedTodos.join("") +
      "</ul>" +
      "</section>";
  };
})(window);
