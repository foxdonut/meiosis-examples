import { O } from "../util/overloaded";

import { createView } from "./view";
import { createEntryDate } from "../entryDate";
import { createEntryNumber } from "../entryNumber";
import { createTemperature } from "../temperature";
import { validateModel } from "../validation";
import { nest } from "../util/nest";

const createActions = update => ({
  save: model => evt => {
    evt.preventDefault();
    const air = model.temperature.air;
    const water = model.temperature.water;
    const errors = validateModel(model);

    update(
      O({ errors },
        (Object.keys(errors).length === 0)
          ? {
            saved:
              "Entry #" + model.entryNumber.value +
              " from " + model.entryDate.from.value +
              " to " + model.entryDate.to.value + ":" +
              " Air: " + air.value + "\xB0" + air.units +
              " Water: " + water.value + "\xB0" + water.units,

            entryDate: O({
              from: O({ value: "" }),
              to: O({ value: "" }),
            }),
            entryNumber: O({
              value: ""
            })
          }
          : { }
      )
    );
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
    model: () => Object.values(components).reduce(
      (result, component) => O(result, component.model()),
      { }
    ),
    view: createView(createActions(update), components)
  };
};
