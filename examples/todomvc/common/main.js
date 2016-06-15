/*global meiosis, meiosisTracer, window*/
(function(ref) {
  ref.main = function(meiosisRender) {
    var Meiosis = meiosis.init(meiosisRender.renderer.intoId("app"));

    var createComponent = Meiosis.createComponent;

    var header = createComponent(ref.header.component());
    var todoItem = createComponent(ref.todoItem.component());
    var footer = createComponent(ref.footer.component());

    var Main = createComponent({
      initialModel: ref.initialModel,
      view: ref.display(ref.view, header, todoItem, footer),
      postRender: ref.postRender, // only jquery and vanillajs need postRender
      ready: ref.ready,
      receiveUpdate: ref.receiveUpdate
    });

    var renderRoot = Meiosis.run(Main);

    meiosisTracer(createComponent, renderRoot, "#tracer");
  };
})(window);
