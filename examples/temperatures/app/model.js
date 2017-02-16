import { appActions } from "./actions";
import { mergeIntoOne } from "../util";

const save = appActions.save.map(() => model => {
  model.date.errors = null;
  model.entry.errors = null;

  const air = model.temperature.air;
  const water = model.temperature.water;

  model.saved = "Entry #" + model.entry.value + " on " + model.date.value + ":" +
    " Air: " + air.value + " \xB0" + air.units +
    " Water: " + water.value + " \xB0" + water.units;

  model.entry.value = "";
  model.date.value = "";

  return model;
});

const validationErrors = appActions.validationErrors.map(errors => model => {
  model.date.errors = errors.date;
  model.entry.errors = errors.entry;
  return model;
});

export const modelChanges = mergeIntoOne([
  validationErrors,
  save
]);
