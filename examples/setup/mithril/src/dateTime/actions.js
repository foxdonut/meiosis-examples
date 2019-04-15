import O from "patchinko/constant"

import { validateInput } from "../validation"

export const actions = {
  editDate: ({ update }, value) => update({ dateTime: O({ date: value }) }),

  editHour: ({ update }, value) => update({ dateTime: O({ hour: value }) }),

  editMinute: ({ update }, value) => update({ dateTime: O({ minute: value }) }),

  validate: ({ update, state }) => {
    const errors = validateInput(state)
    update({
      errors,
      conditions: O({
        message: (errors && Object.keys(errors).length > 0 && "Invalid!") || "Valid!"
      })
    })
  }
}
