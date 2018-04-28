import _ from "lodash";
import { createView } from "./view.jsx";
import { createEntryDate } from "../entryDate";
import { createEntryNumber } from "../entryNumber";
import { createTemperature } from "../temperature";
import { validateModel } from "../validation";
import { nest } from "../util/nest";

const createActions = update => ({
  save: evt => {
    evt.preventDefault();

    update(model => {
      const errors = validateModel(model);
      model.errors = errors;

      if (_.isEmpty(errors)) {
        const air = model.temperature.air;
        const water = model.temperature.water;

        model.saved =
          "Entry #" + model.entryNumber.value +
          " from " + model.entryDate.from.value +
          " to " + model.entryDate.to.value + ":" +
          " Air: " + air.value + "\xB0" + air.units +
          " Water: " + water.value + "\xB0" + water.units;

        model.entryDate.from.value = "";
        model.entryDate.to.value = "";
        model.entryNumber.value = "";
      }
      return model;
    });
  }
});

export const createApp = update => {
  const components = {
    entryNumber: nest(createEntryNumber, update, ["entryNumber"]),
    entryDateFrom: nest(createEntryDate("From Date:"), update, ["entryDate", "from"]),
    entryDateTo: nest(createEntryDate("To Date:"), update, ["entryDate", "to"]),
    airTemperature: nest(createTemperature("Air temperature"), update, ["temperature", "air"]),
    waterTemperature: nest(createTemperature("Water temperature"), update, ["temperature", "water"])
  };

  return {
    model: () => _.reduce(
      _.values(components),
      (result, component) => _.merge(result, component.model()),
      { }
    ),
    view: createView(createActions(update), components)
  };
};
