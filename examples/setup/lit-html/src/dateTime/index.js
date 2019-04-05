import { html } from "lit-html"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const dateTime = {
  initialState,
  actions
}

const getErrorMessage = (state, field) =>
  (state.errors && state.errors.dateTime && state.errors.dateTime[field]) || " "

const hasError = (state, field) => getErrorMessage(state, field).trim().length > 0

export const DateTime = ({ root }) => html`
  <div>
    <div class="form-group ${hasError(root.state, "date") ? "has-error" : ""}">
      <label>Date:</label>
      <input
        type="date"
        class="form-control"
        value=${root.state.dateTime.date}
        @change=${evt => root.update(actions.editDate(evt.target.value))}
      />
      <span class="help-block">${getErrorMessage(root.state, "date")}</span>
    </div>
    <div class="form-group ${hasError(root.state, "hour") ? "has-error" : ""}">
      <label>Hour:</label>
      <input
        type="text"
        class="form-control"
        value=${root.state.dateTime.hour}
        @change=${evt => root.update(actions.editHour(evt.target.value))}
      />
      <span class="help-block">${getErrorMessage(root.state, "hour")}</span>
    </div>
    <div class="form-group ${hasError(root.state, "minute") ? "has-error" : ""}">
      <label>Minute:</label>
      <input
        type="text"
        class="form-control"
        value=${root.state.dateTime.minute}
        @change=${evt => root.update(actions.editMinute(evt.target.value))}
      />
      <span class="help-block">${getErrorMessage(root.state, "minute")}</span>
    </div>
    <div>
      <button class="btn btn-default" @click=${() => root.update(actions.validate(root.state))}>
        Validate
      </button>
      <span style="margin-left: 0.4rem">${root.state.conditions.message}</span>
    </div>
  </div>
`
