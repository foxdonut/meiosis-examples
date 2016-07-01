/*global define, exports, module, require, document*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, moduleName, depNames, depVars, factory) {
  if (typeof define === "function" && define.amd) {
    define(depNames, factory);
  }
  else if (typeof exports === "object") {
    var requires = depNames.map(function(depName) {
      return require(depName);
    });
    module.exports = factory.apply(root, requires);
  }
  else {
    var vars = depVars.map(function(depVar) {
      return root[depVar];
    });
    root[moduleName] = factory.apply(root, vars);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv
  "headerReady",
  ["jquery"],
  ["jQuery"],

  function($) {
    var ENTER_KEY = 13;
    var $root = $(document.getElementById("app"));

    return function(actions) {
      $root.on("keypress", "input.new-todo", function(evt) {
        if (evt.keyCode === ENTER_KEY) {
          actions.saveTodo(evt.target.value);
        }
      });
    };
  }
));
