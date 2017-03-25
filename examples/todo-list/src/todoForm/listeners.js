import { updates } from "./updates";

export const listeners = (update, events) => {
  events.list.editTodo.map(todo => updates.editTodo(update, todo));

  events.form.saveTodoSuccess.map(() => updates.clearForm(update));
};
