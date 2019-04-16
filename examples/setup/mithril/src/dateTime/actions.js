import O from "patchinko/constant"

import { validateInput } from "../validation"

export const actions = update => ({
  editDate: value => update({ dateTime: O({ date: value }) }),

  editHour: value => update({ dateTime: O({ hour: value }) }),

  editMinute: value => update({ dateTime: O({ minute: value }) }),

  validate: state => {
    const errors = validateInput(state)
    update({
      errors,
      conditions: O({
        message: (errors && Object.keys(errors).length > 0 && "Invalid!") || "Valid!"
      })
    })
  }
})
