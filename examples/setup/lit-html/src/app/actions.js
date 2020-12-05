import { conditions } from "../conditions"
import { dateTime } from "../dateTime"
import { temperature } from "../temperature"

export const Actions = update =>
  Object.assign(
    {},
    conditions.Actions(update),
    dateTime.Actions(update),
    temperature.Actions(update)
  )
