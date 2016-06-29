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
  "todoItemReceive",
  ["./actionTypes"],
  ["todoItemActionTypes"],

  function(ItemAction) {
    return function(todoStorage) {
      return function(model, proposal) {
        return ItemAction.case({
          SetCompleted: function(todoId, completed) {
            model.todos = todoStorage.setCompleted(todoId, completed);
            return model;
          },
          EditTodo: function(todo) {
            model.editTodo = todo;
            return model;
          },
          DeleteTodo: function(todoId) {
            model.todos = todoStorage.deleteTodoId(todoId);
            return model;
          },
          _: function() {
            return model;
          }
        }, proposal);
      };
    };
  }
));
