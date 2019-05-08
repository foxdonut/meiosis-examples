import React from "react"
import Button from "@material-ui/core/Button"

import { Initial } from "./initial"
import { Actions } from "./actions"

export const temperature = {
  Initial,
  Actions
}

export const Temperature = ({ state, actions }) => (
  <div>
    <div style={{ marginTop: "0.8rem" }}>
      <label>
        Temperature: {state.temperature.value}&deg; {state.temperature.units}
      </label>
    </div>
    <div style={{ marginTop: "0.8rem" }}>
      <Button
        variant="contained"
        onClick={() => actions.increment(1)}
        color="primary"
        style={{ marginRight: "0.4rem" }}
      >
        Increment
      </Button>
      <Button
        variant="contained"
        onClick={() => actions.increment(-1)}
        color="primary"
        style={{ marginRight: "0.4rem" }}
      >
        Decrement
      </Button>
      <Button variant="contained" onClick={() => actions.changeUnits()} color="secondary">
        Change Units
      </Button>
    </div>
  </div>
)
