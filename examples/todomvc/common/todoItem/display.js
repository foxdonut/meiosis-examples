/*global window*/
(function(ref) {
  var viewModel = function(state, model, todo) {
    var viewModel = model;

    viewModel.todoClasses = ref.classNames({
      "completed": todo.completed,
      "editing": state.editing(model, todo)
    });

    return viewModel;
  };

  ref.todoItemDisplay = function(state, view) {
    return function(model, actions) {
      return function(todo) {
        var vmodel = viewModel(state, model, todo);
        var input = state.editing ? view.todoInput(vmodel, actions) : null;
        return view.todoItem(vmodel, actions, todo, input);
      };
    };
  };
})(window);
