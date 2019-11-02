import _ from "lodash/fp"
import { h } from "preact"
import Button from "preact-material-components/Button"
import Formfield from "preact-material-components/FormField"
import TextField from "preact-material-components/TextField"

import "preact-material-components/Button/style.css"
import "preact-material-components/FormField/style.css"
import "preact-material-components/TextField/style.css"
import "preact-material-components/Theme/style.css"

const getErrorMessage = (state, field) => _.get(["errors", "dateTime", field], state) || " "

export const DateTime = ({ state, id, actions }) => (
  <div>
    <Formfield>
      <TextField
        label="Date:"
        type="date"
        value={state[id].date}
        required
        helperText={getErrorMessage(state, "date")}
        helperTextPersistent={true}
        helperTextValidationMsg={true}
        onInput={evt => actions.editDate(id, evt.target.value)}
      />
    </Formfield>
    <Formfield>
      <TextField
        label="Hour:"
        value={state[id].hour}
        required
        helperText={getErrorMessage(state, "hour")}
        helperTextPersistent={true}
        helperTextValidationMsg={true}
        onInput={evt => actions.editHour(id, evt.target.value)}
      />
    </Formfield>
    <Formfield>
      <TextField
        label="Minute:"
        value={state[id].minute}
        required
        helperText={getErrorMessage(state, "minute")}
        helperTextPersistent={true}
        helperTextValidationMsg={true}
        onInput={evt => actions.editMinute(id, evt.target.value)}
      />
    </Formfield>
    <div>
      <Button ripple onClick={() => actions.validate()}>
        Validate
      </Button>
      <span style={{ marginLeft: "0.4rem" }}>{state.message}</span>
    </div>
  </div>
)
