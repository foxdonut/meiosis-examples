import _ from "lodash";
import { createView } from "./view.jsx";
import { createEntryDate } from "../entryDate";
import { createEntryNumber } from "../entryNumber";
import { createTemperature } from "../temperature";
import { validateModel } from "../validation";
import { nest }  from "../util/nest";

const createActions = update => ({
  save: model => evt => {
    evt.preventDefault();

    const errors = validateModel(model);

    const fn = _.isEmpty(errors)
      ? model => {
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

          return model;
      }
      : null;

    update({ fn, ctx: context => _.set(context, "errors", errors) });
  }
});

export const createApp = update => {
  const entryNumber = nest(createEntryNumber, "entryNumber", update);
  const entryDateFrom = nest(createEntryDate("From Date:", ["context", "errors", "entryDate", "from", "value"]), ["entryDate", "from"], update);
  const entryDateTo = nest(createEntryDate("To Date:", ["context", "errors", "entryDate", "to", "value"]), ["entryDate", "to"], update);
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
    model: () => _.merge({
        context: {}
      },
      entryNumber.model(),
      entryDateFrom.model(),
      entryDateTo.model(),
      airTemperature.model(),
      waterTemperature.model()
    ),
    view: createView(createActions(update), components)
  };
};
