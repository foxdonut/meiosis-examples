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
  <div className="form-group">
    <label className="col-md-2 control-label">Entry number:</label>
    <div className="col-sm-1">
      <input className="form-control" type="text" size="2" value={model.entry.value}
        onChange={actions.editEntryValue}/>
    </div>
  </div>
);

const date = (model, actions) => (
  <div className="form-group">
    <label className="col-md-2 control-label">Date:</label>
    <div className="col-sm-2">
      <input className="form-control" type="text" size="10" value={model.date.value}
        onChange={actions.editDateValue}/>
    </div>
  </div>
);

const temperature = (model, actions) => (
  <div className="form-group">
    <label className="col-md-2 control-label">Temperature: {model.temperature.value}&deg;C </label>
    <div className="col-md-4">
      <button className="btn btn-default"
        onClick={actions.increase(1)}>Increase</button>{" "}
      <button className="btn btn-default"
        onClick={actions.increase(-1)}>Decrease</button>
    </div>
  </div>
);

const app = (model, actions) => (
  <form className="form-horizontal">
    {entry(model, actions)}
    {date(model, actions)}
    {temperature(model, actions)}
    <div className="form-group">
      <div className="col-md-6 col-md-offset-2">
        <button className="btn btn-primary"
          onClick={actions.save}>Save</button>{" "}
        <span>{model.saved}</span>
      </div>
    </div>
  </form>
);

const update = flyd.stream();
const applyUpdate = (model, modelChange) => modelChange(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const actions = createActions(update);
const element = document.getElementById("app");
models.map(model => ReactDOM.render(app(model, actions), element));
