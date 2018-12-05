import preact, { Component } from "preact";
import _ from "lodash";
import { model } from "./model";

export const entryNumber = {
  model
};

export class EntryNumber extends Component {
  render(props) {
    const { model, id, actions } = props;
    return (
      <div className="pure-control-group">
        <label htmlFor="entry">Entry number:</label>
        <input id="entry" type="text" size="2" value={model[id].value}
          onInput={actions.editValue(id)} />
        <span className="pure-form-message-inline">
          {_.get(model, ["errors", id, "value"])}
        </span>
      </div>
    );
  }
}
