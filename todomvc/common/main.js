/*global meiosis, meiosisTracer, window*/
(function(ref) {
  ref.main = function(meiosisRender) {
    var Meiosis = meiosis.init(meiosisRender.intoId("app"));

    var createComponent = Meiosis.createComponent;

    var Main = createComponent({
      actions: ref.actions,
      initialModel: ref.initialModel,
      postRender: ref.postRender,
      ready: ref.ready,
      receiveUpdate: ref.receiveUpdate,
      view: ref.view
    });

    ref.viewModel(createComponent);

    var renderRoot = Meiosis.run(Main);

    meiosisTracer(createComponent, renderRoot, "#tracer");
  };
})(window);
