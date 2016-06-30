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
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv
  "footerReceive",
  ["meiosis", "./actionTypes"],
  ["meiosis", "footerActionTypes"],

  function(meiosis, FooterAction) {
    return function(todoStorage) {
      return function(model, proposal) {
        return FooterAction.case({
          ClearCompleted: function() {
            model.todos = todoStorage.clearCompleted();
            return model;
          },
          Filter: function(by) {
            if (by === model.filter) {
              return meiosis.REFUSE_PROPOSAL;
            }
            model.todos = todoStorage.loadAll();
            model.filter = by;
            return model;
          },
          _: function() {
            return model;
          }
        }, proposal);
      };
    };
  }
));
