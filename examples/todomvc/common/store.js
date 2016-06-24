/*global define, exports, module, require*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, moduleName, depNames, depVars, factory) {
  if (typeof define === "function" && define.amd) {
    define(depNames, factory);
  }
  else if (typeof exports === "object") {
    var requires = depNames.map(function(depName) {
      return require(depName);
    });
    module.exports = factory.apply(root, requires);
  }
  else {
    var vars = depVars.map(function(depVar) {
      return root[depVar];
    });
    root[moduleName] = factory.apply(root, vars);
  }
}(this, // ^^ the code above is boilerplate. the "real" code starts below. vv
  "todoStorage", [], [],

  function() {
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

    var todoStorage = {
      loadAll: function() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      },
      saveAll: function(todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        return todos;
      },
      saveTodo: function(todo) {
        var todos = this.loadAll();

        if (parseInt(todo.id, 10) > 0) {
          todos = replaceTodoAtIndex(todos, todo, findIndex(todos, todo.id));
        }
        else {
          todos = todos.concat([{title: todo.title, id: new Date().getTime()}]);
        }
        return this.saveAll(todos);
      },
      deleteTodoId: function(todoId) {
        var todos = this.loadAll();
        var index = findIndex(todos, todoId);

        if (index >= 0) {
          todos = deleteTodoAtIndex(todos, index);
          this.saveAll(todos);
        }
        return todos;
      },
      setCompleted: function(updatedTodo) {
        var todos = this.loadAll();
        var index = findIndex(todos, updatedTodo.id);

        if (index >= 0) {
          var todo = todos[index];
          todo.completed = updatedTodo.completed;
          todos = replaceTodoAtIndex(todos, todo, index);
          this.saveAll(todos);
        }
        return todos;
      },
      setAllCompleted: function(update) {
        var todos = this.loadAll();
        todos.forEach(function(todo) {
          todo.completed = update.completed;
        });
        this.saveAll(todos);
        return todos;
      },
      clearCompleted: function() {
        var todos = this.loadAll();
        var updatedTodos = [];

        for (var i = 0, t = todos.length; i < t; i++) {
          if (!todos[i].completed) {
            updatedTodos.push(todos[i]);
          }
        }
        return this.saveAll(updatedTodos);
      }
    };

    return todoStorage;
  }
));
