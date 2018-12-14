import _ from "lodash"
import { validateInput } from "../validation"

export const actions = ({ update }) => ({
  editValue: id => evt => update(state => _.set(state, [id, "value"], evt.target.value)),
  save: evt => {
    evt.preventDefault()

    update(state => {
      const errors = validateInput(state)
      state.errors = errors

      if (_.isEmpty(errors)) {
        const air = state["temperature:air"]
        const water = state["temperature:water"]

        state.saved =
          "Entry #" + state["entry:number"].value +
          " from " + state["entry:date:from"].value +
          " to " + state["entry:date:to"].value + ":" +
          " Air: " + air.value + "\xB0" + air.units +
          " Water: " + water.value + "\xB0" + water.units

        state["entry:date:from"].value = ""
        state["entry:date:to"].value = ""
        state["entry:number"].value = ""
      }
      return state
    })
  }
})
