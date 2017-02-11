/*global meiosis, meiosisTracer, window*/
(function(ref) {
  var view = ref.display(ref.state, ref.view);
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
    element.innerHTML = view(state);
    nextAction(state);
  }, streams.render);

  ref.ready(ref.actions);

  meiosisTracer({ selector: "#tracer" });
})(window);
