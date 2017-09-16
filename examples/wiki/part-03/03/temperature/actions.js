import R from "ramda";
import * as L from "partial.lenses";

export const createActions = update => ({
  editDate: evt => update(L.set("date", evt.target.value)),

  increase: amount => () => update(L.modify("value", R.add(amount))),

  changeUnits: () => update(model =>
    R.call((model.units === "C")
      ? R.compose(
          L.set("units", "F"),
          L.set("value", Math.round( model.value * 9 / 5 + 32 ))
        )
      : R.compose(
          L.set("units", "C"),
          L.set("value", Math.round( (model.value - 32) / 9 * 5 ))
      ), model)
  )
});
