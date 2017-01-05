import m from "mithril";
import { createHeaderActions } from "../common/header/actions";

export const createHeader = propose => {
  const actions = createHeaderActions(propose);

  return model =>
    m("header.header",
      m("h1", "todos"),
      m("input.new-todo", {placeholder: "What needs to be done?", autoFocus: true,
        value: model.newTodo, onkeyup: actions.events.onNewTodoKeyUp})
    );
};
