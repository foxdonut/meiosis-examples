export const createActions = update => ({
  editDate: evt => update(model => model.set("date", evt.target.value)),

  increase: amount => () => update(model => model.update("value", v => v + amount)),

  changeUnits: () => update(model =>
    (model.get("units") === "C")
      ? model
          .set("units", "F")
          .set("value", Math.round( model.get("value") * 9 / 5 + 32 ))
      : model
          .set("units", "C")
          .set("value", Math.round( (model.get("value") - 32) / 9 * 5 ))
  )
});
