import O from "patchinko/constant"

export const events = {
  actions: {
    newGifGenerated: state => {
      const increment = state.counter.value > 3 && state.button.active ? 2 : 1
      return { counter: O({ value: O(x => x + increment) }) }
    }
  }
}
