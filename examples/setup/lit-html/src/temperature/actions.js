import O from "patchinko/constant"

export const actions = {
  increment: amount => ({ value: O(x => x + amount) }),

  changeUnits: () => state => {
    if (state.units === "C") {
      state.units = "F"
      state.value = Math.round((state.value * 9) / 5 + 32)
    } else {
      state.units = "C"
      state.value = Math.round(((state.value - 32) / 9) * 5)
    }
    return state
  }
}
