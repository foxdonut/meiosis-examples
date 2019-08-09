import { validateInput } from "../validation"

export const Actions = update => ({
  editDate: value => update({ dateTime: { date: value } }),

  editHour: value => update({ dateTime: { hour: value } }),

  editMinute: value => update({ dateTime: { minute: value } }),

  validate: state => {
    const errors = validateInput(state)
    update({
      errors,
      conditions: {
        message: (errors && Object.keys(errors).length > 0 && "Invalid!") || "Valid!"
      }
    })
  }
})
