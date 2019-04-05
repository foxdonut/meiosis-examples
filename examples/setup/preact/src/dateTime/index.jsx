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

const getErrorMessage = (state, field) => _.get(state, ["errors", "dateTime", field]) || " "

export class DateTime extends Component {
  render() {
    const { root } = this.props

    return (
      <div>
        <Formfield>
          <TextField
            label="Date:"
            type="date"
            value={root.state.dateTime.date}
            required
            helperText={getErrorMessage(root.state, "date")}
            helperTextPersistent={true}
            helperTextValidationMsg={true}
            onChange={evt => root.update(actions.editDate(evt.target.value))}
          />
        </Formfield>
        <Formfield>
          <TextField
            label="Hour:"
            value={root.state.dateTime.hour}
            required
            helperText={getErrorMessage(root.state, "hour")}
            helperTextPersistent={true}
            helperTextValidationMsg={true}
            onChange={evt => root.update(actions.editHour(evt.target.value))}
          />
        </Formfield>
        <Formfield>
          <TextField
            label="Minute:"
            value={root.state.dateTime.minute}
            required
            helperText={getErrorMessage(root.state, "minute")}
            helperTextPersistent={true}
            helperTextValidationMsg={true}
            onChange={evt => root.update(actions.editMinute(evt.target.value))}
          />
        </Formfield>
        <div>
          <Button ripple onClick={() => root.update(actions.validate())}>
            Validate
          </Button>
          <span style={{ marginLeft: "0.4rem" }}>{root.state.conditions.message}</span>
        </div>
      </div>
    )
  }
}
