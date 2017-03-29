import { h } from "preact";
import { createActions } from "./actions";

export const createDateView = update => {
  const actions = createActions(update);

  return model => {
    const error = model.errors && model.errors.value[0];

    return h("div", {},
      h("div", { class: "clearfix" },
        h("label", { class: "right-align col col-2 pr1" }, "Date:"),
        h("input", { class: "col col-2 field", type: "text", size: "10",
          value: model.value, onInput: actions.editDateValue })
      ),
      h("div", { class: "clearfix mb1" },
        h("span", { class: "col col-2 white"}, "_"),
        h("span", { class: "col col-6 red" }, error)
      )
    );
  };
};
