import { view } from "./view";

const actions = {
  toggle: (model, update) => () => update({ active: !model.active })
};

export const button = {
  model: () => ({
    active: false
  }),
  view: view(actions)
};
