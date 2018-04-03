import _ from "lodash";
import { createView } from "./view.jsx";
import { createEntryDate } from "../entryDate";
import { createEntryNumber } from "../entryNumber";
import { createTemperature } from "../temperature";
import { validateModel } from "../validation";
import { nest }  from "../util/nest";

const createActions = update => ({
  save: evt => {
    evt.preventDefault();

    update(model => {
      const errors = validateModel(model);
      _.set(model, ["entryDate", "from", "errors"], _.get(errors, ["entryDate", "from"]));
      _.set(model, ["entryDate", "to", "errors"], _.get(errors, ["entryDate", "to"]));
      _.set(model, ["entryNumber", "errors"], _.get(errors, ["entryNumber"]));

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
  const entryNumber = nest(createEntryNumber, "entryNumber", update);
  const entryDateFrom = nest(createEntryDate("From Date:"), ["entryDate", "from"], update);
  const entryDateTo = nest(createEntryDate("To Date:"), ["entryDate", "to"], update);
  const airTemperature = nest(createTemperature("Air temperature"), ["temperature", "air"], update);
  const waterTemperature = nest(createTemperature("Water temperature"), ["temperature", "water"], update);

  const components = {
    entryNumber,
    entryDateFrom,
    entryDateTo,
    airTemperature,
    waterTemperature
  };

  return {
    model: () => _.merge({},
      entryNumber.model(),
      entryDateFrom.model(),
      entryDateTo.model(),
      airTemperature.model(),
      waterTemperature.model()
    ),
    view: createView(createActions(update), components)
  };
};
