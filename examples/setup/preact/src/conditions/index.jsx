import { h, Component } from "preact"
import Checkbox from "preact-material-components/Checkbox"
import Formfield from "preact-material-components/FormField"
import Radio from "preact-material-components/Radio"

import "preact-material-components/Checkbox/style.css"
import "preact-material-components/FormField/style.css"
import "preact-material-components/Radio/style.css"
import "preact-material-components/Theme/style.css"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const conditions = {
  initialState,
  actions
}

const conditionsOption = ({ root, value, label }) => (
  <Formfield>
    <Radio
      id={value}
      name="conditions"
      value={value}
      checked={root.state.conditions.sky === value}
      onChange={evt => root.update(actions.changeSky(evt.target.value))}
    />
    <label htmlFor={value}>{label}</label>
  </Formfield>
)

export class Conditions extends Component {
  render() {
    const { root } = this.props

    return (
      <div>
        <Formfield>
          <Checkbox
            id="precipitations"
            checked={root.state.conditions.precipitations}
            onChange={evt => root.update(actions.togglePrecipitations(evt.target.checked))}
          />
          <label htmlFor="precipitations">Precipitations</label>
        </Formfield>
        <div>
          {conditionsOption({ root, value: "SUNNY", label: "Sunny" })}
          {conditionsOption({ root, value: "CLOUDY", label: "Cloudy" })}
          {conditionsOption({ root, value: "MIX", label: "Mix of sun and clouds" })}
        </div>
      </div>
    )
  }
}
