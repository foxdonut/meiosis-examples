/*global m, deepmerge*/

// -- Utility code

var nestUpdate = function(update, prop) {
  // This wraps the update stream function
  return function(obj) {
    update({ [prop]: obj });
  };
};

// create :: update -> { view };
var Component = function(create) {
  function nest(prop) {
    return Component(function(update) {
      var component = create(nestUpdate(update, prop));
      return {
        view: function(model) {
          return component.view(model[prop]);
        }
      };
    });
  }
  return { nest: nest, create: create };
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

var createTemperature = function(label) {
  return function(update) {
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
    return { view: view };
  };
};

var createTemperaturePair = function(update) {
  var air = Component(createTemperature("Air")).nest("air").create(update);
  var water = Component(createTemperature("Water")).nest("water").create(update);

  var view = function(model) {
    return [
      air.view(model),
      water.view(model)
    ];
  };
  return { view: view };
};

var createApp = function(update) {
  var pair = Component(createTemperaturePair).nest("temperatures").create(update);

  return {
    view: model => pair.view(model)
  };
};

// -- Meiosis pattern setup code

var update = m.stream();
var app = Component(createApp).create(update);

var models = m.stream.scan(deepmerge,
  { temperatures: { air: { value: 22, units: "C" },
    water: { value: 84, units: "F" }
  } }, update);

var element = document.body;

models.map(function(model) {
  m.render(element, app.view(model));
});
