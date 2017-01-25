import { propose } from "meiosis";
import { h } from "preact";
import objectPath from "object-path";

import { Action } from "./actions";

export const entryView = model => {
  const onChange = evt => propose(Action.EditEntryValue(evt.target.value));

  const error = objectPath.get(model, "errors.value.0");

  return (<span>
    <span>Entry number:</span>
    <input type="text" size="2" value={model.value} onInput={onChange} />
    <span className="has-error"><span className="help-block">{error}</span></span>
  </span>);
};
