import { randomGif } from "../random-gif";

export const initialModel = () => ({
  value: 0
});

export const modelChanges = randomGif.actions.newGifSuccess.map(() => model => {
  const increment = model.counter.value >= 3 && model.button.active ? 2 : 1;
  model.counter.value = model.counter.value + increment;
  return model;
});
