import m from "mithril";
//FIXME
const actions = { events: { onNewTodoKeyUp: () => undefined }};

export const header = model =>
  m("header.header",
    m("h1", "todos"),
    m("input.new-todo", {placeholder: "What needs to be done?", autoFocus: true,
      value: model.newTodo, onkeyup: actions.events.onNewTodoKeyUp})
  );
