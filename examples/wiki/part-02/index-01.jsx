import flyd from "flyd";
import React from "react";
import ReactDOM from "react-dom";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const nest = (update, path) => modelUpdate =>
  update(model => {
    model[path] = modelUpdate(model[path]);
    return model;
  });

const entry = {
  model: () => ({
    value: ""
  }),

  view: (model, update) => {
    const updates = {
      editEntryValue: value => update(model => {
        model.value = value;
        return model;
      })
    };

    const actions = {
      editEntryValue: evt => updates.editEntryValue(evt.target.value)
    };

    return (
      <div>
        <span>Entry number:</span>
        <input type="text" size="2" value={model.value} onChange={actions.editEntryValue}/>
      </div>
    );
  }
};

const date = {
  model: () => ({
    value: ""
  }),

  view: (model, update) => {
    const updates = {
      editDateValue: value => update(model => {
        model.value = value;
        return model;
      })
    };

    const actions = {
      editDateValue: evt => updates.editDateValue(evt.target.value)
    };

    return (
      <div>
        <span>Date:</span>
        <input type="text" size="10" value={model.value} onChange={actions.editDateValue}/>
      </div>
    );
  }
};

const temperature = {
  model: () => ({
    value: 20,
    units: "C"
  }),

  view: (model, update) => {
    const updates = {
      increase: value => update(model => {
        model.value = model.value + value;
        return model;
      }),
      changeUnits: () => update(model => {
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

    return (
      <div>
        <span>Temperature: {model.value}&deg;{model.units} </span>
        <button className="btn btn-sm btn-default" onClick={actions.increase(1)}>Increase</button>{" "}
        <button className="btn btn-sm btn-default" onClick={actions.increase(-1)}>Decrease</button>{" "}
        <button className="btn btn-sm btn-info" onClick={actions.changeUnits}>Change Units</button>
      </div>
    );
  }
};

const app = {
  model: () => ({
    entry: entry.model(),
    date: date.model(),
    temperature: temperature.model(),
    saved: ""
  }),

  view: (model, update) => {
    const updates = {
      save: () => update(model => {
        model.saved = " Entry #" + model.entry.value +
          " on " + model.date.value + ":" +
          " Temperature: " + model.temperature.value + "\xB0" +
          model.temperature.units;

        model.entry.value = "";
        model.date.value = "";

        return model;
      })
    };

    const actions = {
      save: evt => {
        evt.preventDefault();
        updates.save();
      }
    };

    return (
      <form>
        {entry.view(model.entry, nest(update, "entry"))}
        {date.view(model.date, nest(update, "date"))}
        {temperature.view(model.temperature, nest(update, "temperature"))}
        <div>
          <button className="btn btn-primary" onClick={actions.save}>Save</button>
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
models.map(model => ReactDOM.render(app.view(model, update), element));


trace({ update, dataStreams: [ models ]});
meiosisTracer({ selector: "#tracer" });
