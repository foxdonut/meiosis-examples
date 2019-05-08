import _ from "lodash"

export const Actions = update => ({
  increment: amount => update(state => _.update(state, ["temperature", "value"], x => x + amount)),

  changeUnits: () =>
    update(state => {
      if (state.temperature.units === "C") {
        state.temperature.units = "F"
        state.temperature.value = Math.round((state.temperature.value * 9) / 5 + 32)
      } else {
        state.temperature.units = "C"
        state.temperature.value = Math.round(((state.temperature.value - 32) / 9) * 5)
      }
      return state
    })
})
