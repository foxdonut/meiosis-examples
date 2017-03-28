import { h } from "preact";
import { createActions } from "./actions";

export const createEntryView = update => {
  const actions = createActions(update);

  return model => {
    const error = model.errors && model.errors.value[0];

    return h("div", {},
      h("span", {}, "Entry number:"),
      h("input", { type: "text", size: "2", value: model.value, onInput: actions.editEntryValue }),
      h("span", { class: "has-error" }, h("span", { class: "help-block" }, error))
    );
  };
};