/*global window, meiosis, meiosisVue */
var initialModel = { counter: 0 };

var ready = window.vueView(initialModel);

var receive = function(model, proposal) {
  model.counter += proposal.add;
  return model;
};

var render = meiosisVue.renderer(initialModel, "model");

var Meiosis = meiosis.init();

var Main = Meiosis.createComponent({
  initialModel: initialModel,
  receive: receive,
  ready: ready
});

Meiosis.run(render, Main);
