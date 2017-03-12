import { assoc } from "ramda";

const actions = {
  toggle: update => () => update(model =>
    assoc("active", !model.active, model))
};

export const createButton = view => ({
  model: () => ({
    active: false
  }),
  view: view(actions)
});
