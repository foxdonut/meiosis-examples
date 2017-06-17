import _ from "lodash";
import { createView } from "./view.jsx";
import { date } from "../date";
import { entry } from "../entry";
import { temperature } from "../temperature";
import { nest }  from "../util/nest";

const createActions = update => ({
  save: evt => {
    evt.preventDefault();

    update(model => {
      const errors = {
        date: { errors: date.validateModel(model.date) },
        entry: { errors: entry.validateModel(model.entry) }
      };
      Object.keys(errors).forEach(key => {
        model[key] = _.extend(model[key], errors[key]);
      });

      if (!(errors.date.errors || errors.entry.errors)) {
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

export const app = {
  create: update => {
    const actions = createActions(update);

    const components = {
      date: date.create(nest(update, ["date"])),
      entry: entry.create(nest(update, ["entry"])),
      airTemperature: temperature.create(nest(update, ["temperature", "air"])),
      waterTemperature: temperature.create(nest(update, ["temperature", "water"]))
    };

    return createView(actions, components);
  }
};
