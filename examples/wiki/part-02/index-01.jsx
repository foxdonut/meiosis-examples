import flyd from "flyd";
import React from "react";
import ReactDOM from "react-dom";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const nest = (update, path) => modelChange =>
  update(model => {
    model[path] = modelChange(model[path]);
    return model;
  });

const entry = (model, update) => {
  const actions = {
    editEntryValue: evt => update(model => {
      model.value = evt.target.value;
      return model;
    })
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
    editDateValue: evt => update(model => {
      model.value = evt.target.value;
      return model;
    })
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
      update(model => {
        model.value = model.value + value;
        return model;
      });
    }
  };

  return (
    <div>
      <span>Temperature: {model.value}&deg;{model.units} </span>
      <button className="btn btn-default"
        onClick={actions.increase(1)}>Increase</button>{" "}
      <button className="btn btn-default"
        onClick={actions.increase(-1)}>Decrease</button>
    </div>
  );
};
temperature.model = () => ({
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
          " Temperature: " + model.temperature.value + "\xB0" +
          model.temperature.units;

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
      {temperature(model.temperature, nest(update, "temperature"))}
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
  temperature: temperature.model(),
  saved: ""
};

const update = flyd.stream();
const applyUpdate = (model, modelChange) => modelChange(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
models.map(model => ReactDOM.render(app(model, update), element));


trace({ update, dataStreams: [ models ]});
meiosisTracer({ selector: "#tracer" });
