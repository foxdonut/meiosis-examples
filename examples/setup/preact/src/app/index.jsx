import { h, Component } from "preact"
import Button from "preact-material-components/Button"
import Checkbox from "preact-material-components/Checkbox"
import Formfield from "preact-material-components/FormField"
import Radio from "preact-material-components/Radio"
import TextField from "preact-material-components/TextField"

import "preact-material-components/Button/style.css"
import "preact-material-components/Checkbox/style.css"
import "preact-material-components/FormField/style.css"
import "preact-material-components/Radio/style.css"
import "preact-material-components/TextField/style.css"
import "preact-material-components/Theme/style.css"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const app = {
  initialState,
  actions
}

const precipitationOption = ({ state, actions, id, value, label }) => (
  <Formfield>
    <Radio id={id} name="precipitation" value={value}
      checked={state.precipitation === value}
      onChange={actions.changePrecipitation}/>
    <label htmlFor={id}>{label}</label>
  </Formfield>
)

export class App extends Component {
  componentWillMount() {
    this.props.states.map(state => {
      this.setState(state)
    })
  }

  render() {
    const state = this.state
    const { actions } = this.props

    return (
      <div>
        <Formfield>
          <Checkbox id="precipitations" checked={state.precipitations}
            onChange={actions.togglePrecipitations}/>
          <label htmlFor="precipitations">Precipitations</label>
        </Formfield>
        <div>
          {precipitationOption({ state, actions, id: "rain", value: "RAIN", label: "Rain"})}
          {precipitationOption({ state, actions, id: "snow", value: "SNOW", label: "Snow"})}
          {precipitationOption({ state, actions, id: "sleet", value: "SLEET", label: "Sleet"})}
        </div>
        <Formfield>
          <label style={{marginRight: "0.4rem"}}>Date:</label>
          <TextField type="date" size="10" value={state.date} onChange={actions.editDate}/>
        </Formfield>
        <div style={{marginTop: "0.8rem"}}>
          <Formfield>
            <label>
              Temperature: {state.value}&deg;{state.units}
            </label>
          </Formfield>
        </div>
        <div style={{marginTop: "0.8rem"}}>
          <Button raised onClick={() => actions.increment( 1)}
            style={{marginRight: "0.4rem"}}>Increment</Button>
          <Button raised onClick={() => actions.increment(-1)}
            style={{marginRight: "0.4rem"}}>Decrement</Button>
          <Button outlined onClick={actions.changeUnits}>Change Units</Button>
        </div>
      </div>
    )
  }
}
