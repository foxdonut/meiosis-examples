/*global m */
(function(ref) {
  ref.main = ref.main || {};

  ref.main.view = function(renderedTodos) {
    return m("section.main", [
      m("input.toggle-all[type=checkbox]"),
      m("label", {for: "toggle-all"}, "Mark all as complete"),
      m("ul.todo-list", renderedTodos)
    ]);
  };
})(window);
