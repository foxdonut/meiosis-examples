/*global meiosis, meiosisTracer, ReactDOM, window*/
(function(ref) {
  var actions = ref.actions(meiosis.propose);
  var view = ref.display(ref.state, ref.view(actions));
  var receive = ref.receive(ref.state);
  var nextAction = ref.nextAction(ref.state, actions);

  var state = function(model) {
    var appState = Object.assign({}, model);
    appState.even = model.counter % 2 === 0;
    appState.closeToLaunch = model.counter < 4;
    return appState;
  };

  var lastPropose = meiosis.propose();

  var element = document.getElementById("app");
  var streams = meiosis.run({ initial: ref.initialModel, scanner: receive, mappers: [{ state: state }] });
  meiosis.on(function(state) {
    ReactDOM.render(view(state), element, function() {
      if (meiosis.propose() !== lastPropose) {
        nextAction(state);
        lastPropose = meiosis.propose();
      }
    });
  }, streams.state);

  meiosisTracer({ selector: "#tracer" });
})(window);
