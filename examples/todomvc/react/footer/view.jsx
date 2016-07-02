/*global define, exports, module, require, React*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, moduleName, depNames, depVars, factory) {
  if (typeof exports === "object") {
    var requires = depNames.map(function(depName) {
      return require(depName);
    });
    module.exports = factory.apply(root, requires);
  }
  else if (typeof define === "function" && define.amd) {
    define(depNames, factory);
  }
  else {
    var vars = depVars.map(function(depVar) {
      return root[depVar];
    });
    root[moduleName] = factory.apply(root, vars);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv
  "footerView",
  ["react", "classNames"],
  ["classNames"],

  function(classNames) {
    return function(model, actions) {
      var clearCompleted = model.clearCompleted ?
        <button className="clear-completed" onClick={actions.events.onClearCompleted}>Clear completed</button> : null;

      return (
        <footer className="footer">
          <span className="todo-count">{model.itemsLeftText}</span>
          <ul className="filters">
            <li><a href="#/" className={classNames({selected: model.allSelected})}>All</a></li>
            <li><a href="#/active" className={classNames({selected: model.activeSelected})}>Active</a></li>
            <li><a href="#/completed" className={classNames({selected: model.completedSelected})}>Completed</a></li>
          </ul>
          {clearCompleted}
        </footer>
      );
    };
  }
));
