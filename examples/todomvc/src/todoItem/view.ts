import h from "snabbdom/h";
import { VNode } from "snabbdom/vnode";

import { State } from "../util";
import { getTodoClassMap } from "./display";
import { state } from "./state";

export const createView = (actions: any, components: any) => (model: State) => (todoId: string) => {
  const todo = model.todosById[todoId];
  const editing = state.editing(model, todo);

  return h("li", { class: getTodoClassMap(model, todo) }, [
    h("div.view", [
      h("input.toggle", {
        attrs: { type: "checkbox" },
        on: { change: actions.toggleTodo(todo.id) },
        props: { checked: todo.completed }
      }),
      h("label", { on: { dblclick: actions.editTodo(todo) } }, todo.title),
      h("button.destroy", { on: { click: actions.deleteTodo(todo.id) } })
    ]),
    editing ? components.todoEdit.view(model.editTodo) : null
  ]);
};
