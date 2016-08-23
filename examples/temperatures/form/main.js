import { createComponent } from "meiosis";
import objectPath from "object-path";

import initialModel from "./model";
import Action from "./actions";
import nextAction from "./nextAction";
import receive from "./receive";
import view from "./view";

import createEntryComponent from "../entry/main";
import createDateComponent from "../date/main";
import temperature from "../temperature/main";

const entryComponent = createEntryComponent(Action);
const dateComponent = createDateComponent(Action);

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

const FormComponent = createComponent({
  initialModel,
  view: view(entryComponent, dateComponent, airTemperature, waterTemperature),
  nextAction,
  receive
});

export default FormComponent;
