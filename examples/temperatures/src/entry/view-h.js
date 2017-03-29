import { h } from "preact";
import { createActions } from "./actions";

export const createEntryView = update => {
  const actions = createActions(update);

  return model => {
    const error = model.errors && model.errors.value[0];

    return h("div", { class: "clearfix mb1" },
      h("label", { class: "right col col-2" }, "Entry number:"),
      h("input", { class: "field", type: "text", size: "2", value: model.value, onInput: actions.editEntryValue }),
      h("div", { class: "col-right col-10 red" }, error)
    );
  };
};