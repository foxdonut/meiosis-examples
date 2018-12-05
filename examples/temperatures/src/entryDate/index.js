import preact, { Component } from "preact";
import _ from "lodash";
import { model } from "./model";

export const entryDate = {
  model
};

export class EntryDate extends Component {
  render(props) {
    const { model, id, actions } = props;
    return (
      <div className="pure-control-group">
        <label htmlFor="date">{model[id].label}</label>
        <input id="date" type="text" size="10" value={model[id].value}
          onInput={actions.editValue(id)} />
        <span className="pure-form-message-inline">
          {_.get(model, ["errors", id, "value"])}
        </span>
      </div>
    );
  }
}
