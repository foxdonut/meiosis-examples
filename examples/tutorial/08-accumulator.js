/*global m*/
var createView = function(update) {
  var increase = function(model, amount) {
    return function(_event) {
      update({ value: model.value + amount });
    };
  };
  var changeUnits = function(model) {
    return function(_event) {
      update({ units: model.units === "C" ? "F" : "C" });
    };
  };

  var view = function(model) {
    return [
      m("span", "Temperature: "),
      m("span", model.value),
      m.trust("&deg;"),
      m("span", model.units),
      m("div",
        m("button", { onclick: increase(model, 1) }, "Increase"),
        m("button", { onclick: increase(model,-1) }, "Decrease")
      ),
      m("div",
        m("button", { onclick: changeUnits(model) }, "Change Units")
      )
    ];
  };
  return view;
};

var update = m.stream();
var view = createView(update);

var model = {
  value: 20,
  units: "C"
};

var models = m.stream.scan(function(model, value) {
  return Object.assign(model, value);
}, model, update);

var element = document.getElementById("app");

models.map(function(model) {
  m.render(element, view(model));
});
