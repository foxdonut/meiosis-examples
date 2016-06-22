/*global window*/
(function(ref) {
  var viewModel = function(state, model) {
    var viewModel = model;

    viewModel.allCompleted = state.allCompleted(model);

    return viewModel;
  };

  ref.main = ref.main || {};

  ref.main.display = function(state, view) {
    return function(model, actions) {
      return view(viewModel(state, model), actions);
    };
  };
})(window);
