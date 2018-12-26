import _ from "lodash"

import { validateInput } from "../validation"

export const actions = update => ({
  togglePrecipitations: value =>
    update(state => _.set(state, ["conditions", "precipitations"], value)),

  changeSky: value =>
    update(state => _.set(state, ["conditions", "sky"], value)),

  validate: () =>
    update(state => {
      const errors = validateInput(state)
      state.errors = errors
      state.conditions.message = _.isEmpty(errors) ? "Valid!" : "Invalid!"
      return state
    })
})
