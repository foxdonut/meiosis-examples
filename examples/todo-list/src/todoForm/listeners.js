import { updates } from "./updates";

export const listeners = (update, events) => {
  events.editTodo.map(todo => updates.editTodo(update, todo));

  events.saveTodoSuccess.map(() => updates.clearForm(update));
};
