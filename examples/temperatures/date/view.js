import { propose } from "meiosis";
import preact from "preact";
import jsnox from "jsnox";
import objectPath from "object-path";

import { Action } from "./actions";

const h = jsnox(preact);

export const dateView = model => {
  const onChange = evt => propose(Action.EditDateValue(evt.target.value));

  const error = objectPath.get(model, "errors.value.0");

  return h("span",
    h("span", "Date:"),
    h("input:text[size=10]", { value: model.value, onChange: onChange }),
    h("span.has-error", h("span.help-block", error))
  );
};
