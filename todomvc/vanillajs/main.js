/*global meiosis, meiosisVanillaJs, window*/
(function(ref) {
  var Meiosis = meiosis(meiosisVanillaJs.intoSelector("body"));

  var createComponent = Meiosis.createComponent;

  var Main = createComponent({
    initialModel: ref.initialModel,
    view: ref.view,
    actions: ref.actions,
    ready: ref.ready,
    receiveUpdate: ref.receiveUpdate,
    postRender: ref.postRender
  });

  ref.viewModel(createComponent);

  Meiosis.run(Main);
})(window);
