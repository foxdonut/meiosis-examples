export const state = model => {
  const result = Object.assign({}, model);
  let temp = model.value;

  if (model.units === "F") {
    temp = Math.round((temp - 32) * 5 / 9);
  }
  result.comment = (temp < 18) ? "COLD!" : (temp > 25) ? "HOT!" : "";

  return result;
};