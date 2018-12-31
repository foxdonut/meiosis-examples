import React, { Component } from "react"
import Checkbox from "@material-ui/core/Checkbox"
import Radio from "@material-ui/core/Radio"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const conditions = {
  initialState,
  actions
}

const conditionsOption = ({ state, actions, value, label }) => (
  <span>
    <Radio id={value} name="conditions" value={value}
      checked={state.conditions.sky === value}
      onChange={evt => actions.changeSky(evt.target.value)}/>
    <label htmlFor={value}>{label}</label>
  </span>
)

export class Conditions extends Component {
  render() {
    const { state, actions } = this.props

    return (
      <div>
        <div>
          <Checkbox id="precipitations" checked={state.conditions.precipitations}
            onChange={evt => actions.togglePrecipitations(evt.target.checked)}/>
          <label htmlFor="precipitations">Precipitations</label>
        </div>
        <div>
          {conditionsOption({ state, actions, value: "SUNNY", label: "Sunny" })}
          {conditionsOption({ state, actions, value: "CLOUDY", label: "Cloudy" })}
          {conditionsOption({ state, actions, value: "MIX", label: "Mix of sun and clouds" })}
        </div>
      </div>
    )
  }
}
