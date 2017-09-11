import { createView } from "./view.jsx";
import { createDate } from "../date";
import { createEntry } from "../entry";
import { createTemperature } from "../temperature";
import { createComponents, combineComponents }  from "../util/nest";

const createActions = (update, validateModel) => ({
  save: evt => {
    evt.preventDefault();

    update(model => {
      const errors = validateModel(model);

      Object.keys(errors).forEach(key => {
        model[key].errors = errors[key];
      });

      if (!(errors.date || errors.entry)) {
        const air = model.temperature.air;
        const water = model.temperature.water;

        model.saved =
          "Entry #" + model.entry.value +
           " on " + model.date.value + ":" +
           " Air: " + air.value + "\xB0" + air.units +
           " Water: " + water.value + "\xB0" + water.units;

        model.entry.value = "";
        model.date.value = "";
      }
      return model;
    });
  }
});

export const createApp = update => {
  const components = createComponents(update, {
    date: createDate,
    entry: createEntry,
    temperature: {
      air: createTemperature("Air temperature"),
      water: createTemperature("Water temperature")
    }
  });

  const validateModel = combineComponents("validateModel", components);
  const actions = createActions(update, validateModel);

  return {
    model: combineComponents("model", components),
    view: createView(actions, components)
  };
};
