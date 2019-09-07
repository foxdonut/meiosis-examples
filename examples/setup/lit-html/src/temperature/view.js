import { html } from "lit-html"

export const Temperature = ({ state, id, actions }) => html`
  <div>
    <div style="margin-top: 0.8rem">
      Temperature: ${state[id].value}&deg;${state[id].units}
    </div>
    <div style="margin-top: 0.8rem">
      <button
        class="btn btn-primary"
        @click=${() => actions.increment(id, 1)}
        style="margin-right: 0.4rem"
      >
        Increment
      </button>
      <button
        class="btn btn-primary"
        @click=${() => actions.increment(id, -1)}
        style="margin-right: 0.4rem"
      >
        Decrement
      </button>
      <button class="btn btn-default" @click=${() => actions.changeUnits(id)}>
        Change Units
      </button>
    </div>
  </div>
`
