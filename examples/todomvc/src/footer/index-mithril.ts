import * as m from "mithril";
import * as classnames from "classnames";

import { Model, State } from "../util";
import { todoStorage } from "../app/todo-storage";

const triggerRouteChange = (update: Function, route: string) => {
  update((model: Model) => {
    model.route = route;
    return model;
  });
  m.route.set(route);
};

const actions = {
  clearCompleted: (update: Function, events: any) => () => todoStorage.clearCompleted().then(events.todosToDisplay(update)),
  filterBy: (update: Function, filterBy: string) => () => triggerRouteChange(update, "/" + filterBy)
};

export const createView = (update: Function, events: any) => (model: State) => {
  const clearCompleted = (model: State) => model.clearCompletedVisible ?
    m("button.clear-completed", { onclick: actions.clearCompleted(update, events) }, "Clear completed") : m("span");

  return m("footer.footer", [
    m("span.todo-count", model.itemsLeftText),
    m("ul.filters", [
      // These links use hrefs.
      m("li", m("a[href=/]", { oncreate: m.route.link, class: classnames({ selected: model.allSelected }) }, "All")),
      m("li", m("a[href=/active]", { oncreate: m.route.link, class: classnames({ selected: model.activeSelected }) }, "Active")),
      // This link triggers a route change. The result should be the same.
      m("li", m("a", { href: "javascript://", onclick: actions.filterBy(update, "completed"),
        class: classnames({ selected: model.completedSelected }) }, "Completed"))
    ]),
    clearCompleted(model)
  ]);
};
