import { conditions } from "../conditions"
import { dateTime } from "../dateTime"
import { temperature } from "../temperature"
import { nest } from "../util"

export const app = {
  Initial: () => ({
    dateTime: dateTime.Initial(),
    conditions: conditions.Initial(),
    airTemp: temperature.Initial(),
    waterTemp: temperature.Initial()
  }),

  Actions: update => ({
    airTemp: temperature.Actions(nest(update, "airTemp")),
    waterTemp: temperature.Actions(nest(update, "waterTemp"))
  })
}
