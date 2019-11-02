import { html } from "lit-html"

const getErrorMessage = (state, field) =>
  (state.errors && state.errors.dateTime && state.errors.dateTime[field]) || " "

const hasError = (state, field) => getErrorMessage(state, field).trim().length > 0

export const DateTime = ({ state, id, actions }) => html`
  <div>
    <div class="form-group ${hasError(state, "date") ? "has-error" : ""}">
      <label>Date:</label>
      <input
        type="date"
        class="form-control"
        value=${state[id].date}
        @input=${evt => actions.editDate(id, evt.target.value)}
      />
      <span class="help-block">${getErrorMessage(state, "date")}</span>
    </div>
    <div class="form-group ${hasError(state, "hour") ? "has-error" : ""}">
      <label>Hour:</label>
      <input
        type="text"
        class="form-control"
        value=${state[id].hour}
        @input=${evt => actions.editHour(id, evt.target.value)}
      />
      <span class="help-block">${getErrorMessage(state, "hour")}</span>
    </div>
    <div class="form-group ${hasError(state, "minute") ? "has-error" : ""}">
      <label>Minute:</label>
      <input
        type="text"
        class="form-control"
        value=${state[id].minute}
        @input=${evt => actions.editMinute(id, evt.target.value)}
      />
      <span class="help-block">${getErrorMessage(state, "minute")}</span>
    </div>
    <div>
      <button class="btn btn-default" @click=${() => actions.validate(state)}>
        Validate
      </button>
      <span style="margin-left: 0.4rem">${state.message}</span>
    </div>
  </div>
`
