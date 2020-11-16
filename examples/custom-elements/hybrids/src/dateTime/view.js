import { html } from "hybrids"

import { bootstrap } from "../util"

export const DateTime = {
  state: null,
  actions: null,
  render: ({ state, id, actions }) => html`
    ${bootstrap}
    <div>
      <div class="form-group">
        <label>Date:</label>
        <input
          type="date"
          class="form-control"
          value=${state[id].date}
          oninput=${(_, evt) => actions.editDate(id, evt.target.value)}
        />
      </div>
      <div class="form-group">
        <label>Hour:</label>
        <input
          type="text"
          class="form-control"
          value=${state[id].hour}
          oninput=${(_, evt) => actions.editHour(id, evt.target.value)}
        />
      </div>
      <div class="form-group">
        <label>Minute:</label>
        <input
          type="text"
          class="form-control"
          value=${state[id].minute}
          oninput=${(_, evt) => actions.editMinute(id, evt.target.value)}
        />
      </div>
    </div>
  `
}
