/*global m, deepmerge*/

// -- Utility code

var nest = function(update, prop) {
  return function(obj) {
    var result = {};
    result[prop] = obj;
    update(result);
  };
};

// -- Application code

var convert = function(value, to) {
  if (to === "C") {
    return Math.round( (value - 32) / 9 * 5 );
  }
  else {
    return Math.round( value * 9 / 5 + 32 );
  }
};

var createTemperature = function(update, label) {
  var increase = function(model, amount) {
    return function(_event) {
      update({ value: model.value + amount });
    };
  };
  var changeUnits = function(model) {
    return function(_event) {
      var newUnits = model.units === "C" ? "F" : "C";
      var newValue = convert(model.value, newUnits);
      update({ value: newValue, units: newUnits });
    };
  };

  var view = function(model) {
    return [
      label, " Temperature: ", model.value, m.trust("&deg;"), model.units,
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

var createTemperaturePair = function(update) {
  var air = createTemperature(nest(update, "air"), "Air");
  var water = createTemperature(nest(update, "water"), "Water");

  return function(model) {
    return [
      air(model.air),
      water(model.water)
    ];
  };
};

var createView = function(update) {
  var pair = createTemperaturePair(nest(update, "temperatures"));

  return function(model) {
    return pair(model.temperatures);
  };
};

// -- Meiosis pattern setup code

var update = m.stream();
var view = createView(update);

var models = m.stream.scan(deepmerge,
  { temperatures:
    { air: { value: 22, units: "C" },
      water: { value: 84, units: "F" }
    }
  }, update);

var element = document.getElementById("app");

models.map(function(model) {
  m.render(element, view(model));
});
