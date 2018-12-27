import React, { Component } from "react"
import Button from "@material-ui/core/Button"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const temperature = {
  initialState,
  actions
}

export class Temperature extends Component {
  render() {
    const { state, id, actions } = this.props

    return (
      <div>
        <div style={{marginTop: "0.8rem"}}>
          <label>
            Temperature: {state[id].value}&deg;{state[id].units}
          </label>
        </div>
        <div style={{marginTop: "0.8rem"}}>
          <Button variant="contained" onClick={() => actions.increment(id, 1)}
            color="primary" style={{marginRight: "0.4rem"}}>Increment</Button>
          <Button variant="contained" onClick={() => actions.increment(id,-1)}
            color="primary" style={{marginRight: "0.4rem"}}>Decrement</Button>
          <Button variant="contained" onClick={() => actions.changeUnits(id)}
            color="secondary">Change Units</Button>
        </div>
      </div>
    )
  }
}
