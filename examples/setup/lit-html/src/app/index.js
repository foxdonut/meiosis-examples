import { html } from "lit-html"

import { conditions, Conditions } from "../conditions"
import { dateTime, DateTime } from "../dateTime"
import { temperature, Temperature } from "../temperature"

export const app = {
  Initial: () => ({
    dateTime: dateTime.Initial(),
    conditions: conditions.Initial(),
    "temperature:air": temperature.Initial(),
    "temperature:water": temperature.Initial()
  }),

  Actions: update =>
    Object.assign(
      {},
      conditions.Actions(update),
      dateTime.Actions(update),
      temperature.Actions(update)
    )
}

export const App = ({ state, actions }) => html`
  <div class="row">
    <div class="col-md-4">
      ${DateTime({ state, id: "dateTime", actions })}
    </div>
    <div class="col-md-4">
      ${Conditions({ state, id: "conditions", actions })}
      ${Temperature({ state, id: "temperature:air", actions })}
      ${Temperature({ state, id: "temperature:water", actions })}
    </div>
  </div>
`
