import flyd from "flyd";
import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const nest = (update, path) => modelUpdate =>
  update(model => _.set(model, path, modelUpdate(_.get(model, path))));

const entry = (model, update) => {
  const actions = {
    editEntryValue: evt =>
      update(model => _.set(model, "value", evt.target.value))
  };

  return (
    <div>
      <span>Entry number:</span>
      <input type="text" size="2" value={model.value}
        onChange={actions.editEntryValue}/>
    </div>
  );
};
entry.model = () => ({
  value: ""
});

const date = (model, update) => {
  const actions = {
    editDateValue: evt =>
      update(model => _.set(model, "value", evt.target.value))
  };

  return (
    <div>
      <span>Date:</span>
      <input type="text" size="10" value={model.value}
        onChange={actions.editDateValue}/>
    </div>
  );
};
date.model = () => ({
  value: ""
});

const temperature = (model, update) => {
  const actions = {
    increase: value => evt => {
      evt.preventDefault();
      update(model => _.set(model, "value", model.value + value));
    },
    changeUnits: evt => {
      evt.preventDefault();
      update(model => {
        if (model.units === "C") {
          model.units = "F";
          model.value = Math.round( model.value * 9 / 5 + 32 );
        }
        else {
          model.units = "C";
          model.value = Math.round( (model.value - 32) / 9 * 5 );
        }
        return model;
      })
    }
  };

  return (
    <div>
      <span>{model.label} Temperature: {model.value}&deg;{model.units} </span>
      <button className="btn btn-sm btn-default"
        onClick={actions.increase(1)}>Increase</button>{" "}
      <button className="btn btn-sm btn-default"
        onClick={actions.increase(-1)}>Decrease</button>{" "}
      <button className="btn btn-sm btn-info"
        onClick={actions.changeUnits}>Change Units</button>
    </div>
  );
};
temperature.model = label => ({
  label,
  value: 20,
  units: "C"
});

const app = (model, update) => {
  const actions = {
    save: evt => {
      evt.preventDefault();
      update(model => {
        model.saved = " Entry #" + model.entry.value +
          " on " + model.date.value + ":" +
          " Temperature: Air: " + model.temperature.air.value + "\xB0" +
          model.temperature.air.units +
          " Water: " + model.temperature.water.value + "\xB0" +
          model.temperature.water.units;

        model.entry.value = "";
        model.date.value = "";

        return model;
      });
    }
  };

  return (
    <form>
      {entry(model.entry, nest(update, "entry"))}
      {date(model.date, nest(update, "date"))}
      {temperature(model.temperature.air, nest(update, "temperature.air"))}
      {temperature(model.temperature.water, nest(update, "temperature.water"))}
      <div>
        <button className="btn btn-primary"
          onClick={actions.save}>Save</button>
        <span>{model.saved}</span>
      </div>
    </form>
  );
};

const initialModel = {
  entry: entry.model(),
  date: date.model(),
  temperature: {
    air: temperature.model("Air"),
    water: temperature.model("Water")
  },
  saved: ""
};

const update = flyd.stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
models.map(model => ReactDOM.render(app(model, update), element));


trace({ update, dataStreams: [ models ]});
meiosisTracer({ selector: "#tracer" });
