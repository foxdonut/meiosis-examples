/*global window, meiosis, Vue*/
var initialModel = { counter: 0 };

var ready = window.vueView(initialModel);

var receive = function(model, proposal) {
  model.counter += proposal.add;
  return model;
};

var render = function(element, view) { };

var Meiosis = meiosis.init({render: render});

var Main = Meiosis.createComponent({
  initialModel: initialModel,
  receive: receive,
  ready: ready
});

Meiosis.run(Main);
