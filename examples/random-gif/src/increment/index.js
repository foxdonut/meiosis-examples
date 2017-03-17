export const increment = {
  listeners: {
    newGifSuccess: (model, update) => {
      const increment = model.counter.value >= 3 && model.button.active ? 2 : 1;
      model.counter.value = model.counter.value + increment;
      update(model);
    }
  }
};
