/*global ReactDOM, flyd*/

// -- Utility code

var nestUpdate = function(update, prop) {
  return function(func) {
    update(function(model) {
      model[prop] = func(model[prop]);
      return model;
    });
  };
};

var Component = function(create) {
  function nest(prop) {
    return Component(function(update) {
      var component = create(nestUpdate(update, prop));
      var result = {};
      if (component.model) {
        result.model = function() {
          var initialModel = {};
          initialModel[prop] = component.model();
          return initialModel;
        };
      }
      if (component.view) {
        result.view = function(model) {
          return component.view(model[prop]);
        };
      }
      return result;
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

var createTemperature = function(label, init) {
  return function(update) {
    var increase = function(model, amount) {
      return function(_event) {
        update(function(model) {
          model.value += amount;
          return model;
        });
      };
    };
    var changeUnits = function(model) {
      return function(_event) {
        var newUnits = model.units === "C" ? "F" : "C";
        var newValue = convert(model.value, newUnits);
        update(function(model) {
          model.value = newValue;
          model.units = newUnits;
          return model;
        });
      };
    };

    var model = function() {
      return Object.assign({ value: 22, units: "C" }, init);
    };

    var view = function(model) {
      return (<div>
        <span>{label} Temperature: {model.value}&deg;{model.units}</span>
        <div>
          <button onClick={increase(model, 1)}>Increase</button>
          <button onClick={increase(model,-1)}>Decrease</button>
        </div>
        <div>
          <button onClick={changeUnits(model)}>Change Units</button>
        </div>
      </div>);
    };
    return { model: model, view: view };
  };
};

var createTemperaturePair = function(update) {
  var air = Component(createTemperature("Air")).nest("air").create(update);
  var water = Component(createTemperature("Water", { value: 84, units: "F" }))
    .nest("water").create(update);

  var model = function() {
    return Object.assign(air.model(), water.model());
  };

  var view = function(model) {
    return (<div>
      {air.view(model)}
      {water.view(model)}
    </div>);
  };
  return { model: model, view: view };
};

var createApp = function(update) {
  return Component(createTemperaturePair).nest("temperatures").create(update);
};

// -- Meiosis pattern setup code

var update = flyd.stream();
var app = Component(createApp).create(update);

var models = flyd.scan(function(model, func) {
  return func(model);
}, app.model(), update);

var element = document.getElementById("app");

models.map(function(model) {
  ReactDOM.render(app.view(model), element);
});
