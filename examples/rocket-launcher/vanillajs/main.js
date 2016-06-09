/*global meiosis, meiosisVanillaJs, meiosisTracer, window*/
(function(ref) {
  var Meiosis = meiosis.init(meiosisVanillaJs.renderer.intoId("app"));

  var createComponent = Meiosis.createComponent;

  var Main = createComponent({
    initialModel: ref.initialModel,
    view: ref.display(ref.state, ref.view),
    actions: ref.actions,
    ready: ref.ready,
    receiveUpdate: ref.receiveUpdate(ref.state),
    nextUpdate: ref.nextUpdate(ref.state)
  });

  var renderRoot = Meiosis.run(Main);

  meiosisTracer(createComponent, renderRoot, "#tracer");
})(window);
