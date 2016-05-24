/*global meiosis, window*/
(function(ref) {
  ref.receiveUpdate = function(model, update) {
    if (update.saveTodo) {
      var editing = !update.saveTodo.id || update.saveTodo.id === model.editTodo.id;

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
      if (update.filter === model.filter) {
        return meiosis.REFUSE_UPDATE;
      }
      model.todos = ref.todoStorage.loadAll();
      model.filter = update.filter;
    }
    else if (update.newTodo !== undefined) {
      model.newTodo = update.newTodo;
    }
    else if (update.editTodo !== undefined) {
      model.editTodo = update.editTodo;
    }

    return model;
  };
})(window);
