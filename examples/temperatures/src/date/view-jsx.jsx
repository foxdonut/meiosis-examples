import preact from "preact";
import objectPath from "object-path";

import { editDateValue } from "./actions";

export const dateView = (model, update) => {
  const error = objectPath.get(model, "errors.value.0");

  return (<span>
    <span>Date:</span>
    <input type="text" size="10" value={model.value} onChange={editDateValue(model, update)} />
    <span className="has-error"><span className="help-block">{error}</span></span>
  </span>);
};
