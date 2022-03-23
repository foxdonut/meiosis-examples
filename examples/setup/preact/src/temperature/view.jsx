import { h } from "preact"
import Button from "preact-material-components/Button"
import Formfield from "preact-material-components/FormField"

import "preact-material-components/Button/style.css"
import "preact-material-components/FormField/style.css"
import "preact-material-components/Theme/style.css"

import { actions } from "./actions"

export const Temperature = ({ cell }) => (
  <div>
    <div style={{ marginTop: "0.8rem" }}>
      <Formfield>
        <label>
          Temperature: {cell.state.value}&deg; {cell.state.units}
        </label>
      </Formfield>
    </div>
    <div style={{ marginTop: "0.8rem" }}>
      <Button raised onClick={() => actions.increment(cell, 1)} style={{ marginRight: "0.4rem" }}>
        Increment
      </Button>
      <Button raised onClick={() => actions.increment(cell, -1)} style={{ marginRight: "0.4rem" }}>
        Decrement
      </Button>
      <Button outlined onClick={() => actions.changeUnits(cell)}>
        Change Units
      </Button>
    </div>
  </div>
)
