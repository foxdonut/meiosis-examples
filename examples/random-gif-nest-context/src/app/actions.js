export const Actions = context => ({
  newGifGenerated: () => {
    const state = context.root.getState()
    const increment = state.counter.value > 3 && state.button.active ? 2 : 1
    context.root.update({ counter: { value: x => x + increment } })
  }
})
