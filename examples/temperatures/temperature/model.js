import { temperatureActions } from "./actions";
import { mergeIntoOne } from "../util";

export const initialModel = (id, label) => ({
  id,
  label,
  value: 21,
  units: "C"
});

const increase = temperatureActions.increase.map(({ id, amount }) => model => {
  if (id === model.id) {
    model.value = model.value + amount;
  }
  return model;
});

const changeUnits = temperatureActions.changeUnits.map(({ id }) => model => {
  if (id === model.id) {
    if (model.units === "F") {
      model.value = Math.round( (model.value - 32) / 9 * 5 );
      model.units = "C";
    }
    else {
      model.value = Math.round( model.value * 9 / 5 + 32 );
      model.units = "F";
    }
  }
  return model;
});

export const modelChanges = mergeIntoOne([
  increase,
  changeUnits
]);
