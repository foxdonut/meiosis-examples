/*global define, exports, module, require, document*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["meiosis-vanillajs", "../../common/footer/ready"], function(meiosisVanillaJs, footerReady) {
      return (root.footerReady = factory(meiosisVanillaJs, footerReady));
    });
  }
  else if (typeof module === "object" && module.exports) {
    module.exports = (root.footerReady = factory(require("meiosis-vanillajs"), require("../../common/footer/ready")));
  }
  else {
    root.footerReady = factory(root.meiosisVanillaJs, root.footerReady);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv

  function(meiosisVanillaJs, footerReady) {
    var renderer = meiosisVanillaJs.renderer;
    var root = document.getElementById("app");

    return function(actions) {
      renderer.delegate(root, "button.clear-completed", "click", function() {
        actions.clearCompleted();
      });

      if (typeof footerReady === "function") {
        footerReady(actions);
      }
    };
  }
));
