import { html } from "hybrids"

import { bootstrap } from "../util"

const conditionsOption = ({ state, id, actions, value, label }) => html`
  <label class="radio-inline">
    <input
      type="radio"
      name="conditions"
      value=${value}
      checked=${state[id].sky === value}
      onchange=${(_, evt) => actions.changeSky(id, evt.target.value)}
    />
    ${label}
  </label>
`

export const Conditions = {
  state: null,
  actions: null,
  render: ({ state, id, actions }) => html`
    ${bootstrap}
    <div>
      <label class="checkbox-inline">
        <input
          type="checkbox"
          checked=${state[id].precipitations}
          onchange=${(_, evt) => actions.togglePrecipitations(id, evt.target.checked)}
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
}
