import { lensProp, not, over } from "ramda";
import { view } from "./view";

const actions = {
  toggle: (model, update) => () => update(over(lensProp("active"), not))
};

export const button = {
  model: () => ({
    active: false
  }),
  view: view(actions)
};
