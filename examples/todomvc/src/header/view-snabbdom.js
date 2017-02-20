import h from "snabbdom/h";

import { intents } from "./actions";

export const headerView = model =>
  h("header.header", [
    h("h1", "todos"),
    h("input.new-todo", {
      attrs: { placeholder: "What needs to be done?" },
      props: { autoFocus: true, value: model.newTodo },
      on: { keyup: intents.newTodoKeyUp }
    })
  ]);
