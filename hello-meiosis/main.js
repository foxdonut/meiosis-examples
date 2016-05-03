/*global meiosis, meiosisVanillaJs*/
// FIXME
var Meiosis = meiosis(meiosisVanillaJs.intoId("app"));

var createComponent = Meiosis.createComponent;

var Main = createComponent({
  initialModel: {name: "Meiosis"},
  view: function(model) {
    return "<input id='user' value='" + model.name + "'>" +
      "<div>Hello, " + model.name + "</div>";
  },
  ready: function(actions) {
    document.body.addEventListener("change", function(evt) {
      if (evt.target.tagName.toLowerCase() === "input") {
        actions.sendUpdate({ name: evt.target.value });
      }
    });
  }
});

Meiosis.run(Main);
