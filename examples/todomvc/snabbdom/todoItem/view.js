/*global meiosisSnabbdom */
(function(ref) {
  ref.todoItem = ref.todoItem || {};

  var h = meiosisSnabbdom.renderer.h;

  ref.todoItem.view = {
    todoItem: function(model, input, events) {
      var todo = model.todo;

      return h("li", {attrs: {class: model.todoClasses}}, [
        h("div.view", [
          h("input.toggle", {props: {type: "checkbox", checked: todo.completed},
            on: {change: events.onToggleTodo(todo.id)}}),
          h("label", {on: {dblclick: events.onEditTodo(todo)}}, todo.title),
          h("button.destroy", {on: {click: events.onDestroyTodo(todo.id)}})
        ]),
        input
      ]);
    },

    todoInput: function(todo, events) {
      return h("input.edit", {
        props: { type: "text", value: todo.title },
        on: {
          keyup: events.onEditKeyUp(todo.id),
          blur: events.onEditBlur(todo.id)
        },
        hook: {
          insert: function(vnode) {
            var elm = vnode.elm;
            elm.focus();
            elm.selectionStart = elm.value.length;
          }
        }
      });
    },

    noTodoInput: function() {
      return h("span");
    }
  };
})(window);
