import { PS, S } from "patchinko/explicit"

export const actions = update => ({
  increment: (id, amount) =>
    update({ [id]: PS({ value: S(x => x + amount) }) }),

  changeUnits: id => update({
    [id]: S(state => {
      if (state.units === "C") {
        state.units = "F"
        state.value = Math.round( state.value * 9 / 5 + 32 )
      }
      else {
        state.units = "C"
        state.value = Math.round( (state.value - 32) / 9 * 5 )
      }
      return state
    })
  })
})
