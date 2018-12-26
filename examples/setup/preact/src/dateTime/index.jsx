import { h, Component } from "preact"
import Formfield from "preact-material-components/FormField"
import TextField from "preact-material-components/TextField"

import "preact-material-components/FormField/style.css"
import "preact-material-components/TextField/style.css"
import "preact-material-components/Theme/style.css"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const dateTime = {
  initialState,
  actions
}

export class DateTime extends Component {
  render() {
    const { state, actions } = this.props

    return (
      <div>
        <Formfield>
          <TextField label="Date:" type="date" value={state.dateTime.date}
            onChange={evt => actions.editDate(evt.target.value)}/>
        </Formfield>
        <Formfield>
          <TextField label="Hour:" value={state.dateTime.hour}
            onChange={evt => actions.editHour(evt.target.value)}/>
        </Formfield>
        <Formfield>
          <TextField label="Minute:" value={state.dateTime.minute}
            onChange={evt => actions.editMinute(evt.target.value)}/>
        </Formfield>
      </div>
    )
  }
}
