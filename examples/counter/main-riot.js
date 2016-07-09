/*global window, meiosis, meiosisRiot*/
var initialModel = { counter: 0 };

var view = window.riotView;

var receive = function(model, proposal) {
  return { counter: model.counter + proposal.add };
};

meiosisRiot.renderer("counter").renderIntoId("riotApp").then(function(render) {
  var Meiosis = meiosis.init({render: render});

  var Main = Meiosis.createComponent({
    initialModel: initialModel,
    view: view,
    receive: receive
  });

  Meiosis.run(Main);
});
