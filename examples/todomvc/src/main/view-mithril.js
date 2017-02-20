import m from "mithril";
//import { createTodoItem } from "./todoItem";
//import { createMainActions } from "../common/main/actions";
import { todoItemView } from "../todoItem/view-mithril";

const onToggleAllTodos = () => null;

export const mainView = model =>
  m("section.main",
    m("input.toggle-all[type=checkbox]", {
      checked: model.allCompleted,
      onchange: onToggleAllTodos
    }),
    m("label", {for: "toggle-all"}, "Mark all as complete"),
    m("ul.todo-list", model.filteredTodos.map(todoItemView(model)))
  );
