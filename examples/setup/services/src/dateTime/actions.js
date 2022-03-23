import { validateInput } from "../validation"

export const Actions = update => ({
  editDate: value => update({ date: value }),

  editHour: value => update({ hour: value }),

  editMinute: value => update({ minute: value }),

  validate: state => {
    const errors = validateInput(state)
    update({
      errors: () => errors,
      message: (errors && Object.keys(errors).length > 0 && "Invalid!") || "Valid!"
    })
  }
})
