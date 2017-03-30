import * as m from "mithril";

import { State } from "../util";

export const createView = (actions: any) => (model: State) =>
  m("header.header", [
    m("h1", "todos"),
    m("input.new-todo", {
      placeholder: "What needs to be done?",
      autoFocus: true, value: model.newTodo,
      onkeyup: actions.newTodoKeyUp
    })
  ]);
