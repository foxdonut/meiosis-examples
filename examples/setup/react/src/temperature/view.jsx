import React from "react"
import Button from "@material-ui/core/Button"

export const Temperature = ({ state, id, actions }) => (
  <div>
    <div style={{ marginTop: "0.8rem" }}>
      <label>
        Temperature: {state[id].value}&deg; {state[id].units}
      </label>
    </div>
    <div style={{ marginTop: "0.8rem" }}>
      <Button
        variant="contained"
        onClick={() => actions.increment(id, 1)}
        color="primary"
        style={{ marginRight: "0.4rem" }}
      >
        Increment
      </Button>
      <Button
        variant="contained"
        onClick={() => actions.increment(id, -1)}
        color="primary"
        style={{ marginRight: "0.4rem" }}
      >
        Decrement
      </Button>
      <Button variant="contained" onClick={() => actions.changeUnits(id)} color="secondary">
        Change Units
      </Button>
    </div>
  </div>
)
