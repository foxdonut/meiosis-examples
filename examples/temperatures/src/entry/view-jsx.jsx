import preact from "preact";
import objectPath from "object-path";

import { editEntryValue } from "./actions";

export const entryView = (model, update) => {
  const error = objectPath.get(model, "errors.value.0");

  return (<span>
    <span>Entry number:</span>
    <input type="text" size="2" value={model.value} onInput={editEntryValue(model, update)} />
    <span className="has-error"><span className="help-block">{error}</span></span>
  </span>);
};
