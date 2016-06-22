(function(ref) {
  var STORAGE_KEY = "meiosis-todomvc";

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
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    },
    saveAll: function(todos) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      return todos;
    },
    saveTodo: function(todo) {
      var todos = ref.todoStorage.loadAll();

      if (parseInt(todo.id, 10) > 0) {
        todos = replaceTodoAtIndex(todos, todo, findIndex(todos, todo.id));
      }
      else {
        todos = todos.concat([{title: todo.title, id: new Date().getTime()}]);
      }
      return ref.todoStorage.saveAll(todos);
    },
    deleteTodoId: function(todoId) {
      var todos = ref.todoStorage.loadAll();
      var index = findIndex(todos, todoId);

      if (index >= 0) {
        todos = deleteTodoAtIndex(todos, index);
        ref.todoStorage.saveAll(todos);
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
        ref.todoStorage.saveAll(todos);
      }
      return todos;
    },
    setAllCompleted: function(update) {
      var todos = ref.todoStorage.loadAll();
      todos.forEach(function(todo) {
        todo.completed = update.completed;
      });
      ref.todoStorage.saveAll(todos);
      return todos;
    },
    clearCompleted: function() {
      var todos = ref.todoStorage.loadAll();
      var updatedTodos = [];

      for (var i = 0, t = todos.length; i < t; i++) {
        if (!todos[i].completed) {
          updatedTodos.push(todos[i]);
        }
      }
      return ref.todoStorage.saveAll(updatedTodos);
    }
  };
})(window);
