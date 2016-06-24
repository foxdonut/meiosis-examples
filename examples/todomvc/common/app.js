/*global define, exports, module, require*/

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
}(this, // ^^ the code above is boilerplate. the "real" code starts below. vv
  "app",
  ["meiosis", "meiosisTracer", "./root/component", "./store"],
  ["meiosis", "meiosisTracer", "rootComponent", "todoStorage"],

  function(meiosis, meiosisTracer, rootComponent, todoStorage) {
    return function(meiosisRender) {
      var Meiosis = meiosis.init(meiosisRender.renderer.intoId("app"));
      var createComponent = Meiosis.createComponent;
      var root = rootComponent(createComponent, todoStorage);
      var renderRoot = Meiosis.run(root);
      meiosisTracer(createComponent, renderRoot, "#tracer");
    };
  }
));
