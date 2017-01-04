import m from "mithril";
import classnames from "classnames";
//FIXME
const actions = { events: { onNewTodoKeyUp: () => undefined }};

export const footer = model => {
  const clearCompleted = model.clearCompleted ?
    m("button.clear-completed", { onclick: actions.events.onClearCompleted }, "Clear completed") : m("span");

  return m("footer.footer",
    m("span.todo-count", model.itemsLeftText),
    m("ul.filters",
      m("li", m("a", {href: "#/", class: classnames({ selected: model.allSelected })}, "All")),
      m("li", m("a", {href: "#/active", class: classnames({ selected: model.activeSelected })}, "Active")),
      m("li", m("a", {href: "#/completed", class: classnames({ selected: model.completedSelected })}, "Completed"))
    ),
    clearCompleted
  );
};
