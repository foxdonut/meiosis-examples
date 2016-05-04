/*global meiosis, meiosisVanillaJs*/
var Meiosis = meiosis(meiosisVanillaJs.intoId("app"));

var createComponent = Meiosis.createComponent;

var Main = createComponent({
  initialModel: { counter: 0 },
  actions: function(sendUpdate) {
    return {
      inc: function() {
        sendUpdate({ add: 1 });
      },
      decr: function() {
        sendUpdate({ add: -1 });
      }
    };
  },
  receiveUpdate: function(model, update) {
    return { counter: model.counter + update.add };
  },
  view: function(model) {
    return "<div><span>Counter: " + model.counter + "</span></div>" +
      "<div><button id='inc'>+</button> <button id='decr'>-</button></div>";
  },
  ready: function(actions) {
    document.body.addEventListener("click", function(evt) {
      if (evt.target.tagName.toLowerCase() === "button") {
        actions[evt.target.id]();
      }
    });
  }
});

Meiosis.run(Main);
