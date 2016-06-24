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
  "todoEditComponent",
  ["./actions", "variant/todoEdit/view", "./display", "./receiveUpdate", "./postRender", "variant/todoEdit/ready", "./nextUpdate", "../todoItem/state"],
  ["todoEditActions", "todoEditView", "todoEditDisplay", "todoEditReceiveUpdate", "todoEditPostRender", "todoEditReady", "todoEditNextUpdate", "todoItemState"],

  function(todoEditActions, todoEditView, todoEditDisplay, todoEditReceiveUpdate, todoEditPostRender, todoEditReady, todoEditNextUpdate, todoItemState) {
    return function(createComponent, todoStorage) {
      return createComponent({
        actions: todoEditActions,
        view: todoEditDisplay(todoItemState, todoEditView),
        receiveUpdate: todoEditReceiveUpdate(todoStorage),
        postRender: todoEditPostRender, // only jquery and vanillajs need postRender
        ready: todoEditReady, // only jquery and vanillajs need ready
        nextUpdate: todoEditNextUpdate
      });
    };
  }
));
