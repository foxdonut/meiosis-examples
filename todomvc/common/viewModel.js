/*global window*/
(function(ref) {
  ref.viewModel = function(model) {
    var by = model.filter;
    var completed = by === "completed";

    var filterBy = (by && by !== "all") ? function(todo) {
      return (!!todo.completed) === completed;
    } :
    function() {
      return true;
    };
    model.todos = model.todos.filter(filterBy);

    var notCompleted = function(todo) { return !todo.completed; };
    var itemsLeft = model.todos.filter(notCompleted).length;
    model.itemsLeftText = model.todos.length > 0 ?
      (String(itemsLeft) + " item" + (itemsLeft === 1 ? "" : "s") + " left") : "";
    model.clearCompleted = (model.todos.length - itemsLeft) > 0;

    model.allSelected = model.filter === "all";
    model.activeSelected = model.filter === "active";
    model.completedSelected = model.filter === "completed";

    return model;
  };
})(window);
