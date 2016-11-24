const rnd = (min, max) => Math.round(Math.random() * min) + (max || 0);

export function initialModel(model) {
  model.label = "Measurement";
  model.value = rnd(50);
  model.max = rnd(50,100);
  model.units = rnd(10) % 2 === 0 ? "cm" : "mm";

  return model;
}