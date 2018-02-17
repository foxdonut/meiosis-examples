import { createModel } from "./model";
import { createActions } from "./actions";
import { createView } from "./view";
import { state } from "./state";

export const createTemperature = update => ({
  model: () => ({
    precipitations: false,
    precipitation: null,
    date: "",
    value: 20,
    units: "C"
  }),

  view: createView(createActions(createModel(update))),

  state
});
