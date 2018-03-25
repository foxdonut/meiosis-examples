<<<<<<< HEAD
/*global m*/
=======
/*global m, deepmerge*/
>>>>>>> d9972b3b4d8f236928676eaeab0b2985fe6b854b

// -- Utility code

var Component = {
  map: function(component, prop) {
    var component_ = {};
    for (var i in component) {
      component_[i] = component[i];
    }
    if (component.view) {
      component_.view = function(model) {
        return component.view(model[prop]);
      };
    }
    if (component.update) {
      component_.update = function(obj) {
        component.update({ [prop]: obj });
      };
    }
    return component_;
  }
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

var createTemperature = function(update) {
  var component = {
    update: update
  };

  var increase = function(model, amount) {
    return function(_event) {
      component.update({ value: model.value + amount });
    };
  };
  var changeUnits = function(model) {
    return function(_event) {
      var newUnits = model.units === "C" ? "F" : "C";
      var newValue = convert(model.value, newUnits);
      component.update({ value: newValue, units: newUnits });
    };
  };

  component.view = function(model) {
    return [
      " Temperature: ", model.value, m.trust("&deg;"), model.units,
      m("div",
        m("button", { onclick: increase(model, 1) }, "Increase"),
        m("button", { onclick: increase(model,-1) }, "Decrease")
      ),
      m("div",
        m("button", { onclick: changeUnits(model) }, "Change Units")
      )
    ];
  };
  return component;
};

var createTemperaturePair = function(update) {
  var component = {
    update: update
  };
  var air = Component.map(createTemperature(update, "Air"), "air");
  var water = Component.map(createTemperature(update, "Water"), "water");
<<<<<<< HEAD
  
=======

>>>>>>> d9972b3b4d8f236928676eaeab0b2985fe6b854b
  component.view = function(model) {
    return [
      air.view(model),
      water.view(model)
    ];
  };
  return component;
};

var createApp = function(update) {
  var pair = Component.map(createTemperaturePair(update), "temperatures");
<<<<<<< HEAD
  
=======

>>>>>>> d9972b3b4d8f236928676eaeab0b2985fe6b854b
  return {
    view: function(model) {
      return pair.view(model);
    }
  };
};

// -- Meiosis pattern setup code

var update = m.stream();
var app = createApp(update);

var models = m.stream.scan(deepmerge,
  { temperatures: { air: { value: 22, units: "C" },
    water: { value: 84, units: "F" }
  } }, update);

var element = document.getElementById("app");

models.map(function(model) {
  m.render(element, app.view(model));
});

