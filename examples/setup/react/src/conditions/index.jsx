import React, { Component } from "react"
import Checkbox from "@material-ui/core/Checkbox"
import Radio from "@material-ui/core/Radio"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const conditions = {
  initialState,
  actions
}

const conditionsOption = ({ root, value, label }) => (
  <span>
    <Radio
      id={value}
      name="conditions"
      value={value}
      checked={root.state.conditions.sky === value}
      onChange={evt => root.update(actions.changeSky(evt.target.value))}
    />
    <label htmlFor={value}>{label}</label>
  </span>
)

export class Conditions extends Component {
  render() {
    const { root } = this.props

    return (
      <div>
        <div>
          <Checkbox
            id="precipitations"
            checked={root.state.conditions.precipitations}
            onChange={evt => root.update(actions.togglePrecipitations(evt.target.checked))}
          />
          <label htmlFor="precipitations">Precipitations</label>
        </div>
        <div>
          {conditionsOption({ root, value: "SUNNY", label: "Sunny" })}
          {conditionsOption({ root, value: "CLOUDY", label: "Cloudy" })}
          {conditionsOption({ root, value: "MIX", label: "Mix of sun and clouds" })}
        </div>
      </div>
    )
  }
}
