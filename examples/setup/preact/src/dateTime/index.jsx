import _ from "lodash"
import { h, Component } from "preact"
import Button from "preact-material-components/Button"
import Formfield from "preact-material-components/FormField"
import TextField from "preact-material-components/TextField"

import "preact-material-components/Button/style.css"
import "preact-material-components/FormField/style.css"
import "preact-material-components/TextField/style.css"
import "preact-material-components/Theme/style.css"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const dateTime = {
  initialState,
  actions
}

const getErrorMessage = (state, field) =>
  _.get(state, ["errors", "dateTime", field]) || " "

export class DateTime extends Component {
  render() {
    const { state, actions } = this.props

    return (
      <div>
        <Formfield>
          <TextField label="Date:" type="date" value={state.dateTime.date} required
            helperText={getErrorMessage(state, "date")} helperTextPersistent={true}
            helperTextValidationMsg={true}
            onChange={evt => actions.editDate(evt.target.value)}/>
        </Formfield>
        <Formfield>
          <TextField label="Hour:" value={state.dateTime.hour} required
            helperText={getErrorMessage(state, "hour")} helperTextPersistent={true}
            helperTextValidationMsg={true}
            onChange={evt => actions.editHour(evt.target.value)}/>
        </Formfield>
        <Formfield>
          <TextField label="Minute:" value={state.dateTime.minute} required
            helperText={getErrorMessage(state, "minute")} helperTextPersistent={true}
            helperTextValidationMsg={true}
            onChange={evt => actions.editMinute(evt.target.value)}/>
        </Formfield>
        <div>
          <Button ripple onClick={() => actions.validate()}>Validate</Button>
          <span style={{marginLeft: "0.4rem"}}>{state.conditions.message}</span>
        </div>
      </div>
    )
  }
}
