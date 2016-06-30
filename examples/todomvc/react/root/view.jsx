/*global define, exports, module, require, React*/

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
  "rootView",
  ["react"],
  [],

  function() {
    var info = (
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Meiosis - React - Created by <a href="http://twitter.com/foxdonut00">foxdonut00</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    );

    return function(todoapp) {
      return function(model) {
        return (
          <div>
            {todoapp(model)}
            {info}
          </div>
        );
      };
    };
  }
));
