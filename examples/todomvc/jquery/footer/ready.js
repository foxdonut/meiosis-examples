/*global define, exports, module, require, document*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery", "../../common/footer/ready"], function($, footerReady) {
      return (root.footerReady = factory(jQuery, footerReady));
    });
  }
  else if (typeof module === "object" && module.exports) {
    module.exports = (root.footerReady = factory(require("jquery"), require("../../common/footer/ready")));
  }
  else {
    root.footerReady = factory(root.jQuery, root.footerReady);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv

  function($, footerReady) {
    var $root = $(document.getElementById("app"));

    return function(actions) {
      $root.on("click", "button.clear-completed", function() {
        actions.clearCompleted();
      });

      if (typeof footerReady === "function") {
        footerReady(actions);
      }
    };
  }
));
