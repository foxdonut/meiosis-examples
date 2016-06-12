/*global meiosis, meiosisTracer, window*/
(function(ref) {
  ref.main = function(meiosisRender) {
    var Meiosis = meiosis.init(meiosisRender.renderer.intoId("app"));

    var createComponent = Meiosis.createComponent;

    var ready = ref.ready ? function(actions) {
      ref.commonReady(actions);
      ref.ready(actions);
    } : ref.commonReady;

    var todoItem = ref.todoItemDisplay(ref.todoItemState, ref.todoItemView);

    var Main = createComponent({
      initialModel: ref.initialModel,
      view: ref.display(ref.view, todoItem),
      postRender: ref.postRender, // only jquery and vanillajs need postRender
      ready: ready,
      actions: ref.actions,
      receiveUpdate: ref.receiveUpdate,
      nextUpdate: ref.nextUpdate
    });

    var renderRoot = Meiosis.run(Main);

    meiosisTracer(createComponent, renderRoot, "#tracer");
  };
})(window);
