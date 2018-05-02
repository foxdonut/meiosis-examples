export const state = model => {
  let temp = model.value;

  if (model.units === "F") {
    temp = Math.round((temp - 32) * 5 / 9);
  }
  model.comment = (temp < 18) ? "COLD!" : (temp > 25) ? "HOT!" : "";

  return model;
};