/*global ReactDOM, flyd*/

// -- Utility code

var nestUpdate = function(update, prop) {
  return function(modelUpdate) {
    var fn = modelUpdate.fn;

    update(Object.assign(modelUpdate, {
      fn: function(model) {
        model[prop] = fn(model[prop]);
        return model;
      }
    }));
  };
};

var nest = function(create, prop, update) {
  var component = create(nestUpdate(update, prop));
  var result = Object.assign({}, component);
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
};

var generateId = function() {
  return "uid-" + new Date().getTime();
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
    var increase = function(amount) {
      return function(_event) {
        update({ id: model.id, fn: function(model) {
          model.value += amount;
          return model;
        } });
      };
    };
    var changeUnits = function(_event) {
      update({ id: model.id, fn: function(model) {
        var newUnits = model.units === "C" ? "F" : "C";
        model.value = convert(model.value, newUnits);
        model.units = newUnits;
        return model;
      } });
    };

    var model = function() {
      return Object.assign({ id: generateId(), value: 22, units: "C" }, init);
    };

    var view = function(model) {
      return (<div>
        <span>{label} Temperature: {model.value}&deg;{model.units}</span>
        <div>
          <button onClick={increase( 1)}>Increase</button>
          <button onClick={increase(-1)}>Decrease</button>
        </div>
        <div>
          <button onClick={changeUnits}>Change Units</button>
        </div>
      </div>);
    };
    return { model: model, view: view };
  };
};

var createTemperatureList = function(update) {
  var temperature = createTemperature()(function(modelUpdate) {
    var fn = modelUpdate.fn;
    update({ fn: function(model) {
      model.temperaturesById[modelUpdate.id] = fn(model.temperaturesById[modelUpdate.id]);
      return model;
    } });
  });

  var model = function() {
    return {
      temperatureIds: [],
      temperaturesById: {}
    };
  };

  var addTemperature = function(_event) {
    update({ fn: function(model) {
      var temperatureModel = temperature.model();
      var id = temperatureModel.id;

      model.temperatureIds.push(id);
      model.temperaturesById[id] = temperatureModel;

      return model;
    } });
  };

  var removeTemperature = function(id) {
    return function(_event) {
      update({ fn: function(model) {
        delete model.temperaturesById[id];
        model.temperatureIds.splice(model.temperatureIds.indexOf(id), 1);
        return model;
      } });
    };
  };

  var renderTemperature = function(model) {
    return function(id) {
      return (<div key={id}>
        {temperature.view(model.temperaturesById[id])}
        <button onClick={removeTemperature(id)}>Remove</button>
      </div>);
    };
  };

  var view = function(model) {
    return (<div>
      <button onClick={addTemperature}>Add</button>
      {model.temperatureIds.map(renderTemperature(model))}
    </div>);
  };
  return { model: model, view: view };
};

var createApp = function(update) {
  return nest(createTemperatureList, "temperatures", update);
};

// -- Meiosis pattern setup code

var update = flyd.stream();
var app = createApp(update);

var models = flyd.scan(function(model, modelUpdate) {
  return modelUpdate.fn(model);
}, app.model(), update);

var element = document.getElementById("app");

models.map(function(model) {
  ReactDOM.render(app.view(model), element);
});
