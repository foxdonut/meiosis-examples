/*global define, exports, module, require*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // only jquery and vanillajs need an additional ready function
    define(["history", "variant/footer/ready"], function(History, otherFooterReady) {
      return (root.footerReady = factory(History, otherFooterReady));
    });
  }
  else if (typeof module === "object" && module.exports) {
    module.exports = (root.footerReady = factory(require("history"), require("variant/footer/ready")));
  }
  else {
    root.footerReady = factory(root.History, root.otherFooterReady);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv

  // only jquery and vanillajs need an additional ready function
  function(History, otherFooterReady) {
    return function(actions) {
      var history = History.createHistory();

      history.listen(function(location) {
        var route = location.hash.split("/")[1] || "all";
        actions.filter(route);
      });

      if (typeof otherFooterReady === "function") {
        otherFooterReady(actions);
      }
    };
  }
));
