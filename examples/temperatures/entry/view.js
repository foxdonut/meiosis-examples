import React from "react";
import jsnox from "jsnox";
import objectPath from "object-path";

import Action from "./actions";

const h = jsnox(React);

const view = (model, propose) => {
  const onChange = evt => propose(Action.EditEntryValue(evt.target.value));

  const error = objectPath.get(model, "errors.value.0");

  return h("span",
    h("span", "Entry number:"),
    h("input:text[size=2]", { value: model.value, onChange: onChange }),
    h("span.has-error", h("span.help-block", error))
  );
};

export default view;
