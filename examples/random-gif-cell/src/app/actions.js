// @ts-check
export const Actions = cell => ({
  newGifGenerated: () => {
    const state = cell.getState()
    const increment = state.counter.value > 3 && state.button.active ? 2 : 1
    cell.update({ counter: { value: x => x + increment } })
  }
})
