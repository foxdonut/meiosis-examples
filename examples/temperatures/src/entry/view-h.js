import { h } from "preact";
import { createActions } from "./actions";

export const createEntryView = update => {
  const actions = createActions(update);

  return model => {
    const error = model.errors && model.errors.value[0];

    return h("div", {},
      h("div", { class: "clearfix" },
        h("label", { class: "right-align col col-2 pr1" }, "Entry number:"),
        h("input", { class: "col col-1 field", type: "text", size: "2",
          value: model.value, onInput: actions.editEntryValue })
      ),
      h("div", { class: "clearfix mb1" },
        h("span", { class: "col col-2 white"}, "_"),
        h("span", { class: "col col-6 red" }, error)
      )
    );
  };
};