/*global meiosis, meiosisReact, meiosisTracer, window*/
(function(ref) {
  var Meiosis = meiosis(meiosisReact.intoId("app"));

  var createComponent = Meiosis.createComponent;

  var Main = createComponent({
    initialModel: ref.initialModel,
    view: ref.view,
    actions: ref.actions,
    receiveUpdate: ref.receiveUpdate
  });

  ref.viewModel(createComponent);

  var renderRoot = Meiosis.run(Main);

  meiosisTracer(createComponent, renderRoot, "#tracer");
})(window);
