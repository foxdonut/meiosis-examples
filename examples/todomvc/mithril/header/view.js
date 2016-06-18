/*global m */
(function(ref) {
  ref.header = ref.header || {};

  ref.header.view = function(model, actions) {
    return m("header.header", [
      m("h1", "todos"),
      m("input.new-todo", {placeholder: "What needs to be done?", autoFocus: true,
        value: model.newTodo, onkeyup: actions.events.onNewTodoKeyUp})
    ]);
  };
})(window);
