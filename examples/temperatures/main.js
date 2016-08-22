import { createComponent, run } from "meiosis";
import { renderer } from "meiosis-react";
import meiosisTracer from "meiosis-tracer";
import React from "react";
import jsnox from "jsnox";
import Type from "union-type";
import objectPath from "object-path";

import createDateComponent from "./date/main";
import temperature from "./temperature/main";

Type.check = false;

const h = jsnox(React);

const MainAction = Type({
  Validate: [Object],
  Save: [Object]
});

const dateComponent = createDateComponent(MainAction);

const wrapTemperatureComponent = (path, id, label) => {
  const config = temperature(id, label);

  return createComponent({
    initialModel: model => {
      objectPath.set(model, path, config.initialModel({}));
      return model;
    },
    receive: (model, proposal) => {
      config.receive(objectPath.get(model, path), proposal);
      return model;
    },
    view: (model, propose) => config.view(objectPath.get(model, path), propose)
  });
};

const airTemperature = wrapTemperatureComponent("store.airTemperature", "t1", "Air temperature:");
const waterTemperature = wrapTemperatureComponent("store.waterTemperature", "t2", "Water temperature:");

const mainComponent = createComponent({
  view: (model, propose) => {
    const onSave = _evt => propose(MainAction.Validate(model));

    return h("div",
      dateComponent(model),
      airTemperature(model),
      waterTemperature(model),
      h("button.btn.btn-md.btn-primary", { onClick: onSave }, "Save"),
      h("span", "Saved: " + model.store.saved)
    );
  },
  nextAction: (model, proposal, propose) => {
    MainAction.case({
      Validate: () => {
        if (!model.store.date.error) {
          propose(MainAction.Save(model));
        }
      },
      _: () => {}
    }, proposal);
  },
  receive: (model, proposal) => {
    MainAction.case({
      Save: save => {
        const air = save.store.airTemperature;
        const water = save.store.waterTemperature;

        model.store.saved = `On ${save.store.date.value}:
          Air: ${air.temperature} \xB0${air.units}
          Water: ${water.temperature} \xB0${water.units}
        `;
      },
      _: () => {}
    }, proposal);

    return model;
  }
});

const renderRoot = run(renderer().intoId(document, "app"), mainComponent);
meiosisTracer(createComponent, renderRoot, "#tracer");
