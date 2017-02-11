/*global meiosis, meiosisTracer, ReactDOM, window*/
(function(ref) {
  var view = ref.display(ref.state, ref.view(ref.actions));
  var nextAction = ref.nextAction(ref.state, ref.actions);

  var modelChanges = ref.modelChanges(ref.state, ref.actions);

  var state = function(model) {
    var appState = Object.assign({}, model);
    appState.even = model.counter % 2 === 0;
    appState.closeToLaunch = model.counter < 4;
    return appState;
  };

  var element = document.getElementById("app");
  var streams = meiosis.run({
    initialModel: ref.initialModel,
    modelChanges: modelChanges,
    mappers: [ state ]
  });
  meiosis.on(function(state) {
    ReactDOM.render(view(state), element, function() {
      nextAction(state);
    });
  }, streams.render);

  meiosisTracer({ selector: "#tracer" });
})(window);
