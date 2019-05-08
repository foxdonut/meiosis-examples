import { h } from "preact"
import Button from "preact-material-components/Button"
import Formfield from "preact-material-components/FormField"

import "preact-material-components/Button/style.css"
import "preact-material-components/FormField/style.css"
import "preact-material-components/Theme/style.css"

import { Initial } from "./initial"
import { Actions } from "./actions"

export const temperature = {
  Initial,
  Actions
}

export const Temperature = ({ state, actions }) => (
  <div>
    <div style={{ marginTop: "0.8rem" }}>
      <Formfield>
        <label>
          Temperature: {state.temperature.value}&deg; {state.temperature.units}
        </label>
      </Formfield>
    </div>
    <div style={{ marginTop: "0.8rem" }}>
      <Button raised onClick={() => actions.increment(1)} style={{ marginRight: "0.4rem" }}>
        Increment
      </Button>
      <Button raised onClick={() => actions.increment(-1)} style={{ marginRight: "0.4rem" }}>
        Decrement
      </Button>
      <Button outlined onClick={() => actions.changeUnits()}>
        Change Units
      </Button>
    </div>
  </div>
)
