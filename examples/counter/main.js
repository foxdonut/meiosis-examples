/*global meiosis, meiosisVanillaJs, $*/
var initialModel = { counter: 0 };

var view = function(model) {
  return "<div><span>Counter: " + model.counter + "</span></div>" +
    "<div><button id='inc'>+</button> <button id='decr'>-</button></div>";
};

var receive = function(model, proposal) {
  return { counter: model.counter + proposal.add };
};

var ready = function(propose) {
  var $root = $(document.getElementById("app"));

  $root.on("click", "button#inc", function(_evt) {
    propose({ add: 1 });
  });
  $root.on("click", "button#decr", function(_evt) {
    propose({ add: -1 });
  });
};

var Meiosis = meiosis.init(meiosisVanillaJs.renderer.intoId("app"));

var Main = Meiosis.createComponent({
  initialModel: initialModel,
  view: view,
  ready: ready,
  receive: receive
});

Meiosis.run(Main);
