import { h } from "preact"
import Button from "preact-material-components/Button"
import Formfield from "preact-material-components/FormField"

import "preact-material-components/Button/style.css"
import "preact-material-components/FormField/style.css"
import "preact-material-components/Theme/style.css"

export const Temperature = ({ state, id, actions }) => (
  <div>
    <div style={{ marginTop: "0.8rem" }}>
      <Formfield>
        <label>
          Temperature: {state[id].value}&deg; {state[id].units}
        </label>
      </Formfield>
    </div>
    <div style={{ marginTop: "0.8rem" }}>
      <Button raised onClick={() => actions.increment(id, 1)} style={{ marginRight: "0.4rem" }}>
        Increment
      </Button>
      <Button raised onClick={() => actions.increment(id, -1)} style={{ marginRight: "0.4rem" }}>
        Decrement
      </Button>
      <Button outlined onClick={() => actions.changeUnits(id)}>
        Change Units
      </Button>
    </div>
  </div>
)
