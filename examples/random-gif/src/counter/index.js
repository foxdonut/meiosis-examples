import { view } from "./view";

export const counter = {
  model: () => ({
    value: 0
  }),
  view,
  listeners: {
    newGifSuccess: (model, update) => {
      const increment = model.counter.value >= 3 && model.button.active ? 2 : 1;
      model.counter.value = model.counter.value + increment;
      update(model);
    }
  }
};
