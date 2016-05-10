/*global meiosis, window*/
(function(ref) {
  ref.receiveUpdate = function(model, update) {
    if (update.saveTodo) {
      var editing = !update.saveTodo.id || model.meta[String(update.saveTodo.id)].editing;

      if (editing) {
        model.todos = window.todoStorage.saveTodo(update.saveTodo);
      }
      else {
        return meiosis.REFUSE_UPDATE;
      }
    }
    else if (update.deleteTodoId) {
      model.todos = window.todoStorage.deleteTodoId(update.deleteTodoId);
    }
    else if (update.setCompleted) {
      model.todos = window.todoStorage.setCompleted(update.setCompleted);
    }
    else if (update.clearCompleted) {
      model.todos = window.todoStorage.clearCompleted();
    }
    else if (update.filter) {
      model.todos = window.todoStorage.filter(update.filter);
      model.filter = update.filter;
    }
    return model;
  };
})(window);
