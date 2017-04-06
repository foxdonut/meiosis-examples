import flyd from "flyd";
import React from "react";
import ReactDOM from "react-dom";

const initialModel = {
  value: 20
};

const view = (model, update) => {
  const increase = () => update(model => {
    model.value = model.value + 1;
    return model;
  });

  return (
    <div>
      <span>Temperature: {model.value}&deg;C </span>
      <button className="btn btn-default"
        onClick={increase}>Increase</button>
    </div>
  );
};

const update = flyd.stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
models.map(model => ReactDOM.render(view(model, update), element));
