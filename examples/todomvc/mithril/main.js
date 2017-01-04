import m from "mithril";
import { todoItem } from "./todoItem";
//FIXME
const actions = { events: { onNewTodoKeyUp: () => undefined }};

export const main = model =>
  m("section.main",
    m("input.toggle-all[type=checkbox]", {
      checked: model.allCompleted,
      onchange: actions.events.onToggleAllTodos
    }),
    m("label", {for: "toggle-all"}, "Mark all as complete"),
    m("ul.todo-list", model.filteredTodos.map(todoItem(model)))
  );
