/*global m*/
var createView = function(update) {
  var increase = function(amount) {
    return function(_event) {
      update(amount);
    };
  };
  var view = function(model) {
    return [
      m("div", "Counter: " + model),
      m("button", { onclick: increase( 1) }, "+1"),
      m("button", { onclick: increase(-1) }, "-1")
    ];
  };
  return view;
};

var update = m.stream();
var view = createView(update);

var model = 0;

var models = m.stream.scan(function(model, value) {
  return model + value;
}, model, update);

var element = document.getElementById("app");

models.map(function(model) {
  m.render(element, view(model));
});
