/*global window*/
(function(ref) {
  var viewModel = function(state, model) {
    var viewModel = model;

    viewModel.allCompleted = state.allCompleted(model);

    return viewModel;
  };

  ref.main = ref.main || {};

  ref.main.display = function(createComponent, state) {
    var todoItem = createComponent(ref.todoItem.component());

    return function(model) {
      var vmodel = viewModel(state, model);
      var vmodel.renderedTodos = vmodel.filteredTodos.map(todoItem(vmodel));

      return ref.main.view(vmodel);
    };
  };
})(window);
