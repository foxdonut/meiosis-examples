import _ from "lodash/fp"
import { h } from "preact"
import Button from "preact-material-components/Button"
import Formfield from "preact-material-components/FormField"
import TextField from "preact-material-components/TextField"

import "preact-material-components/Button/style.css"
import "preact-material-components/FormField/style.css"
import "preact-material-components/TextField/style.css"
import "preact-material-components/Theme/style.css"

import { actions } from "./actions"

const getErrorMessage = (state, field) => _.get(["errors", "dateTime", field], state) || " "

export const DateTime = ({ cell }) => (
  <div>
    <Formfield>
      <TextField
        label="Date:"
        type="date"
        value={cell.state.date}
        required
        helperText={getErrorMessage(cell.state, "date")}
        helperTextPersistent={true}
        helperTextValidationMsg={true}
        onInput={evt => actions.editDate(cell, evt.target.value)}
      />
    </Formfield>
    <Formfield>
      <TextField
        label="Hour:"
        value={cell.state.hour}
        required
        helperText={getErrorMessage(cell.state, "hour")}
        helperTextPersistent={true}
        helperTextValidationMsg={true}
        onInput={evt => actions.editHour(cell, evt.target.value)}
      />
    </Formfield>
    <Formfield>
      <TextField
        label="Minute:"
        value={cell.state.minute}
        required
        helperText={getErrorMessage(cell.state, "minute")}
        helperTextPersistent={true}
        helperTextValidationMsg={true}
        onInput={evt => actions.editMinute(cell, evt.target.value)}
      />
    </Formfield>
    <div>
      <Button ripple onClick={() => actions.validate(cell)}>
        Validate
      </Button>
      <span style={{ marginLeft: "0.4rem" }}>{cell.state.message}</span>
    </div>
  </div>
)
