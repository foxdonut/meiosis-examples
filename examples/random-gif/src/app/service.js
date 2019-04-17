import O from "patchinko/constant"

export const service = (state, update) => {
  if (state.newGifGenerated) {
    const increment = state.counter.value > 3 && state.button.active ? 2 : 1
    update({ newGifGenerated: false, counter: O({ value: O(x => x + increment) }) })
  }
}
