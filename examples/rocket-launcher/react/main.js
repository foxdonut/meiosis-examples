/*global flyd, meiosis, meiosisTracer, ReactDOM, window*/
(function(ref) {
  var scan = meiosis.createScan(flyd);

  var view = ref.display(ref.state, ref.view(ref.actions));
  var nextAction = ref.nextAction(ref.state, ref.actions);

  var modelChanges = ref.modelChanges(ref.state, ref.actions);

  var stateFn = function(model) {
    var appState = Object.assign({}, model);
    appState.even = model.counter % 2 === 0;
    appState.closeToLaunch = model.counter < 4;
    return appState;
  };

  var model = scan(meiosis.applyModelChange, ref.initialModel, modelChanges);
  var state = model.map(stateFn);
  var element = document.getElementById("app");

  state.map(function(state) {
    ReactDOM.render(view(state), element, function() {
      nextAction(state);
    });
  });

  meiosis.trace({ streamLibrary: flyd, modelChanges: modelChanges, streams: [ model, state ]});
  meiosisTracer({ selector: "#tracer" });
})(window);
