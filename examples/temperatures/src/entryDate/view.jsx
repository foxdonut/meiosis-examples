import preact from "preact";

export const createView = actions => model => (
  <div className="pure-control-group">
    <label htmlFor="date">{model.label}</label>
    <input id="date" type="text" size="10" value={model.value} onInput={actions.editDateValue} />
    <span className="pure-form-message-inline">{model.errors.value}</span>
  </div>
);
