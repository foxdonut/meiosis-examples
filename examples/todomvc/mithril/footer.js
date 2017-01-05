import m from "mithril";
import classnames from "classnames";
import { createFooterActions } from "../common/footer/actions";

export const createFooter = propose => {
  const actions = createFooterActions(propose);

  const clearCompleted = model => model.clearCompleted ?
    m("button.clear-completed", { onclick: actions.events.onClearCompleted }, "Clear completed") : m("span");

  return model =>
    m("footer.footer",
      m("span.todo-count", model.itemsLeftText),
      m("ul.filters",
        m("li", m("a", {href: "#/", class: classnames({ selected: model.allSelected })}, "All")),
        m("li", m("a", {href: "#/active", class: classnames({ selected: model.activeSelected })}, "Active")),
        m("li", m("a", {href: "#/completed", class: classnames({ selected: model.completedSelected })}, "Completed"))
      ),
      clearCompleted(model)
    );
};
