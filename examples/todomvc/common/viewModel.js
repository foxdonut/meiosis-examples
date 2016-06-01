/*global window*/
(function(ref) {
  ref.viewModel = function(model) {
    var viewModel = Object.assign({}, model);
    var by = model.filter;
    var completed = by === "completed";

    var filterBy = (by && by !== "all") ? function(todo) {
      return (!!todo.completed) === completed;
    } :
    function() {
      return true;
    };
    viewModel.todos = model.todos.filter(filterBy);

    var notCompleted = function(todo) { return !todo.completed; };
    var itemsLeft = viewModel.todos.filter(notCompleted).length;
    viewModel.itemsLeftText = viewModel.todos.length > 0 ?
      (String(itemsLeft) + " item" + (itemsLeft === 1 ? "" : "s") + " left") : "";
    viewModel.clearCompleted = (viewModel.todos.length - itemsLeft) > 0;

    viewModel.allSelected = model.filter === "all";
    viewModel.activeSelected = model.filter === "active";
    viewModel.completedSelected = model.filter === "completed";

    return viewModel;
  };
})(window);
