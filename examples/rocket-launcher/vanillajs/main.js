/*global meiosis, meiosisTracer, window*/
(function(ref) {
  var actions = ref.actions(meiosis.propose);
  var view = ref.display(ref.state, ref.view);
  var receive = ref.receive(ref.state);
  var nextAction = ref.nextAction(ref.state, actions);

  var state = function(model) {
    var appState = Object.assign({}, model);
    appState.even = model.counter % 2 === 0;
    appState.closeToLaunch = model.counter < 4;
    return appState;
  };

  var element = document.getElementById("app");
  var streams = meiosis.run({
    initialModel: ref.initialModel,
    scanner: receive,
    mappers: [ state ],
    nextAction: nextAction
  });
  meiosis.on(function(state) {
    element.innerHTML = view(state);
  }, streams.render);

  ref.ready(actions);

  meiosisTracer({ selector: "#tracer" });
})(window);
