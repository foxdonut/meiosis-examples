/*global define, exports, module, require*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["../../common/header/actions", "../../common/header/receive", "./view.jsx"], function(headerActions, headerReceive, headerView) {
      return (root.headerComponent = factory(headerActions, headerReceive, headerView));
    });
  }
  else if (typeof module === "object" && module.exports) {
    module.exports = (root.headerComponent = factory(require("../../common/header/actions"), require("../../common/header/receive"), require("./view.jsx")));
  }
  else {
    root.headerComponent = factory(root.headerActions, root.headerReceive, root.headerView);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv

  function(headerActions, headerReceive, headerView) {
    return function(createComponent, todoStorage) {
      return createComponent({
        actions: headerActions,
        view: headerView,
        receive: headerReceive(todoStorage)
      });
    };
  }
));