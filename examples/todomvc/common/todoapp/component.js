/*global define, exports, module, require*/

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
  "todoappComponent",
  ["variant/todoapp/view", "../header/component", "../main/component", "../footer/component"],
  ["todoappView", "headerComponent", "mainComponent", "footerComponent"],

  function(todoappView, headerComponent, mainComponent, footerComponent) {
    var viewModel = function(model) {
      var viewModel = model;
      var by = model.filter;
      var completed = by === "completed";

      var filterBy = (by && by !== "all") ? function(todo) {
        return (!!todo.completed) === completed;
      } :
      function() {
        return true;
      };
      viewModel.filteredTodos = model.todos.filter(filterBy);

      var notCompleted = function(todo) { return !todo.completed; };
      var itemsLeft = viewModel.filteredTodos.filter(notCompleted).length;
      viewModel.itemsLeftText = viewModel.filteredTodos.length > 0 ?
        (String(itemsLeft) + " item" + (itemsLeft === 1 ? "" : "s") + " left") : "";
      viewModel.clearCompleted = (viewModel.filteredTodos.length - itemsLeft) > 0;

      viewModel.allSelected = model.filter === "all";
      viewModel.activeSelected = model.filter === "active";
      viewModel.completedSelected = model.filter === "completed";

      return viewModel;
    };

    return function(createComponent, todoStorage) {
      var header = headerComponent(createComponent, todoStorage);
      var main = mainComponent(createComponent, todoStorage);
      var footer = footerComponent(createComponent, todoStorage);

      var view = todoappView(header, main, footer);

      return createComponent({
        view: function(model) {
          return view(viewModel(model));
        }
      });
    };
  }
));
