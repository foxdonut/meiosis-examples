import { assoc } from "ramda";
import { view } from "./view";

const actions = {
  toggle: update => () => update(model =>
    assoc("active", !model.active, model))
};

export const button = {
  model: () => ({
    active: false
  }),
  view: view(actions)
};
