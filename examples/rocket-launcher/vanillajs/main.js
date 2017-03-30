/*global flyd, window*/
(function(ref) {
  var update = flyd.stream();
  var applyUpdate = function(model, modelChange) {
    return modelChange(model);
  };

  var updates = ref.updates(update, ref.state);
  var actions = ref.actions(updates);

  var view = ref.display(ref.state, ref.view);
  var nextAction = ref.nextAction(ref.state, actions);

  var model = flyd.scan(applyUpdate, ref.initialModel, update);
  var viewModel = model.map(ref.state.compute);
  var element = document.getElementById("app");

  viewModel.map(function(vm) {
    element.innerHTML = view(vm);
    nextAction(vm);
  });

  ref.ready(actions);
})(window);
