/*global m */
(function(ref) {
  ref.main = ref.main || {};

  ref.main.view = function(todoItemComponent) {
    return function(model, actions) {
      return m("section.main", [
        m("input.toggle-all[type=checkbox]", {
          checked: model.allCompleted,
          onchange: actions.events.onToggleAllTodos
        }),
        m("label", {for: "toggle-all"}, "Mark all as complete"),
        m("ul.todo-list", model.filteredTodos.map(todoItemComponent(model)))
      ]);
    };
  };
})(window);
