import { assoc, merge } from "ramda";

export const listeners = (update, events) => {
  events.list.loadingPleaseWait.map(() => update(model => assoc("message", "Loading, please wait...", model)));

  events.list.todoList.map(todos => update(model => merge(model, { todos, message: "" })));
};
