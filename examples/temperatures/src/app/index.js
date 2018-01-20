import _ from "lodash";
import { createView } from "./view.jsx";
import { createEntryDate } from "../entryDate";
import { createEntryNumber } from "../entryNumber";
import { createTemperature } from "../temperature";
import { validateModel } from "../validation";
import { createComponents, combineComponents }  from "../util/nest";

const createActions = update => ({
  save: evt => {
    evt.preventDefault();

    update(model => {
      const errors = validateModel(model);
      console.log("errors:", JSON.stringify(errors, null, 4));
      /*
      const errorMap = errors.reduce((result, next) =>
        _.set(result, next.path, next.message), {});

      [["entryNumber"], ["entryDate", "from"], ["entryDate", "to"]].forEach(path =>
        _.set(model, path.concat(["errors"]), _.get(errorMap, path, {})));
      */

      if (_.isEmpty(errors)) {
        const air = model.temperature.air;
        const water = model.temperature.water;

        model.saved =
          "Entry #" + model.entryNumber.value +
           " on " + model.entryDate.value + ":" +
           " Air: " + air.value + "\xB0" + air.units +
           " Water: " + water.value + "\xB0" + water.units;

        model.entryDate.value = "";
        model.entryNumber.value = "";
      }
      return model;
    });
  }
});

export const createApp = update => {
  const components = createComponents(update, {
    entryNumber: createEntryNumber,
    entryDate: {
      from: createEntryDate("From Date:"),
      to: createEntryDate("To Date:")
    },
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
