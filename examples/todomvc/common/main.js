/*global meiosis, meiosisTracer, window*/
(function(ref) {
  ref.main = function(meiosisRender) {
    var Meiosis = meiosis.init(meiosisRender.renderer.intoId("app"));

    var createComponent = Meiosis.createComponent;

    var Main = createComponent({
      initialModel: ref.initialModel,
      view: ref.root.display(createComponent),
      receiveUpdate: ref.receiveUpdate,
      ready: ref.ready // only jquery and vanillajs need ready
    });

    var renderRoot = Meiosis.run(Main);

    meiosisTracer(createComponent, renderRoot, "#tracer");
  };
})(window);
