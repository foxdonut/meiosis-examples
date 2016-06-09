/*global meiosis, meiosisReact, meiosisTracer, window*/
(function(ref) {
  var Meiosis = meiosis.init(meiosisReact.renderer.intoId("app"));

  var createComponent = Meiosis.createComponent;

  var Main = createComponent({
    initialModel: ref.initialModel,
    view: ref.display(ref.state, ref.view),
    actions: ref.actions,
    receiveUpdate: ref.receiveUpdate(ref.state),
    nextUpdate: ref.nextUpdate(ref.state)
  });

  var renderRoot = Meiosis.run(Main);

  meiosisTracer(createComponent, renderRoot, "#tracer");
})(window);
