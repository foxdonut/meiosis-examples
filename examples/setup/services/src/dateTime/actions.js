import { validateInput } from "../validation"

export const actions = {
  editDate: (cell, value) => cell.update({ dateTime: { date: value } }),

  editHour: (cell, value) => cell.update({ dateTime: { hour: value } }),

  editMinute: (cell, value) => cell.update({ dateTime: { minute: value } }),

  validate: cell => {
    const errors = validateInput(cell.state)
    const message = (errors && Object.keys(errors).length > 0 && "Invalid!") || "Valid!"
    cell.update({ errors: () => errors, message })
  }
}
