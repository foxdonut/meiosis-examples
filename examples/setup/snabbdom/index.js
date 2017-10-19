/* global snabbdom, snabbdom_attributes, snabbdom_class, snabbdom_eventlisteners, snabbdom_props */
import flyd from "flyd";
const h = snabbdom.h;
const patch = snabbdom.init([
  snabbdom_attributes.attributesModule,
  snabbdom_class.classModule,
  snabbdom_eventlisteners.eventListenersModule,
  snabbdom_props.propsModule
]);

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

  /* use attrs, props, on */
  /* children must be array */
  return (
    h("div", [
      h("div", [
        "Date: ",
        h("input", {
          attrs: { type: "text", size: "10" },
          props: { value: model.date },
          on: { input: editDate }
        })
      ]),
      h("span", [ "Temperature: ", model.value, "\xB0", model.units ]),
      h("div", [
        h("button", { on: { click: increase(1) } }, "Increase"),
        h("button", { on: { click: increase(-1) } }, "Decrease")
      ]),
      h("div", [
        h("button", { on: { click: changeUnits } }, "Change Units")
      ])
    ])
  );
};

const update = flyd.stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

let element = document.getElementById("app");
const render = view => element = patch(element, view);

models.map(model => render(view(model, update)));

import { trace } from "meiosis";
trace({ update, dataStreams: [ models ]});
