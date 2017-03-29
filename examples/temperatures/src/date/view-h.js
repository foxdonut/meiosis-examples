import { h } from "preact";
import { createActions } from "./actions";

export const createDateView = update => {
  const actions = createActions(update);

  return model => {
    const error = model.errors && model.errors.value[0];

    return h("div", { class: "clearfix mb1" },
      h("label", { class: "right col col-2" }, "Date:"),
      h("input", { class: "field", type: "text", size: "10", value: model.value, onInput: actions.editDateValue }),
      h("div", { class: "col-right col-10 red" }, error)
    );
  };
};
