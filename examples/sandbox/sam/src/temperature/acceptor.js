export const createAcceptor = update => ({
  togglePrecipitations: checked =>
    update(model => {
      model.precipitations = checked;
      return model;
    }),

  changePrecipitation: value =>
    update(model => {
      model.precipitation = value;
      return model;
    }),

  editDate: value =>
    update(model => {
      model.date = value;
      return model;
    }),

  increase: amount =>
    update(model => {
      model.value = model.value + amount;
      return model;
    }),

  changeUnits: () => update(model => {
    if (model.units === "C") {
      model.units = "F";
      model.value = Math.round( model.value * 9 / 5 + 32 );
    }
    else {
      model.units = "C";
      model.value = Math.round( (model.value - 32) / 9 * 5 );
    }
    return model;
  })
});
