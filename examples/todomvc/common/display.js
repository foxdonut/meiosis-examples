/*global window*/
(function(ref) {
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

  ref.display = function(state, view, todoItem) {
    return function(model, actions) {
      var vmodel = viewModel(model);

      var header = view.header(vmodel, actions);
      var renderedTodos = vmodel.filteredTodos.map(todoItem(vmodel, actions));
      var main = view.main(renderedTodos);
      var footer = view.footer(vmodel, actions);
      var todoapp = view.todoapp(header, main, footer);
      var info = view.info();

      return view.root(todoapp, info);
    };
  };
})(window);
