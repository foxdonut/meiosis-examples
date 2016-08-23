import React from "react";
import jsnox from "jsnox";
import objectPath from "object-path";

import Action from "./actions";

const h = jsnox(React);

const view = (model, propose) => {
  const onChange = evt => propose(Action.EditDateValue(evt.target.value));

  const error = objectPath.get(model, ["store", "errors", "store.date.value"]);

  return h("div",
    h("span", "Date:"),
    h("input:text", { value: model.store.date.value, onChange: onChange }),
    h("span.has-error", h("span.help-block", error))
  );
};

export default view;
