import React from "react";
import objectPath from "object-path";

import Action from "./actions";

const view = (model, propose) => {
  const onChange = evt => propose(Action.EditEntryValue(evt.target.value));

  const error = objectPath.get(model, "errors.value.0");

  return (<span>
    <span>Entry number:</span>
    <input type="text" size="2" value={model.value} onChange={onChange} />
    <span className="has-error"><span className="help-block">{error}</span></span>
  </span>);
};

export default view;
