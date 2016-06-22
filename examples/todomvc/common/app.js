/*global meiosis, meiosisTracer, window*/
(function(ref) {
  ref.app = function(meiosisRender) {
    var Meiosis = meiosis.init(meiosisRender.renderer.intoId("app"));

    var createComponent = Meiosis.createComponent;

    var App = createComponent({
      initialModel: ref.initialModel,
      view: ref.root.display(createComponent),
      receiveUpdate: ref.receiveUpdate,
      ready: ref.ready // only jquery and vanillajs need ready
    });

    var renderRoot = Meiosis.run(App);

    meiosisTracer(createComponent, renderRoot, "#tracer");
  };
})(window);
