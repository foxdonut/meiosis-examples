import preact from "preact";
import objectPath from "object-path";

import { entryIntents } from "./actions";

export const entryView = model => {
  const error = objectPath.get(model, "errors.value.0");

  return (<span>
    <span>Entry number:</span>
    <input type="text" size="2" value={model.value} onInput={entryIntents.editEntryValue} />
    <span className="has-error"><span className="help-block">{error}</span></span>
  </span>);
};
