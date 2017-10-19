/* global preact */
/** @jsx preact.h */
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
      {/* use oninput instead of onChange */}
      <div>Date: <input type="text" size="10" value={model.date} oninput={editDate}/></div>
      <span>Temperature: {model.value}&deg;{model.units} </span>
      <div>
        <button onClick={increase(1)}>Increase</button>
        <button onClick={increase(-1)}>Decrease</button>
      </div>
      <div>
        <button onClick={changeUnits}>Change Units</button>
      </div>
    </div>
  );
};

const update = flyd.stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
// The second argument to render() is actually parent - meaning it's a DOM element to render into.
// render() accepts an element to replace as a third argument.
models.map(model => preact.render(view(model, update), element, element.lastElementChild));

import { trace } from "meiosis";
trace({ update, dataStreams: [ models ]});
