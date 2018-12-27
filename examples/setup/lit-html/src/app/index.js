import { html } from "lit-html"

import { conditions, Conditions } from "../conditions"
import { dateTime, DateTime } from "../dateTime"
import { temperature, Temperature } from "../temperature"

export const app = {
  initialState: () => Object.assign({},
    dateTime.initialState(),
    conditions.initialState(),
    { air: temperature.initialState("Air") },
    { water: temperature.initialState("Air") }
  ),
  actions: update => Object.assign({},
    dateTime.actions(update),
    conditions.actions(update),
    temperature.actions(update)
  )
}

export const App = (state, actions) => html`
  <div class="row">
    <div class="col-md-4">
      ${DateTime(state, actions)}
    </div>
    <div class="col-md-4">
      ${Conditions(state, actions)}
      ${Temperature(state, "air", actions)}
      ${Temperature(state, "water", actions)}
    </div>
  </div>
`
