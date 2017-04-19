import flyd from "flyd";
import React from "react";
import ReactDOM from "react-dom";
import Immutable from "immutable";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const nest = (update, path) => modelUpdate =>
  update(model => model.updateIn(path, modelUpdate));

const entry = {
  model: () => ({
    value: ""
  }),

  create: update => {
    const updates = {
      editEntryValue: value => update(model => model.set("value", value))
    };

    const actions = {
      editEntryValue: evt => updates.editEntryValue(evt.target.value)
    };

    return model => (
      <div>
        <span>Entry number:</span>
        <input type="text" size="2" value={model.get("value")} onChange={actions.editEntryValue}/>
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
      editDateValue: value => update(model => model.set("value", value))
    };

    const actions = {
      editDateValue: evt => updates.editDateValue(evt.target.value)
    };

    return model => (
      <div>
        <span>Date:</span>
        <input type="text" size="10" value={model.get("value")} onChange={actions.editDateValue}/>
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
    const updates = {
      increase: value => update(model =>
        model.update("value", v => v + value)),

      changeUnits: () => update(model => {
        if (model.get("units") === "C") {
          return model.set("units", "F").
            set("value", Math.round( model.get("value") * 9 / 5 + 32 ));
        }
        else {
          return model.set("units", "C").
            set("value", Math.round( (model.get("value") - 32) / 9 * 5 ));
        }
      })
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
            {model.get("label")} Temperature:
            {model.get("value")}&deg;{model.get("units")}
          </span>
        </div>
        <div className="col-md-6">
          <button className="btn btn-sm btn-default" onClick={actions.increase(1)}>Increase</button>{" "}
          <button className="btn btn-sm btn-default" onClick={actions.increase(-1)}>Decrease</button>{" "}
          <button className="btn btn-sm btn-info" onClick={actions.changeUnits}>Change Units</button>
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
      temperature.get("label") + ": " +
      temperature.get("value") + "\xB0" + temperature.get("units");

    const updates = {
      save: () => update(model => {
        return model.
          set("saved", "Entry #" + model.getIn(["entry", "value"]) +
            " on " + model.getIn(["date", "value"]) + ":" +
            " Temperatures: " +
            displayTemperature(model.getIn(["temperature", "air"])) + " " +
            displayTemperature(model.getIn(["temperature", "water"]))).
          setIn(["entry", "value"], "").
          setIn(["date", "value"], "");
      })
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
        {components.entry(model.get("entry"))}
        {components.date(model.get("date"))}
        {components.temperature.air(model.getIn(["temperature", "air"]))}
        {components.temperature.water(model.getIn(["temperature", "water"]))}
        <div>
          <button className="btn btn-primary" onClick={actions.save}>Save</button>{" "}
          <span>{model.get("saved")}</span>
        </div>
      </form>
    );
  }
};

const initialModel = Immutable.fromJS(app.model());
const update = flyd.stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
const view = app.create(update);
models.map(model => ReactDOM.render(view(model), element));


trace({ update, dataStreams: [ models ], fromJS: Immutable.fromJS, toJS: Immutable.toJS });
meiosisTracer({ selector: "#tracer" });
