/*global window, meiosis, meiosisReact*/
var initialModel = { counter: 0 };

var view = window.reactView;

var receiveUpdate = function(model, update) {
  return { counter: model.counter + update.add };
};

var Meiosis = meiosis.init(meiosisReact.renderer.intoId("reactApp"));

var Main = Meiosis.createComponent({
  initialModel: initialModel,
  view: view,
  receiveUpdate: receiveUpdate
});

Meiosis.run(Main);
