import { html } from "lit-html"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const conditions = {
  initialState,
  actions
}

const conditionsOption = ({ root, value, label }) => html`
  <label class="radio-inline">
    <input
      type="radio"
      name="conditions"
      value=${value}
      .checked=${root.state.conditions.sky === value}
      @change=${evt => root.update(actions.changeSky(evt.target.value))}
    />
    ${label}
  </label>
`

export const Conditions = ({ root }) => html`
  <div>
    <label class="checkbox-inline">
      <input
        type="checkbox"
        .checked=${root.state.conditions.precipitations}
        @change=${evt => root.update(actions.togglePrecipitations(evt.target.checked))}
      />
      Precipitations
    </label>
    <div>
      ${conditionsOption({ root, value: "SUNNY", label: "Sunny" })}
      ${conditionsOption({ root, value: "CLOUDY", label: "Cloudy" })}
      ${conditionsOption({ root, value: "MIX", label: "Mix of sun and clouds" })}
    </div>
  </div>
`
