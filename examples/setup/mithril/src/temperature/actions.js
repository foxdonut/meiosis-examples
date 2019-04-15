import O from "patchinko/constant"

export const actions = {
  increment: ({ update, lens }, amount) => update(lens({ value: O(x => x + amount) })),

  changeUnits: ({ state, update, lens }) => {
    const patch = {}
    if (state.units === "C") {
      patch.units = "F"
      patch.value = Math.round((state.value * 9) / 5 + 32)
    } else {
      patch.units = "C"
      patch.value = Math.round(((state.value - 32) / 9) * 5)
    }
    update(lens(patch))
  }
}
