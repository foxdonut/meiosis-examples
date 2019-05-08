import _ from "lodash"
import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

import { Initial } from "./initial"
import { Actions } from "./actions"

export const dateTime = {
  Initial,
  Actions
}

const getErrorMessage = (state, field) => _.get(state, ["errors", "dateTime", field]) || " "

export const DateTime = ({ state, actions }) => (
  <div>
    <TextField
      label="Date:"
      type="date"
      value={state.dateTime.date}
      required
      helperText={getErrorMessage(state, "date")}
      onChange={evt => actions.editDate(evt.target.value)}
    />
    <TextField
      label="Hour:"
      value={state.dateTime.hour}
      required
      helperText={getErrorMessage(state, "hour")}
      onChange={evt => actions.editHour(evt.target.value)}
    />
    <TextField
      label="Minute:"
      value={state.dateTime.minute}
      required
      helperText={getErrorMessage(state, "minute")}
      onChange={evt => actions.editMinute(evt.target.value)}
    />
    <div>
      <Button variant="outlined" onClick={() => actions.validate()}>
        Validate
      </Button>
      <span style={{ marginLeft: "0.4rem" }}>{state.conditions.message}</span>
    </div>
  </div>
)
