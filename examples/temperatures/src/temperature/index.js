import { h, Component } from "preact"
import { initialState } from "./initialState"
import { actions } from "./actions"

const marginRight = {
  marginRight: "4px"
}

export const temperature = {
  initialState,
  actions
}

export class Temperature extends Component {
  render(props) {
    const { state, id, actions } = props
    return (
      <div className="pure-control-group">
        <label>{state[id].label}</label>
        <span style={marginRight}>{state[id].value}</span>
        <button className="pure-button" onClick={actions.changeUnits(id)} style={marginRight}>
          {"\xB0" + state[id].units}
        </button>
        <button className="pure-button" onClick={actions.increase(id,  1)} style={marginRight}>
          +
        </button>
        <button className="pure-button" onClick={actions.increase(id, -1)}>
          -
        </button>
      </div>
    )
  }
}
