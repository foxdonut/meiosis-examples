/*global define, exports, module, require*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["../../common/actions", "./view", "../../common/receive", "../../common/ready"], function(footerActions, footerView, footerReceive, footerReady) {
      return (root.footerComponent = factory(footerActions, footerView, footerReceive, footerReady));
    });
  }
  else if (typeof module === "object" && module.exports) {
    module.exports = (root.footerComponent = factory(require("../../common/actions"), require("./view"), require("../../common/receive"), require("../../common/ready")));
  }
  else {
    root.footerComponent = factory(root.footerActions, root.footerView, root.footerReceive, root.footerReady);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv

  function(footerActions, footerView, footerReceive, footerReady) {
    return function(createComponent, todoStorage) {
      return createComponent({
        actions: footerActions,
        view: footerView,
        receive: footerReceive(todoStorage),
        ready: footerReady
      });
    };
  }
));
