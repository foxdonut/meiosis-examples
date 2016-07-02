/*global define, exports, module, require, document*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, moduleName, depNames, depVars, factory) {
  if (typeof exports === "object") {
    var requires = depNames.map(function(depName) {
      return require(depName);
    });
    module.exports = factory.apply(root, requires);
  }
  else if (typeof define === "function" && define.amd) {
    define(depNames, factory);
  }
  else {
    var vars = depVars.map(function(depVar) {
      return root[depVar];
    });
    root[moduleName] = factory.apply(root, vars);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv
  "todoItemReady",
  ["jquery"],
  ["jQuery"],

  function($) {
    var $root = $(document.getElementById("app"));

    return function(actions) {
      $root.on("change", "input.toggle", function(evt) {
        var todoId = parseInt(evt.target.dataset.id, 10);
        var completed = evt.target.checked;
        actions.setCompleted(todoId, completed);
      });

      $root.on("dblclick", ".view label", function(evt) {
        var todoId = parseInt(evt.target.dataset.id, 10);
        var title = evt.target.innerHTML;
        actions.editTodo({title: title, id: todoId});
      });

      $root.on("click", "button.destroy", function(evt) {
        var todoId = parseInt(evt.target.dataset.id, 10);
        actions.deleteTodoId(todoId);
      });
    };
  }
));
