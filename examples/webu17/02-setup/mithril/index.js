/* global m */

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
    m("div",
      m("div", "Date: ",
        m("input[type='text'][size='10']", { value: model.date, oninput: editDate })
      ),
      m("span", "Temperature: ", model.value, m.trust("&deg;"), model.units),
      m("div",
        m("button", { onclick: increase(1) }, "Increase"),
        m("button", { onclick: increase(-1) }, "Decrease")
      ),
      m("div",
        m("button", { onclick: changeUnits }, "Change Units")
      )
    )
  );
};

const update = m.stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = m.stream.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
models.map(model => m.render(element, view(model, update))); // order changes

import { trace } from "meiosis";
trace({ update, dataStreams: [ models ]});
