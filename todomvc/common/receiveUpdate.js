/*global meiosis, window*/
(function(ref) {
  ref.receiveUpdate = function(model, update) {
    if (update.saveTodo) {
      var editing = !update.saveTodo.id || model.meta[String(update.saveTodo.id)].editing;

      if (editing) {
        model.todos = ref.todoStorage.saveTodo(update.saveTodo);
      }
      else {
        return meiosis.REFUSE_UPDATE;
      }
    }
    else if (update.deleteTodoId) {
      model.todos = ref.todoStorage.deleteTodoId(update.deleteTodoId);
    }
    else if (update.setCompleted) {
      model.todos = ref.todoStorage.setCompleted(update.setCompleted);
    }
    else if (update.clearCompleted) {
      model.todos = ref.todoStorage.clearCompleted();
    }
    else if (update.filter) {
      model.todos = ref.todoStorage.loadAll();
      model.filter = update.filter;
    }
    return model;
  };
})(window);
