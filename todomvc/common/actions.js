/*global window*/
(function(ref) {
  ref.actions = function(sendUpdate) {
    return {
      newTodo: function(title) {
        sendUpdate({ newTodo: title });
      },
      saveTodo: function(title, id) {
        sendUpdate({ saveTodo: { title: title, id: id } });
      },
      clearInput: function() {
        sendUpdate({ newTodo: "" });
      },
      editTodo: function(title, id) {
        sendUpdate({ editTodo: { title: title, id: id } });
      },
      cancelEdit: function() {
        sendUpdate({ editTodo: { } });
      },
      deleteTodoId: function(todoId) {
        sendUpdate({ deleteTodoId: todoId });
      },
      setCompleted: function(todoId, completed) {
        sendUpdate({ setCompleted: { id: todoId, completed: completed } });
      },
      clearCompleted: function() {
        sendUpdate({ clearCompleted: true });
      },
      filter: function(by) {
        sendUpdate({ filter: by });
      }
    };
  };
})(window);
