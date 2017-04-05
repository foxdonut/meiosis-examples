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

const entry = (model, update) => {
  const actions = {
    editEntryValue: evt => update(model => {
      model.entry.value = evt.target.value;
      return model;
    })
  };

  return (
    <div>
      <span>Entry number:</span>
      <input type="text" size="2" value={model.entry.value}
        onChange={actions.editEntryValue}/>
    </div>
  );
};

const date = (model, update) => {
  const actions = {
    editDateValue: evt => update(model => {
      model.date.value = evt.target.value;
      return model;
    })
  };

  return (
    <div>
      <span>Date:</span>
      <input type="text" size="10" value={model.date.value}
        onChange={actions.editDateValue}/>
    </div>
  );
};

const temperature = (model, update) => {
  const actions = {
    increase: value => evt => {
      evt.preventDefault();
      update(model => {
        model.temperature.value = model.temperature.value + value;
        return model;
      });
    }
  };

  return (
    <div>
      <span>Temperature: {model.temperature.value}&deg;C </span>
      <button className="btn btn-default"
        onClick={actions.increase(1)}>Increase</button>{" "}
      <button className="btn btn-default"
        onClick={actions.increase(-1)}>Decrease</button>
    </div>
  );
};

const app = (model, update) => {
  const actions = {
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
  };

  return (
    <form>
      {entry(model, update)}
      {date(model, update)}
      {temperature(model, update)}
      <div>
        <button className="btn btn-primary"
          onClick={actions.save}>Save</button>
        <span>{model.saved}</span>
      </div>
    </form>
  );
};

const update = flyd.stream();
const applyUpdate = (model, modelChange) => modelChange(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
models.map(model => ReactDOM.render(app(model, update), element));
