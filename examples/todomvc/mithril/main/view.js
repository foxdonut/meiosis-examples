/*global m */
(function(ref) {
  ref.main = ref.main || {};

  ref.main.view = function(data, actions) {
    return m("section.main", [
      m("input.toggle-all[type=checkbox]", {
        checked: data.allCompleted,
        onchange: actions.events.onToggleAllTodos
      }),
      m("label", {for: "toggle-all"}, "Mark all as complete"),
      m("ul.todo-list", data.renderedTodos)
    ]);
  };
})(window);
