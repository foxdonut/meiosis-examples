import { h } from "preact"

import { actions } from "./actions"

export const Temperature = ({ cell }) => (
  <div>
    <div style={{ marginTop: "0.8rem" }}>
      <label>
        Temperature: {cell.state.value}&deg; {cell.state.units}
      </label>
    </div>
    <div style={{ marginTop: "0.8rem" }}>
      <button
        className="btn btn-primary"
        onClick={() => actions.increment(cell, 1)}
        style={{ marginRight: "0.4rem" }}
      >
        Increment
      </button>
      <button
        className="btn btn-primary"
        onClick={() => actions.increment(cell, -1)}
        style={{ marginRight: "0.4rem" }}
      >
        Decrement
      </button>
      <button className="btn btn-secondary" onClick={() => actions.changeUnits(cell)}>
        Change Units
      </button>
    </div>
  </div>
)
