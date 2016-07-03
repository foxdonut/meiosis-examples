/*global define, exports, module, require*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./actionTypes"], function(HeaderAction) {
      return (root.headerNextAction = factory(headerActionTypes));
    });
  }
  else if (typeof module === "object" && module.exports) {
    module.exports = (root.headerNextAction = factory(require("./actionTypes")));
  }
  else {
    root.headerNextAction = factory(root.headerActionTypes);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv

  function(HeaderAction) {
    return function(model, proposal, actions) {
      HeaderAction.case({
        SaveNewTodo: function() {
          actions.clearNewTodo();
        },
        _: function() { }
      }, proposal);
    };
  }
));
