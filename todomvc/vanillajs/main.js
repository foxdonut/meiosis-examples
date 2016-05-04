/*global meiosis, meiosisVanillaJs*/
(function() {
  var Meiosis = meiosis(meiosisVanillaJs.intoSelector("body"));

  var createComponent = Meiosis.createComponent;

  var Main = createComponent({
    view: window.view
  });

  Meiosis.run(Main);
})();
