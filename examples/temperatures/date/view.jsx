import { propose } from "meiosis";
import { h } from "preact";
import objectPath from "object-path";

import { Action } from "./actions";

export const dateView = model => {
  const onChange = evt => propose(Action.EditDateValue(evt.target.value));

  const error = objectPath.get(model, "errors.value.0");

  return (<span>
    <span>Date:</span>
    <input type="text" size="10" value={model.value} onChange={onChange} />
    <span className="has-error"><span className="help-block">{error}</span></span>
  </span>);
};
