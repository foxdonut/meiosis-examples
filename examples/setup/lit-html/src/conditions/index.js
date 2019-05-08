import { html } from "lit-html"

import { Initial } from "./initial"
import { Actions } from "./actions"

export const conditions = {
  Initial,
  Actions
}

const conditionsOption = ({ state, actions, value, label }) => html`
  <label class="radio-inline">
    <input
      type="radio"
      name="conditions"
      value=${value}
      .checked=${state.conditions.sky === value}
      @change=${evt => actions.changeSky(evt.target.value)}
    />
    ${label}
  </label>
`

export const Conditions = ({ state, actions }) => html`
  <div>
    <label class="checkbox-inline">
      <input
        type="checkbox"
        .checked=${state.conditions.precipitations}
        @change=${evt => actions.togglePrecipitations(evt.target.checked)}
      />
      Precipitations
    </label>
    <div>
      ${conditionsOption({ state, actions, value: "SUNNY", label: "Sunny" })}
      ${conditionsOption({ state, actions, value: "CLOUDY", label: "Cloudy" })}
      ${conditionsOption({ state, actions, value: "MIX", label: "Mix of sun and clouds" })}
    </div>
  </div>
`
