import { appActions } from "./actions";
import { mergeIntoOne } from "../util";

const save = appActions.save.map(() => model => {
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
  Object.keys(errors).forEach(key => model[key].errors = errors[key].errors);
  return model;
});

export const modelChanges = mergeIntoOne([
  validationErrors,
  save
]);
