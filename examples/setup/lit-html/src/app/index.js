import { html } from "lit-html"

import { conditions, Conditions } from "../conditions"
import { dateTime, DateTime } from "../dateTime"
import { temperature, Temperature } from "../temperature"

export const app = {
  Initial: () => Object.assign({}, dateTime.Initial(), conditions.Initial(), temperature.Initial()),

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
      ${DateTime({ state, actions })}
    </div>
    <div class="col-md-4">
      ${Conditions({ state, actions })} ${Temperature({ state, actions })}
    </div>
  </div>
`
