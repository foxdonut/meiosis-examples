import { validateInput } from "../validation"

export const Actions = update => ({
  editDate: (id, value) => update({ [id]: { date: value } }),

  editHour: (id, value) => update({ [id]: { hour: value } }),

  editMinute: (id, value) => update({ [id]: { minute: value } }),

  validate: state => {
    const errors = validateInput(state)
    update({
      errors: () => errors,
      message: (errors && Object.keys(errors).length > 0 && "Invalid!") || "Valid!"
    })
  }
})
