import { createActions } from "./actions";
import { createView } from "./view";

export const createTemperature = update => {
  const computed = model => {
    let temp = model.value;

    if (model.units === "F") {
      temp = Math.round((temp - 32) * 5 / 9);
    }
    model.comment = (temp < 10) ? "COLD!" : (temp > 40) ? "HOT" : "";

    return model;
  };

  const view = createView(createActions(update));

  return {
    model: () => ({
      date: "",
      value: 20,
      units: "C"
    }),

    view: model => view(computed(model))
  };
};
