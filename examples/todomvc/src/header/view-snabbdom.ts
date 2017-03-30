import h from "snabbdom/h";
import { VNode } from "snabbdom/vnode";

import { State } from "../util";

export const view = (actions: any) => (model: State) =>
  h("header.header", [
    h("h1", "todos"),
    h("input.new-todo", {
      attrs: { placeholder: "What needs to be done?" },
      props: { autoFocus: true, value: model.newTodo },
      on: { keyup: actions.newTodoKeyUp }
    })
  ]);
