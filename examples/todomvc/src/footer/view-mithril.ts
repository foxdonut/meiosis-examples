import * as m from "mithril";
import * as classnames from "classnames";

import { Model, State } from "../util";
import { todoStorage } from "../app/todo-storage";
import { actions as mainActions } from "../main/actions";

const triggerRouteChange = (update: Function, route: string) => {
  update((model: Model) => {
    model.route = route;
    return model;
  });
  // workaround until TS support for Mithril 1.0 is available.
  const mRoute: any = m.route;
  mRoute.set(route);
};

const actions = {
  clearCompleted: (update: Function) => () => todoStorage.clearCompleted().then(mainActions.displayTodos(update)),
  filterBy: (update: Function, filterBy: string) => () => triggerRouteChange(update, "/" + filterBy)
};

export const view = (model: State, update: Function) => {
  const clearCompleted = (model: State) => model.clearCompletedVisible ?
    m("button.clear-completed", { onclick: actions.clearCompleted(update) }, "Clear completed") : m("span");

  return m("footer.footer", [
    m("span.todo-count", model.itemsLeftText),
    m("ul.filters", [
      // These links use hrefs.
      m("li", m("a", { href: "#/", class: classnames({ selected: model.allSelected }) }, "All")),
      m("li", m("a", { href: "#/active", class: classnames({ selected: model.activeSelected }) }, "Active")),
      // This link sets the route on the model. The result should be the same.
      m("li", m("a", { href: "javascript://", onclick: actions.filterBy(update, "completed"),
        class: classnames({ selected: model.completedSelected }) }, "Completed"))
    ]),
    clearCompleted(model)
  ]);
};
