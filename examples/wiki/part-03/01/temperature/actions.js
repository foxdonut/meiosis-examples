import _ from "lodash/fp";

export const createActions = update => ({
  editDate: evt => update(_.set("date", evt.target.value)),

  increase: amount => () => update(_.update("value", _.add(amount))),

  changeUnits: () => update(model =>
    ((model.units === "C")
      ? _.compose(
          _.set("units", "F"),
          _.set("value", Math.round( model.value * 9 / 5 + 32 ))
        )
      : _.compose(
          _.set("units", "C"),
          _.set("value", Math.round( (model.value - 32) / 9 * 5 ))
        )
    )(model)
  )
});
