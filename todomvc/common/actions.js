/*global window*/
(function(ref) {
  ref.actions = function(sendUpdate) {
    return {
      saveTodo: function(todo) {
        sendUpdate({ saveTodo: { title: todo } });
      },
      deleteTodoId: function(todoId) {
        sendUpdate({ deleteTodoId: todoId });
      },
      setCompleted: function(todoId, completed) {
        sendUpdate({ setCompleted: { id: todoId, completed: completed } });
      }
    };
  };
})(window);
