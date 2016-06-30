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
  "todoItemView",
  ["react"],
  [],

  function() {
    return function(todoEditComponent) {
      return function(model, actions) {
        var todo = model.todo;
        var events = actions.events;

        return (
          <li key={todo.id} className={model.todoClasses}>
            <div className="view">
              <input className="toggle" type="checkbox" checked={todo.completed}
                onChange={events.onToggleTodo(todo.id)}/>
              <label onDoubleClick={events.onEditTodo(todo)}>{todo.title}</label>
              <button className="destroy" onClick={events.onDestroyTodo(todo.id)}></button>
            </div>
            {todoEditComponent(model)}
          </li>
        );
      };
    };
  }
));
