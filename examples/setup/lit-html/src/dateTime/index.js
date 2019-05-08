import { html } from "lit-html"

import { Initial } from "./initial"
import { Actions } from "./actions"

export const dateTime = {
  Initial,
  Actions
}

const getErrorMessage = (state, field) =>
  (state.errors && state.errors.dateTime && state.errors.dateTime[field]) || " "

const hasError = (state, field) => getErrorMessage(state, field).trim().length > 0

export const DateTime = ({ state, actions }) => html`
  <div>
    <div class="form-group ${hasError(state, "date") ? "has-error" : ""}">
      <label>Date:</label>
      <input
        type="date"
        class="form-control"
        value=${state.dateTime.date}
        @change=${evt => actions.editDate(evt.target.value)}
      />
      <span class="help-block">${getErrorMessage(state, "date")}</span>
    </div>
    <div class="form-group ${hasError(state, "hour") ? "has-error" : ""}">
      <label>Hour:</label>
      <input
        type="text"
        class="form-control"
        value=${state.dateTime.hour}
        @change=${evt => actions.editHour(evt.target.value)}
      />
      <span class="help-block">${getErrorMessage(state, "hour")}</span>
    </div>
    <div class="form-group ${hasError(state, "minute") ? "has-error" : ""}">
      <label>Minute:</label>
      <input
        type="text"
        class="form-control"
        value=${state.dateTime.minute}
        @change=${evt => actions.editMinute(evt.target.value)}
      />
      <span class="help-block">${getErrorMessage(state, "minute")}</span>
    </div>
    <div>
      <button class="btn btn-default" @click=${() => actions.validate(state)}>
        Validate
      </button>
      <span style="margin-left: 0.4rem">${state.conditions.message}</span>
    </div>
  </div>
`
