(function(ref) {
  var STORAGE_KEY = "meiosis-todomvc";
  var nextId = 1;

  var findIndex = function(todos, todoId) {
    var index = -1;

    for (var i = 0, t = todos.length; i < t; i++) {
      if (todos[i].id === todoId) {
        index = i;
        break;
      }
    }
    return index;
  };

  var replaceTodoAtIndex = function(todos, todo, index) {
    return todos.slice(0, index).concat([todo]).concat(todos.slice(index + 1));
  };

  var deleteTodoAtIndex = function(todos, index) {
    return todos.slice(0, index).concat(todos.slice(index + 1));
  };

  ref.todoStorage = {
    loadAll: function() {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) ||
        "[{\"id\":1,\"title\":\"meiosis\",\"completed\":false}]");
    },
    saveTodo: function(todo) {
      var todos = ref.todoStorage.loadAll();

      if (parseInt(todo.id, 10) > 0) {
        todos = replaceTodoAtIndex(todos, todo, findIndex(todos, todo.id));
      }
      else {
        todo.id = nextId++;
        todos = todos.concat([todo]);
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));

      return todos;
    },
    deleteTodoId: function(todoId) {
      var todos = ref.todoStorage.loadAll();
      var index = findIndex(todos, todoId);

      if (index >= 0) {
        todos = deleteTodoAtIndex(todos, index);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      }
      return todos;
    },
    setCompleted: function(updatedTodo) {
      var todos = ref.todoStorage.loadAll();
      var index = findIndex(todos, updatedTodo.id);

      if (index >= 0) {
        var todo = todos[index];
        todo.completed = updatedTodo.completed;
        todos = replaceTodoAtIndex(todos, todo, index);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      }
      return todos;
    }
  };
})(window);
