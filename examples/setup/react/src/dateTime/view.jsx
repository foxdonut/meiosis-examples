import _ from "lodash/fp"
import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

const getErrorMessage = (state, field) => _.get(["errors", "dateTime", field], state) || " "

export const DateTime = ({ state, id, actions }) => (
  <div>
    <TextField
      label="Date:"
      type="date"
      value={state[id].date}
      required
      helperText={getErrorMessage(state, "date")}
      onChange={evt => actions.editDate(id, evt.target.value)}
    />
    <TextField
      label="Hour:"
      value={state[id].hour}
      required
      helperText={getErrorMessage(state, "hour")}
      onChange={evt => actions.editHour(id, evt.target.value)}
    />
    <TextField
      label="Minute:"
      value={state[id].minute}
      required
      helperText={getErrorMessage(state, "minute")}
      onChange={evt => actions.editMinute(id, evt.target.value)}
    />
    <div>
      <Button variant="outlined" onClick={() => actions.validate()}>
        Validate
      </Button>
      <span style={{ marginLeft: "0.4rem" }}>{state.message}</span>
    </div>
  </div>
)
