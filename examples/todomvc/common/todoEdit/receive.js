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
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv
  "todoEditReceive",
  ["meiosis", "./actionTypes"],
  ["meiosis", "todoEditActionTypes"],

  function(meiosis, EditAction) {
    return function(todoStorage) {
      return function(model, proposal) {
        return EditAction.case({
          EditingTodo: function(todo) {
            model.editTodo = todo;
            return model;
          },
          SaveTodo: function(todo) {
            var editing = todo.id === model.editTodo.id;
            todo.title = todo.title.trim();

            if (editing && todo.title) {
              model.todos = todoStorage.saveTodo(todo);
              return model;
            }
            else {
              return meiosis.REFUSE_PROPOSAL;
            }
          },
          ClearEdit: function() {
            model.editTodo = { };
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
