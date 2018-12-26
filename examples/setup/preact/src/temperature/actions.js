import _ from "lodash"

export const actions = update => ({
  increment: (id, amount) =>
    update(state => _.update(state, [id, "value"], x => x + amount)),

  changeUnits: id => update(state => {
    if (state[id].units === "C") {
      state[id].units = "F"
      state[id].value = Math.round( state[id].value * 9 / 5 + 32 )
    }
    else {
      state[id].units = "C"
      state[id].value = Math.round( (state[id].value - 32) / 9 * 5 )
    }
    return state
  })
})
