import { html } from "lit-html"

import { Conditions } from "../conditions"
import { DateTime } from "../dateTime"
import { Temperature } from "../temperature"

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
