export const Actions = (update, getState) => ({
  newGifGenerated: () => {
    const state = getState()
    const increment = state.counter.value > 3 && state.button.active ? 2 : 1
    update({ counter: { value: x => x + increment } })
  }
})
