import { assoc, merge } from "ramda";

export const listeners = update => ({
  loadingPleaseWait: () => update(model => assoc("message", "Loading, please wait...", model)),

  todoList: todos => update(model => merge(model, { todos, message: "" }))
});
