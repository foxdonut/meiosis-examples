import _ from "lodash";
import { createView } from "./view.jsx";
import { createDate } from "../date";
import { createEntry } from "../entry";
import { createTemperature } from "../temperature";
import { validation, validateModel } from "../validation";
import { createComponents, combineComponents }  from "../util/nest";

const createActions = update => ({
  save: evt => {
    evt.preventDefault();

    update(model => {
      const errors = validateModel(model);

      Object.keys(validation).forEach(key => {
        const path = key.split(".");
        _.set(model, [path[0], "errors", path[1]], _.get(errors, key, []));
      });

      if (!errors) {
        const air = model.temperature.air;
        const water = model.temperature.water;

        model.saved =
          "Entry #" + model.entry.value +
           " on " + model.entryDate.value + ":" +
           " Air: " + air.value + "\xB0" + air.units +
           " Water: " + water.value + "\xB0" + water.units;

        model.entryDate.value = "";
        model.entry.value = "";
      }
      return model;
    });
  }
});

export const createApp = update => {
  const components = createComponents(update, {
    entry: createEntry,
    entryDate: createDate,
    temperature: {
      air: createTemperature("Air temperature"),
      water: createTemperature("Water temperature")
    }
  });

  return {
    model: combineComponents(components, "model"),
    view: createView(createActions(update), components)
  };
};
