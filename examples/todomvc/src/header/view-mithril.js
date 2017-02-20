import m from "mithril";

const onNewTodoKeyUp = () => null;

export const headerView = model =>
  m("header.header",
    m("h1", "todos"),
    m("input.new-todo", { placeholder: "What needs to be done?", autoFocus: true,
      value: model.newTodo, onkeyup: onNewTodoKeyUp })
  );
