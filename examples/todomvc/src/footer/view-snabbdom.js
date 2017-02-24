import h from "snabbdom/h";

import { intents } from "./actions";

export const footerView = model => {
  const clearCompleted = model => model.clearCompleted ?
    h("button.clear-completed", { on: { click: intents.clearCompleted } }, "Clear completed") : h("span");

  return h("footer.footer", [
    h("span.todo-count", model.itemsLeftText),
    h("ul.filters", [
      h("li", h("a", { attrs: { href: "#/" }, class: { selected: model.allSelected } }, "All")),
      h("li", h("a", { attrs: { href: "#/active" }, class: { selected: model.activeSelected } }, "Active")),
      h("li", h("a", { attrs: { href: "#/completed" }, class: { selected: model.completedSelected } }, "Completed"))
    ]),
    clearCompleted(model)
  ]);
};
