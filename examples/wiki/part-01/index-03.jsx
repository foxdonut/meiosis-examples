import flyd from "flyd";
import React from "react";
import ReactDOM from "react-dom";

const initialModel = {
  entry: {
    value: ""
  },
  date: {
    value: ""
  },
  temperature: {
    value: 20,
    units: "C"
  },
  saved: ""
};

const createActions = update => ({
  editEntryValue: evt => update(model => {
    model.entry.value = evt.target.value;
    return model;
  }),
  editDateValue: evt => update(model => {
    model.date.value = evt.target.value;
    return model;
  }),
  increase: value => evt => {
    evt.preventDefault();
    update(model => {
      model.temperature.value = model.temperature.value + value;
      return model;
    });
  },
  save: evt => {
    evt.preventDefault();
    update(model => {
      model.saved = " Entry #" + model.entry.value +
        " on " + model.date.value + ":" +
        " Temperature: " + model.temperature.value + "\xB0" + model.temperature.units;

      model.entry.value = "";
      model.date.value = "";

      return model;
    });
  }
});

const entry = (model, actions) => (
  <div>
    <span>Entry number:</span>
    <input type="text" size="2" value={model.entry.value} onChange={actions.editEntryValue}/>
  </div>
);

const date = (model, actions) => (
  <div>
    <span>Date:</span>
    <input type="text" size="10" value={model.date.value} onChange={actions.editDateValue}/>
  </div>
);

const temperature = (model, actions) => (
  <div>
    <span>Temperature: {model.temperature.value}&deg;C </span>
    <button className="btn btn-default" onClick={actions.increase(1)}>Increase</button>{" "}
    <button className="btn btn-default" onClick={actions.increase(-1)}>Decrease</button>
  </div>
);

const app = (model, actions) => (
  <form>
    {entry(model, actions)}
    {date(model, actions)}
    {temperature(model, actions)}
    <div>
      <button className="btn btn-primary" onClick={actions.save}>Save</button>
      <span>{model.saved}</span>
    </div>
  </form>
);

const update = flyd.stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const actions = createActions(update);
const element = document.getElementById("app");
models.map(model => ReactDOM.render(app(model, actions), element));
