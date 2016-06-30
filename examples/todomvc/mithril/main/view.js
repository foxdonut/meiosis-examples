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
  "mainView",
  ["mithril"],
  ["m"],

  function(m) {
    return function(todoItemComponent) {
      return function(model, actions) {
        return m("section.main", [
          m("input.toggle-all[type=checkbox]", {
            checked: model.allCompleted,
            onchange: actions.events.onToggleAllTodos
          }),
          m("label", {for: "toggle-all"}, "Mark all as complete"),
          m("ul.todo-list", model.filteredTodos.map(todoItemComponent(model)))
        ]);
      };
    };
  }
));
