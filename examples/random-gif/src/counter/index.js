export const createCounter = view => ({
  model: () => ({
    value: 0
  }),
  view,
  listeners: {
    newGifSuccess: (topModel, update) => () => update(counterModel => {
      const increment = counterModel.value >= 3 && topModel.button.active ? 2 : 1;
      counterModel.value = counterModel.value + increment;
      return counterModel;
    })
  }
});
