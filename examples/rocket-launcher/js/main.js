/*global meiosis, meiosisVanillaJs, meiosisTracer, window*/
(function(ref) {
  var Meiosis = meiosis.init(meiosisVanillaJs.renderer.intoId("app"));

  var createComponent = Meiosis.createComponent;

  var Main = createComponent({
    initialModel: ref.initialModel,
    view: ref.view,
    actions: ref.actions,
    ready: ref.ready,
    receiveUpdate: ref.receiveUpdate,
    nextUpdate: ref.nextUpdate
  });

  var renderRoot = Meiosis.run(Main);

  meiosisTracer(createComponent, renderRoot, "#tracer");
})(window);
