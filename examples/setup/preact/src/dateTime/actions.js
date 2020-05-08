import _ from "lodash/fp"

import { validateInput } from "../validation"

export const Actions = update => ({
  editDate: (id, value) => update(_.set([id, "date"], value)),

  editHour: (id, value) => update(_.set([id, "hour"], value)),

  editMinute: (id, value) => update(_.set([id, "minute"], value)),

  validate: () =>
    update(state => {
      const errors = validateInput(state)
      const message = _.isEmpty(errors) ? "Valid!" : "Invalid!"
      return Object.assign({}, state, { errors, message })
    })
})
