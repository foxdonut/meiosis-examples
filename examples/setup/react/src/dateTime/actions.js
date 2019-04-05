import _ from "lodash"

import { validateInput } from "../validation"

export const actions = {
  editDate: value => state => _.set(state, ["dateTime", "date"], value),

  editHour: value => state => _.set(state, ["dateTime", "hour"], value),

  editMinute: value => state => _.set(state, ["dateTime", "minute"], value),

  validate: () => state => {
    const errors = validateInput(state)
    state.errors = errors
    state.conditions.message = _.isEmpty(errors) ? "Valid!" : "Invalid!"
    return state
  }
}
