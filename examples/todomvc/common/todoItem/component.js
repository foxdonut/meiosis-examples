/*global define, exports, module, require*/

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
  "todoItemComponent",
  ["./actions", "./state", "./display", "variant/todoItem/view", "./receive", "variant/todoItem/ready", "../todoEdit/component"],
  ["todoItemActions", "todoItemState", "todoItemDisplay", "todoItemView", "todoItemReceive", "todoItemReady", "todoEditComponent"],

  function(todoItemActions, todoItemState, todoItemDisplay, todoItemView, todoItemReceive, todoItemReady, todoEditComponent) {
    return function(createComponent, todoStorage) {
      var todoEdit = todoEditComponent(createComponent, todoStorage);

      return createComponent({
        actions: todoItemActions,
        view: todoItemDisplay(todoItemState, todoItemView(todoEdit)),
        receive: todoItemReceive(todoStorage),
        ready: todoItemReady // only jquery and vanillajs need ready
      });
    };
  }
));
