/*global meiosis, meiosisVanillaJs*/
var renderer = meiosisVanillaJs.renderer;
var Meiosis = meiosis.init(renderer.intoId("app"));

var createComponent = Meiosis.createComponent;

var Main = createComponent({
  initialModel: { counter: 0 },
  view: function(model) {
    return "<div><span>Counter: " + model.counter + "</span></div>" +
      "<div><button id='inc'>+</button> <button id='decr'>-</button></div>";
  },
  ready: function(actions) {
    renderer.delegate(document.body, "button#inc", "click", function() {
      actions.sendUpdate({ add: 1 });
    });
    renderer.delegate(document.body, "button#decr", "click", function() {
      actions.sendUpdate({ add: -1 });
    });
  },
  receiveUpdate: function(model, update) {
    return { counter: model.counter + update.add };
  }
});

Meiosis.run(Main);
