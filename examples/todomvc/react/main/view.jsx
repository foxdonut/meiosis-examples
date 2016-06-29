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
  "mainView",
  ["react"],
  ["React"],

  function(React) {
    return function(todoItemComponent) {
      return function(model, actions) {
        return (
          <section className="main">
            <input className="toggle-all" type="checkbox" checked={model.allCompleted}
              onChange={actions.events.onToggleAllTodos}/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
              {model.filteredTodos.map(todoItemComponent(model))}
            </ul>
          </section>
        );
      };
    };
  }
));
