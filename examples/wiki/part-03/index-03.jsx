import flyd from "flyd";
import React from "react";
import ReactDOM from "react-dom";
import R from "ramda";
import * as L from "partial.lenses";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const nest = (update, path) => R.compose(update, L.modify(path));

const entry = {
  model: () => ({
    value: ""
  }),

  create: update => {
    const updates = {
      editEntryValue: value => update(L.set("value", value))
    };

    const actions = {
      editEntryValue: evt => updates.editEntryValue(evt.target.value)
    };

    return model => (
      <div>
        <span>Entry number:</span>
        <input type="text" size="2" value={model.value}
          onChange={actions.editEntryValue}/>
      </div>
    );
  }
};

const date = {
  model: () => ({
    value: ""
  }),

  create: update => {
    const updates = {
      editDateValue: value => update(L.set("value", value))
    };

    const actions = {
      editDateValue: evt => updates.editDateValue(evt.target.value)
    };

    return model => (
      <div>
        <span>Date:</span>
        <input type="text" size="10" value={model.value}
          onChange={actions.editDateValue}/>
      </div>
    );
  }
};

const temperature = {
  model: label => ({
    label,
    value: 20,
    units: "C"
  }),

  create: update => {
    const toFahrenheit = value => Math.round( value * 9 / 5 + 32 );
    const toCelsius = value => Math.round( (value - 32) / 9 * 5 );

    const updates = {
      increase: value => update(L.modify("value", R.add(value))),

      changeUnits: () => update(R.ifElse(
        R.propEq("units", "C"),
        R.compose(L.set("units", "F"), L.modify("value", toFahrenheit)),
        R.compose(L.set("units", "C"), L.modify("value", toCelsius))
      ))
    };

    const actions = {
      increase: value => evt => {
        evt.preventDefault();
        updates.increase(value);
      },
      changeUnits: evt => {
        evt.preventDefault();
        updates.changeUnits();
      }
    };

    return model => (
      <div className="row">
        <div className="col-md-3">
          <span>
            {model.label} Temperature:
            {model.value}&deg;{model.units}
          </span>
        </div>
        <div className="col-md-6">
          <button className="btn btn-sm btn-default"
            onClick={actions.increase(1)}>Increase</button>{" "}
          <button className="btn btn-sm btn-default"
            onClick={actions.increase(-1)}>Decrease</button>{" "}
          <button className="btn btn-sm btn-info"
            onClick={actions.changeUnits}>Change Units</button>
        </div>
      </div>
    );
  }
};

const app = {
  model: () => ({
    entry: entry.model(),
    date: date.model(),
    temperature: {
      air: temperature.model("Air"),
      water: temperature.model("Water")
    },
    saved: ""
  }),

  create: update => {
    const displayTemperature = temperature =>
      temperature.label + ": " +
      temperature.value + "\xB0" + temperature.units;

    const message = model => L.set("saved", "Entry #" + model.entry.value +
      " on " + model.date.value + ":" +
      " Temperatures: " +
      displayTemperature(model.temperature.air) + " " +
      displayTemperature(model.temperature.water), model);

    const updates = {
      save: () => update(R.pipe(
        message,
        L.set(["entry", "value"], ""),
        L.set(["date", "value"], "")
      ))
    };

    const actions = {
      save: evt => {
        evt.preventDefault();
        updates.save();
      }
    };

    const components = {
      entry: entry.create(nest(update, ["entry"])),
      date: date.create(nest(update, ["date"])),
      temperature: {
        air: temperature.create(nest(update, ["temperature", "air"])),
        water: temperature.create(nest(update, ["temperature", "water"]))
      }
    };

    return model => (
      <form>
        {components.entry(model.entry)}
        {components.date(model.date)}
        {components.temperature.air(
          model.temperature.air)}
        {components.temperature.water(
          model.temperature.water)}
        <div>
          <button className="btn btn-primary"
            onClick={actions.save}>Save</button>{" "}
          <span>{model.saved}</span>
        </div>
      </form>
    );
  }
};

const initialModel = app.model();
const update = flyd.stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
const view = app.create(update);
models.map(model => ReactDOM.render(view(model), element));


trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
