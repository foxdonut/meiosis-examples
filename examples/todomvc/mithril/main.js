import m from "mithril";
import { createTodoItem } from "./todoItem";
import { createMainActions } from "../common/main/actions";

export const createMain = propose => {
  const events = createMainActions(propose).events;
  const todoItem = createTodoItem(propose);

  return model =>
    m("section.main",
      m("input.toggle-all[type=checkbox]", {
        checked: model.allCompleted,
        onchange: events.onToggleAllTodos
      }),
      m("label", {for: "toggle-all"}, "Mark all as complete"),
      m("ul.todo-list", model.filteredTodos.map(todoItem(model)))
    );
};
