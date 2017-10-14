import * as R from "ramda";

export const createActions = update => ({
  editDate: R.compose(update, R.assoc("date"), R.path(["target", "value"])),

  increase: amount => () => update(R.over(R.lensProp("value"), R.add(amount))),

  changeUnits: () => update(model =>
    R.call((model.units === "C")
      ? R.compose(
          R.assoc("units", "F"),
          R.assoc("value", Math.round( model.value * 9 / 5 + 32 ))
        )
      : R.compose(
          R.assoc("units", "C"),
          R.assoc("value", Math.round( (model.value - 32) / 9 * 5 ))
      ), model)
  )
});
