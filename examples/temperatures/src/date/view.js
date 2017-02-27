import { h } from "preact";
import objectPath from "object-path";

import { dateIntents } from "./actions";

export const dateView = model => {
  const error = objectPath.get(model, "errors.value.0");

  return h("span", {},
    h("span", {}, "Date:"),
    h("input", { type: "text", size: "10", value: model.value, onInput: dateIntents.editDateValue }),
    h("span", { class: "has-error" }, h("span", { class: "help-block" }, error))
  );
};
