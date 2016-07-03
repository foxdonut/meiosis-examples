/*global define, exports, module, require*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["../../common/main/actions", "../../common/main/state", "../../common/main/display", "../../common/main/receive", "./view", "./ready", "../todoItem/component"], function(mainActions, mainState, mainDisplay, mainReceive, mainView, mainReady, todoItemComponent) {
      return (root.mainComponent = factory(mainActions, mainState, mainDisplay, mainReceive, mainView, mainReady, todoItemComponent));
    });
  }
  else if (typeof module === "object" && module.exports) {
    module.exports = (root.mainComponent = factory(require("../../common/main/actions"), require("../../common/main/state"), require("../../common/main/display"), require("../../common/main/receive"), require("./view"), require("./ready"), require("../todoItem/component")));
  }
  else {
    root.mainComponent = factory(root.mainActions, root.mainState, root.mainDisplay, root.mainReceive, root.mainView, root.mainReady, root.todoItemComponent);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv

  function(mainActions, mainState, mainDisplay, mainReceive, mainView, mainReady, todoItemComponent) {
    return function(createComponent, todoStorage) {
      var todoItem = todoItemComponent(createComponent, todoStorage);

      return createComponent({
        actions: mainActions,
        view: mainDisplay(mainState, mainView(todoItem)),
        receive: mainReceive(todoStorage),
        ready: mainReady // only jquery and vanillajs need ready
      });
    };
  }
));
