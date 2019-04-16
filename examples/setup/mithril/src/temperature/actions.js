import O from "patchinko/constant"

export const actions = update => ({
  increment: (context, amount) => update(context.lens({ value: O(x => x + amount) })),

  changeUnits: context => {
    const patch = {}
    if (context.state.units === "C") {
      patch.units = "F"
      patch.value = Math.round((context.state.value * 9) / 5 + 32)
    } else {
      patch.units = "C"
      patch.value = Math.round(((context.state.value - 32) / 9) * 5)
    }
    update(context.lens(patch))
  }
})
