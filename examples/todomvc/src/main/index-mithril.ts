import * as m from "mithril";

import { State } from "../util";
import { actions } from "./actions";
import { createView as createTodoItem } from "../todoItem/view-mithril";

export const createView = (update: Function) => {
  const todoItemView = createTodoItem(update);

  return (model: State) =>
    m("section.main", [
      m("input.toggle-all", {
        type: "checkbox",
        checked: model.allCompleted,
        onchange: actions.toggleAllTodos(update)
      }),
      m("label", { for: "toggle-all" }, "Mark all as complete"),
      m("ul.todo-list", model.todoIds.map(todoItemView(model)))
    ]);
};
