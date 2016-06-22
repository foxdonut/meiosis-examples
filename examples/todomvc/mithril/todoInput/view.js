/*global m */
(function(ref) {
  ref.todoInput = ref.todoInput || {};

  ref.todoInput.view = {
    todoInput: function(todo, actions) {
      var events = actions.events;

      return m("input.edit[type=text]", {
        value: todo.title,
        onkeyup: events.onEditKeyUp(todo.id),
        onblur: events.onEditBlur(todo.id),
        config: function(element) {
          element.focus();
          element.selectionStart = element.value.length;
        }
      });
    },

    noTodoInput: function() {
      return m("span");
    }
  };
})(window);
