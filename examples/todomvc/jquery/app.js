/*global define, exports, module, require*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["meiosisVanillaJs", "../common/app"], function(meiosisVanillaJs, app) {
      return (root.jqueryApp = factory(meiosisVanillaJs, app));
    });
  }
  else if (typeof module === "object" && module.exports) {
    module.exports = (root.jqueryApp = factory(require("meiosisVanillaJs"), require("../common/app")));
  }
  else {
    root.jqueryApp = factory(root.meiosisVanillaJs, root.app);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv

  function(meiosisVanillaJs, app) {
    app(meiosisVanillaJs);
  }
));
