import { createComponent, run } from "meiosis";
import { renderer } from "meiosis-react";
import meiosisTracer from "meiosis-tracer";
import React from "react";
import jsnox from "jsnox";
import objectPath from "object-path";

import temperature from "./temperature/main";

const h = jsnox(React);

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
  view: model => h("div", airTemperature(model), waterTemperature(model))
});

const renderRoot = run(renderer().intoId(document, "app"), mainComponent);
meiosisTracer(createComponent, renderRoot, "#tracer");
