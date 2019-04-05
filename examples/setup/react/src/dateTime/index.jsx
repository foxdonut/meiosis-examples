import _ from "lodash"
import React, { Component } from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const dateTime = {
  initialState,
  actions
}

const getErrorMessage = (state, field) => _.get(state, ["errors", "dateTime", field]) || " "

export class DateTime extends Component {
  render() {
    const { root } = this.props

    return (
      <div>
        <TextField
          label="Date:"
          type="date"
          value={root.state.dateTime.date}
          required
          helperText={getErrorMessage(root.state, "date")}
          onChange={evt => root.update(actions.editDate(evt.target.value))}
        />
        <TextField
          label="Hour:"
          value={root.state.dateTime.hour}
          required
          helperText={getErrorMessage(root.state, "hour")}
          onChange={evt => root.update(actions.editHour(evt.target.value))}
        />
        <TextField
          label="Minute:"
          value={root.state.dateTime.minute}
          required
          helperText={getErrorMessage(root.state, "minute")}
          onChange={evt => root.update(actions.editMinute(evt.target.value))}
        />
        <div>
          <Button variant="outlined" onClick={() => root.update(actions.validate())}>
            Validate
          </Button>
          <span style={{ marginLeft: "0.4rem" }}>{root.state.conditions.message}</span>
        </div>
      </div>
    )
  }
}
