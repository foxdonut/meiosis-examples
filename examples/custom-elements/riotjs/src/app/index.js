import { conditions } from "../conditions"
// import { dateTime } from "../dateTime"
import { temperature } from "../temperature"

export const app = {
  Initial: () => ({
    // dateTime: dateTime.Initial(),
    conditions: conditions.Initial(),
    temperature: {
      air: temperature.Initial(),
      water: temperature.Initial()
    }
  }),

  Actions: update =>
    Object.assign(
      {},
      conditions.Actions(update),
      // dateTime.Actions(update),
      temperature.Actions(update)
    )
}
