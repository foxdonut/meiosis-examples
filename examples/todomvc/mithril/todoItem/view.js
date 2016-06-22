/*global m */
(function(ref) {
  ref.todoItem = ref.todoItem || {};

  ref.todoItem.view = function(todoInputComponent) {
    return function(model, actions) {
      var todo = model.todo;
      var events = actions.events;

      return m("li", {class: model.todoClasses}, [
        m("div.view", [
          m("input.toggle[type=checkbox]", {checked: todo.completed,
            onchange: events.onToggleTodo(todo.id)}),
          m("label", {ondblclick: events.onEditTodo(todo)}, todo.title),
          m("button.destroy", {onclick: events.onDestroyTodo(todo.id)})
        ]),
        todoInputComponent(model)
      ]);
    };
  };
})(window);
