import { html } from "lit-html"

import { Initial } from "./initial"
import { Actions } from "./actions"

export const temperature = {
  Initial,
  Actions
}

export const Temperature = ({ state, actions }) => html`
  <div>
    <div style="margin-top: 0.8rem">
      Temperature: ${state.temperature.value}&deg;${state.temperature.units}
    </div>
    <div style="margin-top: 0.8rem">
      <button
        class="btn btn-primary"
        @click=${() => actions.increment(1)}
        style="margin-right: 0.4rem"
      >
        Increment
      </button>
      <button
        class="btn btn-primary"
        @click=${() => actions.increment(-1)}
        style="margin-right: 0.4rem"
      >
        Decrement
      </button>
      <button class="btn btn-default" @click=${() => actions.changeUnits()}>
        Change Units
      </button>
    </div>
  </div>
`
