import { h, Component } from "preact"
import _ from "lodash"
import { initialState } from "./initialState"

export const entryNumber = {
  initialState
}

export class EntryNumber extends Component {
  render(props) {
    const { state, id, actions } = props
    return (
      <div className="pure-control-group">
        <label htmlFor="entry">Entry number:</label>
        <input id="entry" type="text" size="2" value={state[id].value}
          onInput={actions.editValue(id)} />
        <span className="pure-form-message-inline">
          {_.get(state, ["errors", id, "value"])}
        </span>
      </div>
    )
  }
}
