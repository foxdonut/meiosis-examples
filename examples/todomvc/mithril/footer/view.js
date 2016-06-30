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
  "footerView",
  ["mithril", "classNames"],
  ["m", "classNames"],

  function(m, classNames) {
    return function(model, actions) {
      var clearCompleted = model.clearCompleted ?
          m("button.clear-completed", {onclick: actions.events.onClearCompleted}, "Clear completed") : m("span");

      return m("footer.footer", [
        m("span.todo-count", model.itemsLeftText),
        m("ul.filters", [
          m("li", [m("a", {href: "#/", class: classNames({selected: model.allSelected})}, "All")]),
          m("li", [m("a", {href: "#/active", class: classNames({selected: model.activeSelected})}, "Active")]),
          m("li", [m("a", {href: "#/completed", class: classNames({selected: model.completedSelected})}, "Completed")])
        ]),
        clearCompleted
      ]);
    };
  }
));
