import _ from "lodash/fp"

import { validateInput } from "../validation"

export const actions = {
  editDate: (cell, value) => cell.update(_.set("date", value)),

  editHour: (cell, value) => cell.update(_.set("hour", value)),

  editMinute: (cell, value) => cell.update(_.set("minute", value)),

  validate: cell =>
    cell.update(state => {
      const errors = validateInput(state)
      const message = _.isEmpty(errors) ? "Valid!" : "Invalid!"
      return Object.assign({}, state, { errors, message })
    })
}
