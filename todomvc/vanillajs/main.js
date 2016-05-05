/*global meiosis, meiosisVanillaJs, window*/
(function() {
  var Meiosis = meiosis(meiosisVanillaJs.intoSelector("body"));

  var createComponent = Meiosis.createComponent;

  var Main = createComponent({
    initialModel: window.initialModel,
    view: window.view
  });

  Meiosis.run(Main);
})();
