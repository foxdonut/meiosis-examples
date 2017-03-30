import * as m from "mithril";

import { State } from "../util";
import { getTodoClasses } from "./display";
import { actions } from "./actions";
import { state } from "./state";
import { createView as todoEdit } from "../todoEdit/view-mithril";

export const createView = (update: Function) => {
  const todoEditView = todoEdit(update);

  return (model: State) => (todoId: string) => {
    const todo = model.todosById[todoId];
    const editing = state.editing(model, todo);

    return m("li", { class: getTodoClasses(model, todo) }, [
      m("div.view", [
        m("input.toggle", {
          type: "checkbox",
          checked: todo.completed,
          onchange: actions.toggleTodo(update, todo.id)
        }),
        m("label", { ondblclick: actions.editTodo(update, todo) }, todo.title),
        m("button.destroy", { onclick: actions.deleteTodo(update, todo.id) })
      ]),
      editing ? todoEditView(model.editTodo) : null
    ]);
  };
};