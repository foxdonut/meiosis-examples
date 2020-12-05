import { conditions } from "../conditions"
import { dateTime } from "../dateTime"
import { temperature } from "../temperature"

export const Initial = () => ({
  dateTime: dateTime.Initial(),
  conditions: conditions.Initial(),
  "temperature:air": temperature.Initial(),
  "temperature:water": temperature.Initial()
})
