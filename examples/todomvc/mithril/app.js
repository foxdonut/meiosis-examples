/*global define, exports, module, require*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["meiosis-mithril", "../common/app"], function(meiosisMithril, app) {
      return (root.mithrilApp = factory(meiosisMithril, app));
    });
  }
  else if (typeof module === "object" && module.exports) {
    module.exports = (root.mithrilApp = factory(require("meiosis-mithril"), require("../common/app")));
  }
  else {
    root.mithrilApp = factory(root.meiosisMithril, root.app);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv

  function(meiosisMithril, app) {
    app(meiosisMithril);
  }
));
