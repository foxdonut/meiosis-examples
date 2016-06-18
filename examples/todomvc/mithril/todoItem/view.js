/*global m */
(function(ref) {
  ref.todoItem = ref.todoItem || {};

  ref.todoItem.view = {
    todoItem: function(model, input, events) {
      var todo = model.todo;

      return m("li", {class: model.todoClasses}, [
        m("div.view", [
          m("input.toggle[type=checkbox]", {checked: todo.completed,
            onchange: events.onToggleTodo(todo.id)}),
          m("label", {ondblclick: events.onEditTodo(todo)}, todo.title),
          m("button.destroy", {onclick: events.onDestroyTodo(todo.id)})
        ]),
        input
      ]);
    },

    todoInput: function(todo, events) {
      return m("input.edit[type=text]", {
        value: todo.title,
        onkeyup: events.onEditKeyUp(todo.id),
        onblur: events.onEditBlur(todo.id),
        config: function(elm) {
          elm.focus();
          elm.selectionStart = elm.value.length;
        }
      });
    },

    noTodoInput: function() {
      return m("span");
    }
  };
})(window);
