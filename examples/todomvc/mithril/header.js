import { propose } from "meiosis";
import m from "mithril";
import { headerActions } from "../common/header/actions";

const actions = headerActions(propose);

export const header = model =>
  m("header.header",
    m("h1", "todos"),
    m("input.new-todo", {placeholder: "What needs to be done?", autoFocus: true,
      value: model.newTodo, onkeyup: actions.events.onNewTodoKeyUp})
  );
