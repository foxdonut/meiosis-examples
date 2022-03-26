import _ from "lodash/fp"

export const actions = {
  editDate: (cell, value) => cell.update(_.set("date", value)),

  editHour: (cell, value) => cell.update(_.set("hour", value)),

  editMinute: (cell, value) => cell.update(_.set("minute", value))
}
