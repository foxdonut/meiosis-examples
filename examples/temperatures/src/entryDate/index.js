import { h, Component } from "preact"
import _ from "lodash"
import { initialState } from "./initialState"

export const entryDate = {
  initialState
}

export class EntryDate extends Component {
  render(props) {
    const { state, id, actions } = props
    return (
      <div className="pure-control-group">
        <label htmlFor="date">{state[id].label}</label>
        <input id="date" type="text" size="10" value={state[id].value}
          onInput={actions.editValue(id)} />
        <span className="pure-form-message-inline">
          {_.get(state, ["errors", id, "value"])}
        </span>
      </div>
    )
  }
}
