import flyd from "flyd";
import React from "react";
import ReactDOM from "react-dom";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const nest = (update, path) => modelChange =>
  update(model => _.set(model, path, modelChange(_.get(model, path))));

const entry = {
  model: () => ({
    value: ""
  }),
  create: update => {
    const actions = {
      editEntryValue: evt =>
        update(model => _.set(model, "value", evt.target.value))
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
    const actions = {
      editDateValue: evt =>
        update(model => _.set(model, "value", evt.target.value))
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
    const actions = {
      increase: value => evt => {
        evt.preventDefault();
        update(model => _.set(model, "value", model.value + value));
      }
    };

    return model => (
      <div>
        <span>{model.label} Temperature: {model.value}&deg;{model.units} </span>
        <button className="btn btn-default"
          onClick={actions.increase(1)}>Increase</button>{" "}
        <button className="btn btn-default"
          onClick={actions.increase(-1)}>Decrease</button>
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

    const components = {
      entry: entry.create(nest(update, "entry")),
      date: date.create(nest(update, "date")),
      temperature: {
        air: temperature.create(nest(update, "temperature.air")),
        water: temperature.create(nest(update, "temperature.water"))
      }
    }

    return model => (
      <form>
        {components.entry(model.entry)}
        {components.date(model.date)}
        {components.temperature.air(model.temperature.air)}
        {components.temperature.water(model.temperature.water)}
        <div>
          <button className="btn btn-primary"
            onClick={actions.save}>Save</button>
          <span>{model.saved}</span>
        </div>
      </form>
    );
  }
};

const initialModel = app.model();

const update = flyd.stream();
const applyUpdate = (model, modelChange) => modelChange(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const view = app.create(update);
const element = document.getElementById("app");
models.map(model => ReactDOM.render(view(model), element));


trace({ update, dataStreams: [ models ]});
meiosisTracer({ selector: "#tracer" });
