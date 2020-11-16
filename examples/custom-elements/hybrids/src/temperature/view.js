import { html } from "hybrids"

export const Temperature = {
  state: null,
  actions: null,
  render: ({ state, id, actions }) => html`
    <div>
      <div style="margin-top: 0.8rem">
        Temperature: ${state[id].value}&deg;${state[id].units}
      </div>
      <div style="margin-top: 0.8rem">
        <button
          class="btn btn-primary"
          onclick=${() => actions.increment(id, 1)}
          style="margin-right: 0.4rem"
        >
          Increment
        </button>
        <button
          class="btn btn-primary"
          onclick=${() => actions.increment(id, -1)}
          style="margin-right: 0.4rem"
        >
          Decrement
        </button>
        <button class="btn btn-default" onclick=${() => actions.changeUnits(id)}>
          Change Units
        </button>
      </div>
    </div>
  `
}
