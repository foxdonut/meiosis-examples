import { add, lensPath, over } from "ramda";

export const increment = {
  create: (update, events) => {
    events.newGifSuccess.map(() => update(model => {
      const increment = model.counter.value >= 3 && model.button.active ? 2 : 1;
      return over(lensPath(["counter", "value"]), add(increment), model);
    }));
  }
};
