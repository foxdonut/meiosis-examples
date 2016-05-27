/*global meiosis, meiosisVanillaJs, $*/
var initialModel = { counter: 0 };

var view = function(model) {
  return "<div><span>Counter: " + model.counter + "</span></div>" +
    "<div><button id='inc'>+</button> <button id='decr'>-</button></div>";
};

var receiveUpdate = function(model, update) {
  return { counter: model.counter + update.add };
};

var ready = function(actions) {
  var $root = $(document.getElementById("app"));

  $root.on("click", "button#inc", function(_evt) {
    actions.sendUpdate({ add: 1 });
  });
  $root.on("click", "button#decr", function(_evt) {
    actions.sendUpdate({ add: -1 });
  });
};

var renderer = meiosisVanillaJs.renderer;

var Meiosis = meiosis.init(renderer.intoId("app"));

var Main = Meiosis.createComponent({
  initialModel: initialModel,
  view: view,
  ready: ready,
  receiveUpdate: receiveUpdate
});

Meiosis.run(Main);
