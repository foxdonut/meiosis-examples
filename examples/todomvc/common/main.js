/*global meiosis, meiosisTracer, window*/
(function(ref) {
  ref.main = function(meiosisRender) {
    var Meiosis = meiosis.init(meiosisRender.renderer.intoId("app"));

    var createComponent = Meiosis.createComponent;

    var ready = ref.ready ? function(actions) {
      ref.commonReady(actions);
      ref.ready(actions);
    } : ref.commonReady;

    var Main = createComponent({
      actions: ref.actions,
      initialModel: ref.initialModel,
      viewModel: ref.viewModel,
      view: ref.display(ref.view),
      postRender: ref.postRender, // only jquery and vanillajs need postRender
      ready: ready,
      receiveUpdate: ref.receiveUpdate,
      nextUpdate: ref.nextUpdate
    });

    var renderRoot = Meiosis.run(Main);

    meiosisTracer(createComponent, renderRoot, "#tracer");
  };
})(window);
