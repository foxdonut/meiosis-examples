import { add, lensPath, over } from "ramda";

export const createIncrement = event => update =>
  event.map(() => update(model => {
    const increment = model.counter.value >= 3 && model.button.active ? 2 : 1;
    return over(lensPath(["counter", "value"]), add(increment), model);
  }));
