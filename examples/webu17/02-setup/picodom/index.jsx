/* global picodom */
/** @jsx picodom.h */
import flyd from "flyd";

const initialModel = {
  date: "",
  value: 20,
  units: "C"
};

const view = (model, update) => {
  const editDate = evt =>
    update(model => {
      model.date = evt.target.value;
      return model;
    });

  const increase = amount => () =>
    update(model => {
      model.value = model.value + amount;
      return model;
    });

  const changeUnits = () => update(model => {
    if (model.units === "C") {
      model.units = "F";
      model.value = Math.round( model.value * 9 / 5 + 32 );
    }
    else {
      model.units = "C";
      model.value = Math.round( (model.value - 32) / 9 * 5 );
    }
    return model;
  });

  return (
    <div>
      {/* oninput instead of onChange */}
      <div>Date: <input type="text" size="10" value={model.date} oninput={editDate}/></div>
      <span>Temperature: {model.value}&deg;{model.units} </span>
      <div>
        <button onclick={increase(1)}>Increase</button> {/* onclick instead of onClick */}
        <button onclick={increase(-1)}>Decrease</button>
      </div>
      <div>
        <button onclick={changeUnits}>Change Units</button>
      </div>
    </div>
  );
};

const update = flyd.stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
let lastElement = null;
let node = null;
const render = view => lastElement = picodom.patch(element, lastElement, node, node=view);

models.map(model => render(view(model, update)));

import { trace } from "meiosis";
trace({ update, dataStreams: [ models ]});
