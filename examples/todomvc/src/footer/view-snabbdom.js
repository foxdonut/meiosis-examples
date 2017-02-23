import h from "snabbdom/h";

import { intents } from "./actions";

export const footerView = model => {
  const clearCompleted = model => model.clearCompleted ?
    h("button.clear-completed", { on: { click: intents.clearCompleted } }, "Clear completed") : h("span");

  return h("footer.footer", [
    h("span.todo-count", model.itemsLeftText),
    h("ul.filters", [
      h("li", h("a", {
        attrs: { href: "#" },
        class: { selected: model.allSelected },
        on: { click: intents.filter("") }
      }, "All")),
      h("li", h("a", {
        attrs: { href: "#" },
        class: { selected: model.activeSelected },
        on: { click: intents.filter("active") }
      }, "Active")),
      h("li", h("a", {
        attrs: { href: "#" },
        class: { selected: model.completedSelected },
        on: { click: intents.filter("completed") }
      }, "Completed"))
    ]),
    clearCompleted(model)
  ]);
};
