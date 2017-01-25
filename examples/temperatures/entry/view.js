import { propose } from "meiosis";
import preact from "preact";
import jsnox from "jsnox";
import objectPath from "object-path";

import { Action } from "./actions";

const h = jsnox(preact);

export const entryView = model => {
  const onInput = evt => propose(Action.EditEntryValue(evt.target.value));

  const error = objectPath.get(model, "errors.value.0");

  return h("span",
    h("span", "Entry number:"),
    h("input:text[size=2]", { value: model.value, onInput: onInput }),
    h("span.has-error", h("span.help-block", error))
  );
};
