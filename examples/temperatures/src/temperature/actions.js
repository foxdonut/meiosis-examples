export const createActions = update => ({
  increase: amount => evt => {
    evt.preventDefault();

    update(model => model.update("value", value => value + amount));
  },

  changeUnits: evt => {
    evt.preventDefault();

    update (model => {
      if (model.get("units") === "F") {
        return model.
          update("value", value => Math.round( (value - 32) / 9 * 5 )).
          set("units", "C");
      }
      else {
        return model.
          update("value", value => Math.round( value * 9 / 5 + 32 )).
          set("units", "F");
      }
    })
  }
});
