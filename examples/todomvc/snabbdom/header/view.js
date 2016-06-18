/*global meiosisSnabbdom */
(function(ref) {
  ref.header = ref.header || {};

  var h = meiosisSnabbdom.renderer.h;
  
  ref.header.view = function(model, actions) {
    return h("header.header", [
      h("h1", "todos"),
      h("input.new-todo", {props: {placeholder: "What needs to be done?", autoFocus: true,
        value: model.newTodo}, on: {keyup: actions.events.onNewTodoKeyUp}})
    ]);
  };
})(window);
