import { assoc, merge } from "ramda";
import preventDefault from "prevent-default";
import { updates } from "./updates";
import { validateModel } from "./validation";

export const actions = services => ({
  editingTodo: (update, field) => evt => updates.editingTodo(update, field, evt.target.value),

  saveTodo: (update, events, todo) => preventDefault(() => {
    const validationErrors = validateModel(todo);
    updates.validationErrors(update, validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      events.saveTodoStart(true);
      services.saveTodo(todo).
        then(events.saveTodoSuccess).
        catch(events.saveTodoFailure);
    }
  }),

  clearForm: update => preventDefault(() => updates.clearForm(update))
});
