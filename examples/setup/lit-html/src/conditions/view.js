import { html } from "lit"

const conditionsOption = ({ state, id, actions, value, label }) => html`
  <label class="radio-inline">
    <input
      type="radio"
      name="conditions"
      value=${value}
      .checked=${state[id].sky === value}
      @change=${evt => actions.changeSky(id, evt.target.value)}
    />
    ${label}
  </label>
`

export const Conditions = ({ state, id, actions }) => html`
  <div>
    <label class="checkbox-inline">
      <input
        type="checkbox"
        .checked=${state[id].precipitations}
        @change=${evt => actions.togglePrecipitations(id, evt.target.checked)}
      />
      Precipitations
    </label>
    <div>
      ${conditionsOption({ state, id, actions, value: "SUNNY", label: "Sunny" })}
      ${conditionsOption({ state, id, actions, value: "CLOUDY", label: "Cloudy" })}
      ${conditionsOption({ state, id, actions, value: "MIX", label: "Mix of sun and clouds" })}
    </div>
  </div>
`
