/*global meiosis, window*/
(function(ref) {
  ref.receiveUpdate = function(model, update) {
    if (update.saveTodo) {
      var editing = !update.saveTodo.id;

      if (!editing) {
        for (var i = 0, t = model.todos.length; i < t; i++) {
          if (model.todos[i].id === update.saveTodo.id) {
            editing = model.todos[i].editing;
            break;
          }
        }
      }

      if (editing) {
        model.todos = ref.todoStorage.saveTodo(update.saveTodo);
      }
      else {
        return meiosis.REFUSE_UPDATE;
      }
    }
    else if (update.editingTodo) {
      for (var j = 0, u = model.todos.length; j < u; j++) {
        var todo = model.todos[j];
        if (todo.id === update.editingTodo.id) {
          todo.title = update.editingTodo.title;
          break;
        }
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
    else if (update.newTodo) {
      model.newTodo = "x";
    }

    return model;
  };
})(window);
