/*global define, exports, module, require*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "classNames"], function(React, classNames) {
      return (root.footerView = factory(React, classNames));
    });
  }
  else if (typeof module === "object" && module.exports) {
    module.exports = (root.footerView = factory(require("react"), require("classNames")));
  }
  else {
    root.footerView = factory(root.React, root.classNames);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv

  function(React, classNames) {
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
