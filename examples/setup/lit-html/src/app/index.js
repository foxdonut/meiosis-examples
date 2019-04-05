import { html } from "lit-html"

import { conditions, Conditions } from "../conditions"
import { dateTime, DateTime } from "../dateTime"
import { temperature, Temperature } from "../temperature"
import { lensProp } from "../util"

export const app = {
  initialState: () =>
    Object.assign(
      {},
      dateTime.initialState(),
      conditions.initialState(),
      { air: temperature.initialState("Air") },
      { water: temperature.initialState("Water") }
    )
}

export const App = ({ root }) => html`
  <div class="row">
    <div class="col-md-4">
      ${DateTime({ root })}
    </div>
    <div class="col-md-4">
      ${Conditions({ root })} ${Temperature({ root, local: lensProp(root, "air") })}
      ${Temperature({ root, local: lensProp(root, "water") })}
    </div>
  </div>
`
