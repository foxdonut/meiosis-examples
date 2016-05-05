/*global window*/
(function(ref) {
  ref.receiveUpdate = function(model, update) {
    if (update.saveTodo) {
      model.todos = window.todoStorage.saveTodo(update.saveTodo);
    }
    else if (update.deleteTodoId) {
      model.todos = window.todoStorage.deleteTodoId(update.deleteTodoId);
    }
    else if (update.setCompleted) {
      model.todos = window.todoStorage.setCompleted(update.setCompleted);
    }
    return model;
  };
})(window);
