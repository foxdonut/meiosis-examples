import React from "react"

import { actions } from "./actions"

export const Temperature = ({ cell }) => (
  <div>
    <div style={{ marginTop: "0.8rem" }}>
      Temperature: {cell.state.value}&deg; {cell.state.units}
    </div>
    <div style={{ marginTop: "0.8rem" }}>
      <button
        className="btn btn-primary mr-4"
        onClick={() => actions.increment(cell, 1)}
        style={{ marginRight: "0.4rem" }}
      >
        Increment
      </button>
      <button
        className="btn btn-primary mr-4"
        onClick={() => actions.increment(cell, -1)}
        style={{ marginRight: "0.4rem" }}
      >
        Decrement
      </button>
      <button className="btn btn-secondary mr-4" onClick={() => actions.changeUnits(cell)}>
        Change Units
      </button>
    </div>
  </div>
)
