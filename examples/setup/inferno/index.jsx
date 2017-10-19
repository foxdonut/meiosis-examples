/* global Inferno */
/** @jsx Inferno.createElement */
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
      <div>Date: <input type="text" size="10" value={model.date} onChange={editDate}/></div>
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
models.map(model => Inferno.render(view(model, update), element));

import { trace } from "meiosis";
trace({ update, dataStreams: [ models ]});
