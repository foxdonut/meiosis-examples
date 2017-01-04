import m from "mithril";
//FIXME
const actions = { events: { onNewTodoKeyUp: () => undefined }};
const todoItemComponent = () => () => m("span");

export const main = model =>
  m("section.main",
    m("input.toggle-all[type=checkbox]", {
      checked: model.allCompleted,
      onchange: actions.events.onToggleAllTodos
    }),
    m("label", {for: "toggle-all"}, "Mark all as complete"),
    m("ul.todo-list", model.filteredTodos.map(todoItemComponent(model)))
  );
