import { LitElement, html } from "lit-element"

import { bootstrap } from "../util"

export class DateTime extends LitElement {
  static get properties() {
    return {
      state: { type: Object },
      id: { type: String },
      actions: { type: Object }
    }
  }
  render() {
    const { state, id, actions } = this

    return html`
      ${bootstrap}
      <div>
        <div class="form-group">
          <label>Date:</label>
          <input
            type="date"
            class="form-control"
            .value=${state[id].date}
            @input=${evt => actions.editDate(id, evt.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Hour:</label>
          <input
            type="text"
            class="form-control"
            .value=${state[id].hour}
            @input=${evt => actions.editHour(id, evt.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Minute:</label>
          <input
            type="text"
            class="form-control"
            .value=${state[id].minute}
            @input=${evt => actions.editMinute(id, evt.target.value)}
          />
        </div>
      </div>
    `
  }
}
