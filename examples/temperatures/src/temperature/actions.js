import _ from "lodash"

export const actions = ({ update }) => ({
  increase: (id, amount) => evt => {
    evt.preventDefault()

    update(state => _.update(state, [id, "value"], value => value + amount))
  },

  changeUnits: id => evt => {
    evt.preventDefault()

    update(state => {
      if (state[id].units === "F") {
        return _.update(_.set(state, [id, "units"], "C"),
          [id, "value"], value => Math.round( (value - 32) / 9 * 5 ))
      }
      else {
        return _.update(_.set(state, [id, "units"], "F"),
          [id, "value"], value => Math.round( value * 9 / 5 + 32 ))
      }
    })
  }
})
