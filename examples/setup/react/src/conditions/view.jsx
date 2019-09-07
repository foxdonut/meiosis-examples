import React from "react"
import Checkbox from "@material-ui/core/Checkbox"
import Radio from "@material-ui/core/Radio"

const conditionsOption = ({ state, id, actions, value, label }) => (
  <span>
    <Radio
      id={value}
      name="conditions"
      value={value}
      checked={state[id].sky === value}
      onChange={evt => actions.changeSky(id, evt.target.value)}
    />
    <label htmlFor={value}>{label}</label>
  </span>
)

export const Conditions = ({ state, id, actions }) => (
  <div>
    <div>
      <Checkbox
        id="precipitations"
        checked={state[id].precipitations}
        onChange={evt => actions.togglePrecipitations(id, evt.target.checked)}
      />
      <label htmlFor="precipitations">Precipitations</label>
    </div>
    <div>
      {conditionsOption({ state, id, actions, value: "SUNNY", label: "Sunny" })}
      {conditionsOption({ state, id, actions, value: "CLOUDY", label: "Cloudy" })}
      {conditionsOption({ state, id, actions, value: "MIX", label: "Mix of sun and clouds" })}
    </div>
  </div>
)
