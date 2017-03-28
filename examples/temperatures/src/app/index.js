import { date } from "../date";
import { entry } from "../entry";

export const nest = (update, path) => modelChange =>
  update(model => model.updateIn(path, modelChange));

export const save = (model, update) => evt => {
  evt.preventDefault();

  const errors = {
    date: { errors: date.validateModel(model.date) },
    entry: { errors: entry.validateModel(model.entry) }
  };
  update(model =>
    Object.keys(errors).reduce(
      (m, key) => m.setIn([key, "errors"], errors[key].errors),
      model
    )
  );

  if (!(errors.date.errors || errors.entry.errors)) {
    const air = model.temperature.air;
    const water = model.temperature.water;

    update(model =>
      model.
        set("saved", "Entry #" + model.getIn(["entry", "value"]) + " on " + model.getIn(["date", "value"]) + ":" +
          " Air: " + air.value + " \xB0" + air.units +
          " Water: " + water.value + " \xB0" + water.units).
        setIn(["entry", "value"], "").
        setIn(["date", "value"], "")
    );
  }
};
