/*global window, meiosis, meiosisReact*/
var initialModel = { counter: 0 };

var view = window.reactView;

var receive = function(model, proposal) {
  return { counter: model.counter + proposal.add };
};

var Meiosis = meiosis.init(meiosisReact.renderer.intoId("reactApp"));

var Main = Meiosis.createComponent({
  initialModel: initialModel,
  view: view,
  receive: receive
});

Meiosis.run(Main);
