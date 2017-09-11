import preact from "preact";

export const createView = actions => model => (
  <div className="pure-control-group">
    <label htmlFor="entry">Entry number:</label>
    <input id="entry" type="text" size="2" value={model.value} onInput={actions.editEntryValue} />
    <span className="pure-form-message-inline">{model.errors && model.errors.value[0]}</span>
  </div>
);
