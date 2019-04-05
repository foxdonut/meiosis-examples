import { html } from "lit-html"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const temperature = {
  initialState,
  actions
}

export const Temperature = ({ local }) => html`
  <div>
    <div style="margin-top: 0.8rem">
      ${local.state.label} Temperature: ${local.state.value}&deg;${local.state.units}
    </div>
    <div style="margin-top: 0.8rem">
      <button
        class="btn btn-primary"
        @click=${() => local.update(actions.increment(1))}
        style="margin-right: 0.4rem"
      >
        Increment
      </button>
      <button
        class="btn btn-primary"
        @click=${() => local.update(actions.increment(-1))}
        style="margin-right: 0.4rem"
      >
        Decrement
      </button>
      <button class="btn btn-default" @click=${() => local.update(actions.changeUnits())}>
        Change Units
      </button>
    </div>
  </div>
`
