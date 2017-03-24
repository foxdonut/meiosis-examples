import { updates } from "./updates";

export const listeners = update => ({
  editTodo: todo => updates.editTodo(update, todo),

  saveTodoSuccess: () => updates.clearForm(update)
});
