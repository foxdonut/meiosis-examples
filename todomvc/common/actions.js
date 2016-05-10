/*global window*/
(function(ref) {
  ref.actions = function(sendUpdate) {
    return {
      saveTodo: function(todo, id) {
        sendUpdate({ saveTodo: { title: todo, id: id } });
      },
      editTodo: function(todoId) {
        sendUpdate({ editTodoId: todoId, editing: true });
      },
      cancelEdit: function(todoId) {
        sendUpdate({ editTodoId: todoId, editing: false });
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
