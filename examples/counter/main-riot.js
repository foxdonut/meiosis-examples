/*global window, meiosis, meiosisRiot*/
(function() {
  var initialModel = { counter: 0 };

  var receive = function(model, proposal) {
    return { counter: model.counter + proposal.add };
  };

  meiosisRiot.renderer("app").intoId(document, "riotApp").then(function(render) {
    var Meiosis = meiosis.init();

    var Main = Meiosis.createComponent({
      initialModel: initialModel,
      receive: receive
    });

    Meiosis.run(render, Main);
  });
})();
