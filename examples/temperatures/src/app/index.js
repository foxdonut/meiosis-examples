import { date } from "../date";
import { entry } from "../entry";

export const save = (model, update) => () => {
  const errors = {
    date: { errors: date.validateModel(model.date) },
    entry: { errors: entry.validateModel(model.entry) }
  };
  Object.keys(errors).forEach(key => model[key].errors = errors[key].errors);
  update(model);

  if (!(errors.date.errors || errors.entry.errors)) {
    const air = model.temperature.air;
    const water = model.temperature.water;

    model.saved = "Entry #" + model.entry.value + " on " + model.date.value + ":" +
      " Air: " + air.value + " \xB0" + air.units +
      " Water: " + water.value + " \xB0" + water.units;

    model.entry.value = "";
    model.date.value = "";

    update(model);
  }
};
