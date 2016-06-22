/*global define, exports, module, require*/

// This boilerplate is to support running this code with either
// - just the browser
// - RequireJS
// - node.js / npm (browserify, webpack, etc.)
// Do not think this boilerplate is necessary to run Meiosis. It is for your convenience when
// running this example, so that you can use any of the above according to your preference.
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
}(this,
  "mainView",
  ["jquery", "handlebars"],
  ["$", "Handlebars"],

  function($, Handlebars) {
    var mainTemplate = Handlebars.compile($("#main").html());

    return function(renderedTodos) {
      return mainTemplate({renderedTodos: renderedTodos.join("")});
    };
  }
));

