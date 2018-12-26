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
          <label style={{marginRight: "0.4rem"}}>Date:</label>
          <TextField type="date" size="10" value={state.dateTime.date}
            onChange={evt => actions.editDate(evt.target.value)}/>
        </Formfield>
        <Formfield>
          <label style={{marginRight: "0.4rem"}}>Hour:</label>
          <TextField size="3" value={state.dateTime.hour}
            onChange={evt => actions.editHour(evt.target.value)}/>
        </Formfield>
        <Formfield>
          <label style={{marginRight: "0.4rem"}}>Minute:</label>
          <TextField size="3" value={state.dateTime.minute}
            onChange={evt => actions.editMinute(evt.target.value)}/>
        </Formfield>
      </div>
    )
  }
}
