import h from "snabbdom/h";
import { VNode } from "snabbdom/vnode";

import { State } from "../util";
import { intents } from "./actions";

export const view = (model: State) => {
  const clearCompleted = (model: State) => model.clearCompletedVisible ?
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
