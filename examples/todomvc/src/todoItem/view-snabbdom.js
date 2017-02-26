import h from "snabbdom/h";

import { getTodoClassMap } from "./display";
import { intents } from "./actions";
import { state } from "./state";
import { todoEditView } from "../todoEdit/view-snabbdom";

export const todoItemView = model => todoId => {
  const todo = model.todosById[todoId];
  const editing = state.editing(model, todo);

  return h("li", { class: getTodoClassMap(model, todo) }, [
    h("div.view", [
      h("input.toggle", {
        attrs: { type: "checkbox" },
        props: { checked: todo.completed },
        on: { change: intents.toggleTodo(todo.id) }
      }),
      h("label", { on: { dblclick: intents.editTodo(todo) } }, todo.title),
      h("button.destroy", { on: { click: intents.deleteTodo(todo.id) } })
    ]),
    editing ? todoEditView(model.editTodo) : null
  ]);
};
