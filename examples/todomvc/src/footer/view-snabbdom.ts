import h from "snabbdom/h";
import { VNode } from "snabbdom/vnode";

import { State } from "../util";
import { actions } from "./actions";

export const view = (model: State, update: Function, events: any) => {
  const clearCompleted = (model: State) => model.clearCompletedVisible ?
    h("button.clear-completed", { on: { click: actions.clearCompleted(update, events) } }, "Clear completed") : h("span");

  return h("footer.footer", [
    h("span.todo-count", model.itemsLeftText),
    h("ul.filters", [
      // These links use hrefs.
      h("li", h("a", { attrs: { href: "#/" }, class: { selected: model.allSelected } }, "All")),
      h("li", h("a", { attrs: { href: "#/active" }, class: { selected: model.activeSelected } }, "Active")),
      // This link triggers a route change. The result should be the same.
      h("li", h("a", { attrs: { href: "javascript://" }, on: { click: actions.filterBy(update, "completed") },
        class: { selected: model.completedSelected } }, "Completed"))
    ]),
    clearCompleted(model)
  ]);
};
