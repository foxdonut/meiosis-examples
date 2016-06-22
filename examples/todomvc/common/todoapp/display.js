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
    viewModel.allCompleted = itemsLeft === 0;

    return viewModel;
  };

  ref.todoapp = ref.todoapp || {};

  ref.todoapp.display = function(createComponent) {
    var header = createComponent(ref.header.component());
    var main = createComponent(ref.main.component());
    var todoItem = createComponent(ref.todoItem.component());
    var footer = createComponent(ref.footer.component());

    return function(model) {
      var vmodel = viewModel(model);
      var renderedTodos = vmodel.filteredTodos.map(todoItem(vmodel));
      var mainData = {renderedTodos: renderedTodos, allCompleted: vmodel.allCompleted};

      return ref.todoapp.view(header(vmodel), main(mainData), footer(vmodel));
    };
  };
})(window);
