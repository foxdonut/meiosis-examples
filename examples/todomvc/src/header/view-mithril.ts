import * as m from "mithril";

import { State } from "../util";
import { actions } from "./actions";

export const view = (model: State, update: Function) =>
  m("header.header", [
    m("h1", "todos"),
    m("input.new-todo", {
      placeholder: "What needs to be done?",
      autoFocus: true, value: model.newTodo,
      onkeyup: actions.newTodoKeyUp(update)
    })
  ]);
