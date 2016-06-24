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
  "rootReceiveUpdate",
  ["meiosis"],
  ["meiosis"],

  function(meiosis) {
    return function(todoStorage) {
      return function(model, update) {
        if (update.saveTodo) {
          var editing = !update.saveTodo.id || update.saveTodo.id === model.editTodo.id;
          update.saveTodo.title = update.saveTodo.title.trim();

          if (editing && update.saveTodo.title) {
            model.todos = todoStorage.saveTodo(update.saveTodo);
          }
          else {
            return meiosis.REFUSE_UPDATE;
          }
        }
        else if (update.deleteTodoId) {
          model.todos = todoStorage.deleteTodoId(update.deleteTodoId);
        }
        else if (update.setCompleted) {
          model.todos = todoStorage.setCompleted(update.setCompleted);
        }
        else if (update.setAllCompleted) {
          model.todos = todoStorage.setAllCompleted(update.setAllCompleted);
        }
        else if (update.clearCompleted) {
          model.todos = todoStorage.clearCompleted();
        }
        else if (update.filter) {
          if (update.filter === model.filter) {
            return meiosis.REFUSE_UPDATE;
          }
          model.todos = todoStorage.loadAll();
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
    };
  }
));
