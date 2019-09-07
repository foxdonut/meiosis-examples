import _ from "lodash"

import { validateInput } from "../validation"

export const Actions = update => ({
  editDate: (id, value) => update(state => _.set(state, [id, "date"], value)),

  editHour: (id, value) => update(state => _.set(state, [id, "hour"], value)),

  editMinute: (id, value) => update(state => _.set(state, [id, "minute"], value)),

  validate: () =>
    update(state => {
      const errors = validateInput(state)
      state.errors = errors
      state.message = _.isEmpty(errors) ? "Valid!" : "Invalid!"
      return state
    })
})
