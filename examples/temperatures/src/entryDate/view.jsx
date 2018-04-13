import preact from "preact";
import _ from "lodash";

export const createView = (actions, path) => model => (
  <div className="pure-control-group">
    <label htmlFor="date">{model.label}</label>
    <input id="date" type="text" size="10" value={model.value} onInput={actions.editDateValue} />
    <span className="pure-form-message-inline">{_.get(model, path)}</span>
  </div>
);
