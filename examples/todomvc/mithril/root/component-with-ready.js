/*global define, exports, module, require*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["../../common/root/model", "./view", "./ready", "../todoapp/component"], function(todoModel, rootView, rootReady, todoappComponent) {
      return (root.omponent = factory(todoModel, rootView, rootReady, todoappComponent));
    });
  }
  else if (typeof module === "object" && module.exports) {
    module.exports = (root.rootComponent = factory(require("../../common/root/model"), require("./view"), require("./ready"), require("../todoapp/component")));
  }
  else {
    root.rootComponent = factory(root.todoModel, root.rootView, root.rootReady, root.todoappComponent);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv

  function(todoModel, rootView, rootReady, todoappComponent) {
    return function(createComponent, todoStorage) {
      var todoapp = todoappComponent(createComponent, todoStorage);

      return createComponent({
        initialModel: todoModel(todoStorage),
        view: rootView(todoapp),
        ready: rootReady // only jquery and vanillajs need ready
      });
    };
  }
));
