import { PS } from "patchinko/explicit"

import { validateInput } from "../validation"

export const actions = update => ({
  editDate: value =>
    update({ dateTime: PS({ date: value }) }),

  editHour: value =>
    update({ dateTime: PS({ hour: value }) }),

  editMinute: value =>
    update({ dateTime: PS({ minute: value }) }),

  validate: state => {
    const errors = validateInput(state)
    update({ errors, conditions: PS({
      message: (errors && Object.keys(errors).length > 0 && "Invalid!") || "Valid!"
    }) })
  }
})
