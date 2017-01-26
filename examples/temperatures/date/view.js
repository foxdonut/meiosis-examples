import { propose } from "meiosis";
import { h } from "preact";
import objectPath from "object-path";

import { Action } from "./actions";

export const dateView = model => {
  const onInput = evt => propose(Action.EditDateValue(evt.target.value));

  const error = objectPath.get(model, "errors.value.0");

  return h("span", {},
    h("span", {}, "Date:"),
    h("input", { type: "text", size: "10", value: model.value, onInput: onInput }),
    h("span", { class: "has-error" }, h("span", { class: "help-block" }, error))
  );
};
