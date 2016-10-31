/*global meiosis, meiosisSnabbdom, meiosisTracer, window*/
(function(ref) {
  var Main = meiosis.createComponent({
    view: ref.display(ref.state, ref.view),
    actions: ref.actions,
    receive: ref.receive(ref.state),
    nextAction: ref.nextAction(ref.state)
  });

  var renderRoot = meiosis.run({ renderer: meiosisSnabbdom.renderer().intoId(document, "app"),
    initialModel: ref.initialModel, rootComponent: Main });

  meiosisTracer(meiosis.createComponent, renderRoot, "#tracer");
})(window);
