import _ from "lodash"

import { validateInput } from "../validation"

export const Actions = update => ({
  editDate: value => update(state => _.set(state, ["dateTime", "date"], value)),

  editHour: value => update(state => _.set(state, ["dateTime", "hour"], value)),

  editMinute: value => update(state => _.set(state, ["dateTime", "minute"], value)),

  validate: () =>
    update(state => {
      const errors = validateInput(state)
      state.errors = errors
      state.conditions.message = _.isEmpty(errors) ? "Valid!" : "Invalid!"
      return state
    })
})
