import React from "react";
import jsnox from "jsnox";

import Action from "./actions";

const h = jsnox(React);

const view = (model, propose) => {
  const onChange = evt => propose(Action.EditDateValue(evt.target.value));

  return h("div",
    h("span", "Date:"),
    h("input:text", { value: model.store.date.value, onChange: onChange }),
    h("span.has-error", h("span.help-block", model.store.date.error))
  );
};

export default view;
