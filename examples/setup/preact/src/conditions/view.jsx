import { h } from "preact"
import Checkbox from "preact-material-components/Checkbox"
import Formfield from "preact-material-components/FormField"
import Radio from "preact-material-components/Radio"

import "preact-material-components/Checkbox/style.css"
import "preact-material-components/FormField/style.css"
import "preact-material-components/Radio/style.css"
import "preact-material-components/Theme/style.css"

import { actions } from "./actions"

const conditionsOption = ({ cell, value, label }) => (
  <Formfield>
    <Radio
      id={value}
      name="conditions"
      value={value}
      checked={cell.state.sky === value}
      onChange={evt => actions.changeSky(cell, evt.target.value)}
    />
    <label htmlFor={value}>{label}</label>
  </Formfield>
)

export const Conditions = ({ cell }) => (
  <div>
    <Formfield>
      <Checkbox
        checked={cell.state.precipitations}
        onChange={evt => actions.togglePrecipitations(cell, evt.target.checked)}
      />
      <label htmlFor="precipitations">Precipitations</label>
    </Formfield>
    <div>
      {conditionsOption({ cell, value: "SUNNY", label: "Sunny" })}
      {conditionsOption({ cell, value: "CLOUDY", label: "Cloudy" })}
      {conditionsOption({ cell, value: "MIX", label: "Mix of sun and clouds" })}
    </div>
  </div>
)
