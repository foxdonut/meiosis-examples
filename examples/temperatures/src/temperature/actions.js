export const increase = (model, update, amount) => () => {
  model.value = model.value + amount;
  update(model);
};

export const changeUnits = (model, update) => () => {
  if (model.units === "F") {
    model.value = Math.round( (model.value - 32) / 9 * 5 );
    model.units = "C";
  }
  else {
    model.value = Math.round( model.value * 9 / 5 + 32 );
    model.units = "F";
  }
  update(model);
};
