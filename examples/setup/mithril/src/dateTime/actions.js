import O from "patchinko/constant"

import { validateInput } from "../validation"

export const actions = {
  editDate: value => ({ dateTime: O({ date: value }) }),

  editHour: value => ({ dateTime: O({ hour: value }) }),

  editMinute: value => ({ dateTime: O({ minute: value }) }),

  validate: state => {
    const errors = validateInput(state)
    return {
      errors,
      conditions: O({
        message: (errors && Object.keys(errors).length > 0 && "Invalid!") || "Valid!"
      })
    }
  }
}
