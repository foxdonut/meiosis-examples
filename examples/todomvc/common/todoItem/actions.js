/*global window*/
(function(ref) {
  ref.todoItem = ref.todoItem || {};

  ref.todoItem.actions = function(sendUpdate) {
    var actions = {
      setCompleted: function(todoId, completed) {
        sendUpdate({ setCompleted: { id: todoId, completed: completed } });
      },
      editTodo: function(title, id) {
        sendUpdate({ editTodo: { title: title, id: id } });
      },
      deleteTodoId: function(todoId) {
        sendUpdate({ deleteTodoId: todoId });
      }
    };

    actions.events = {
      onToggleTodo: function(todoId) {
        return function(evt) {
          actions.setCompleted(todoId, evt.target.checked);
        };
      },
      onEditTodo: function(todo) {
        return function(_evt) {
          actions.editTodo(todo.title, todo.id);
        };
      },
      onDestroyTodo: function(todoId) {
        return function(_evt) {
          actions.deleteTodoId(todoId);
        };
      }
    };

    return actions;
  };
})(window);
