import { h } from "preact";
import objectPath from "object-path";

import { entryIntents } from "./actions";

export const entryView = model => {
  const error = objectPath.get(model, "errors.value.0");

  return h("span", {},
    h("span", {}, "Entry number:"),
    h("input", { type: "text", size: "2", value: model.value, onInput: entryIntents.editEntryValue }),
    h("span", { class: "has-error" }, h("span", { class: "help-block" }, error))
  );
};
