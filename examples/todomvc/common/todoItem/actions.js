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
  "todoItemActions", [], [],

  function() {
    return function(sendUpdate) {
      var actions = {
        setCompleted: function(todoId, completed) {
          sendUpdate({ setCompleted: { id: todoId, completed: completed } });
        },
        editTodo: function(title, id) {
          sendUpdate({ editTodo: { title: title, id: id } });
        },
        deleteTodoId: function(todoId) {
          sendUpdate({ deleteTodoId: todoId });
        }
      };

      actions.events = {
        onToggleTodo: function(todoId) {
          return function(evt) {
            actions.setCompleted(todoId, evt.target.checked);
          };
        },
        onEditTodo: function(todo) {
          return function(_evt) {
            actions.editTodo(todo.title, todo.id);
          };
        },
        onDestroyTodo: function(todoId) {
          return function(_evt) {
            actions.deleteTodoId(todoId);
          };
        }
      };

      return actions;
    };
  }
));
