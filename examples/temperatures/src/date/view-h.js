import { h } from "preact";
import { createActions } from "./actions";

export const createDateView = update => {
  const actions = createActions(update);

  return model => {
    const error = model.errors && model.errors.value[0];

    return h("div", {},
      h("span", {}, "Date:"),
      h("input", { type: "text", size: "10", value: model.value, onInput: actions.editDateValue }),
      h("span", { class: "has-error" }, h("span", { class: "help-block" }, error))
    );
  };
};
