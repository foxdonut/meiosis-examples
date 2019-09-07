import { h } from "preact"
import Checkbox from "preact-material-components/Checkbox"
import Formfield from "preact-material-components/FormField"
import Radio from "preact-material-components/Radio"

import "preact-material-components/Checkbox/style.css"
import "preact-material-components/FormField/style.css"
import "preact-material-components/Radio/style.css"
import "preact-material-components/Theme/style.css"

const conditionsOption = ({ state, id, actions, value, label }) => (
  <Formfield>
    <Radio
      id={value}
      name="conditions"
      value={value}
      checked={state[id].sky === value}
      onChange={evt => actions.changeSky(id, evt.target.value)}
    />
    <label htmlFor={value}>{label}</label>
  </Formfield>
)

export const Conditions = ({ state, id, actions }) => (
  <div>
    <Formfield>
      <Checkbox
        id="precipitations"
        checked={state[id].precipitations}
        onChange={evt => actions.togglePrecipitations(id, evt.target.checked)}
      />
      <label htmlFor="precipitations">Precipitations</label>
    </Formfield>
    <div>
      {conditionsOption({ state, id, actions, value: "SUNNY", label: "Sunny" })}
      {conditionsOption({ state, id, actions, value: "CLOUDY", label: "Cloudy" })}
      {conditionsOption({ state, id, actions, value: "MIX", label: "Mix of sun and clouds" })}
    </div>
  </div>
)
