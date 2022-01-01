import { conditions } from "../conditions"
import { dateTime } from "../dateTime"
import { temperature } from "../temperature"
import { nest } from "../meiosis"

export const app = {
  Initial: () => ({
    dateTime: dateTime.Initial(),
    conditions: conditions.Initial(),
    temperature: {
      air: temperature.Initial(),
      water: temperature.Initial()
    }
  }),

  Actions: cell => ({
    saveDateTime: dateTimeString => cell.update({ dateTimeString })
  })
}

export const createCells = rootCell => ({
  root: rootCell,
  dateTime: nest(rootCell, "dateTime"),
  conditions: nest(rootCell, "conditions"),
  temperature: {
    air: nest(nest(rootCell, "temperature"), "air", temperature.Actions),
    water: nest(nest(rootCell, "temperature"), "water", temperature.Actions)
  }
})
